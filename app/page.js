import Link from "next/link";
import { Brand, SectionIcon } from "@/components/Brand";

export default function HomePage() {
  return (
    <main className="container home-page">
      <header className="site-topbar">
        <Brand compact />
        <span className="status-chip">SYSTEM ONLINE</span>
      </header>

      <section className="hero-card">
        <div className="hero-copy">
          <div className="eyebrow">SUSHI • JAPANESE RESTAURANT</div>
          <h1>ซูชิวังหน้า</h1>
          <p>ระบบสั่งอาหารผ่าน QR พร้อมจอครัวแบบเรียลไทม์</p>
          <div className="hero-actions">
            <Link href="/order/20" className="hero-primary"><SectionIcon type="menu" /> ดูหน้าสั่งอาหาร</Link>
            <Link href="/generate-qr" className="hero-secondary"><SectionIcon type="qr" /> เปิดโต๊ะ / สร้าง QR</Link>
          </div>
        </div>
        <div className="hero-brand-art"><Brand /></div>
      </section>

      <section className="feature-grid">
        <Link href="/generate-qr" className="feature-card feature-red">
          <div className="feature-icon"><SectionIcon type="table" /></div>
          <div><h2>จัดการโต๊ะ</h2><p>เปิดโต๊ะ ระบุจำนวนผู้ใหญ่/เด็ก และสร้าง QR สำหรับลูกค้า</p></div>
        </Link>
        <Link href="/kitchen" className="feature-card feature-blue">
          <div className="feature-icon"><SectionIcon type="kitchen" /></div>
          <div><h2>จอครัว</h2><p>รับออเดอร์ เปลี่ยนสถานะ และติดตามงานแบบเรียลไทม์</p></div>
        </Link>
        <Link href="/dashboard" className="feature-card feature-gold">
          <div className="feature-icon"><SectionIcon type="dashboard" /></div>
          <div><h2>Dashboard</h2><p>ดูยอดขาย จำนวนออเดอร์ และโต๊ะที่กำลังใช้งาน</p></div>
        </Link>
      </section>

      <section className="flow-card">
        <div><div className="eyebrow">HOW IT WORKS</div><h2>ขั้นตอนการใช้งาน</h2></div>
        <div className="flow-steps">
          <span>01 เปิดโต๊ะ</span><b>→</b><span>02 ลูกค้าสแกน QR</span><b>→</b><span>03 สั่งอาหาร</span><b>→</b><span>04 ครัวทำอาหาร</span><b>→</b><span>05 เสิร์ฟ</span>
        </div>
      </section>
    </main>
  );
}
