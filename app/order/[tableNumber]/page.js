"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { Brand, SectionIcon } from "@/components/Brand";

export default function OrderPage() {
  const params = useParams();
  const tableNumber = decodeURIComponent(params.tableNumber);
  const [session, setSession] = useState(null), [categories, setCategories] = useState([]), [menuItems, setMenuItems] = useState([]), [cart, setCart] = useState([]), [message, setMessage] = useState(""), [loading, setLoading] = useState(true), [sending, setSending] = useState(false);

  useEffect(() => { loadData(); }, [tableNumber]);
  async function loadData() {
    setLoading(true);
    const { data: sessionData, error: sessionError } = await supabase.from("sessions").select("*").eq("table_number", tableNumber).eq("status", "open").order("opened_at", { ascending: false }).limit(1).maybeSingle();
    if (sessionError) { setMessage(sessionError.message); setLoading(false); return; }
    const { data: categoryData, error: categoryError } = await supabase.from("menu_categories").select("*").order("sort_order");
    const { data: menuData, error: menuError } = await supabase.from("menu_items").select("*").eq("is_available", true);
    if (categoryError || menuError) { setMessage(categoryError?.message || menuError?.message); setLoading(false); return; }
    setSession(sessionData); setCategories(categoryData || []); setMenuItems(menuData || []); setLoading(false);
  }
  function getQuantity(id) { return cart.find((item) => item.id === id)?.quantity || 0; }
  function changeQuantity(item, delta) {
    setCart((current) => {
      const found = current.find((x) => x.id === item.id);
      if (!found && delta > 0) return [...current, { id: item.id, name: item.name, price: Number(item.price), quantity: 1 }];
      return current.map((x) => x.id === item.id ? { ...x, quantity: x.quantity + delta } : x).filter((x) => x.quantity > 0);
    });
  }
  const total = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const itemCount = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  async function submitOrder() {
    if (!session) return setMessage("ไม่พบโต๊ะที่เปิดอยู่");
    if (!cart.length) return setMessage("กรุณาเลือกอาหาร");
    setSending(true); setMessage("");
    const { error } = await supabase.from("orders").insert({ session_id: session.id, table_number: tableNumber, items: cart, total, status: "received" });
    if (error) { setMessage(error.message); setSending(false); return; }
    setCart([]); setMessage("ส่งออเดอร์ไปที่ครัวเรียบร้อยแล้ว"); setSending(false);
  }
  if (loading) return <main className="container loading-page"><Brand compact /><p>กำลังโหลดเมนู...</p></main>;
  if (!session) return <main className="container"><div className="site-topbar"><Brand compact /></div><div className="card error-panel"><h1>ไม่พบโต๊ะ</h1><p className="error">โต๊ะนี้ยังไม่ได้เปิดใช้งาน หรือ Session ถูกปิดแล้ว</p></div></main>;

  return <main className="container customer-page">
    <header className="customer-header">
      <Brand compact />
      <div className="customer-meta"><div className="table-pill">โต๊ะ {tableNumber}</div><div className="customer-people">ผู้ใหญ่ {session.adult_count ?? 1} • เด็ก {session.child_count ?? 0}</div></div>
    </header>
    <div className="customer-welcome"><div><div className="eyebrow">MENU • ORDER FROM YOUR TABLE</div><h1>เลือกเมนูที่ต้องการ</h1><p className="muted">กด + เพื่อเพิ่มจำนวน หรือกด − เพื่อลดจำนวน</p></div><div className="menu-count"><SectionIcon type="menu" /> {menuItems.length} เมนู</div></div>
    {categories.map((category) => {
      const items = menuItems.filter((item) => item.category_id === category.id); if (!items.length) return null;
      return <section key={category.id} className="menu-section"><div className="category-heading"><div className="category-title"><span className="category-marker"><SectionIcon type="menu" /></span><h2>{category.name}</h2></div><span>{items.length} เมนู</span></div>
        <div className="menu-grid">{items.map((item) => { const quantity = getQuantity(item.id); return <div className={`menu-card ${quantity ? "selected" : ""}`} key={item.id}>
          <div className="menu-image-wrap">{item.image_url ? <img className="menu-image" src={item.image_url} alt={item.name} /> : <div className="menu-placeholder"><SectionIcon type="menu" /></div>}</div>
          <div className="menu-info"><h3>{item.name}</h3><p>{item.description || "เมนูสดใหม่จากครัวซูชิวังหน้า"}</p><strong>{Number(item.price).toLocaleString()} บาท</strong></div>
          <div className="quantity-control"><button className="qty-minus" onClick={() => changeQuantity(item, -1)} disabled={!quantity}>−</button><span>{quantity}</span><button className="qty-plus" onClick={() => changeQuantity(item, 1)}>+</button></div>
        </div>; })}</div>
      </section>;
    })}
    <section className="cart-card"><div className="cart-header"><div><div className="eyebrow">YOUR ORDER</div><h2><span className="inline-icon"><SectionIcon type="cart" /></span> รายการที่เลือก</h2></div><div className="cart-count">{itemCount} รายการ</div></div>
      {!cart.length ? <p className="muted">ยังไม่มีรายการ เลือกเมนูด้านบนได้เลย</p> : <div className="cart-list">{cart.map((item) => <div className="cart-row" key={item.id}><div><strong>{item.name}</strong><div className="muted">{Number(item.price).toLocaleString()} บาท / ชิ้น</div></div><div className="cart-actions"><button onClick={() => changeQuantity(item, -1)}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item, 1)}>+</button><strong className="line-total">{(item.price * item.quantity).toLocaleString()} บาท</strong></div></div>)}</div>}
      <div className="cart-total"><span>ยอดรวม</span><strong>{total.toLocaleString()} บาท</strong></div><button className="submit-order-button" onClick={submitOrder} disabled={!cart.length || sending}>{sending ? "กำลังส่งออเดอร์..." : "ส่งออเดอร์ไปที่ครัว"}</button>{message && <p className="notice success">{message}</p>}
    </section>
  </main>;
}
