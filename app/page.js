import Link from "next/link";
import { Brand, SectionIcon } from "@/components/Brand";

export default function HomePage() {
  return (
    <main className="container home-page">

      {/* HEADER */}
      <header className="site-topbar">
        <Brand compact />

        <div className="topbar-right">
          <span className="status-dot" />
          <span>ONLINE</span>
        </div>
      </header>


      {/* HERO */}
      <section className="hero-card modern-hero">

        <div className="hero-copy">

          <div className="eyebrow">
            SUSHI • JAPANESE RESTAURANT
          </div>

          <h1>
            ซูชิวังหน้า
          </h1>

          <p>
            อร่อยง่าย สั่งอาหารผ่าน QR
            <br />
            พร้อมระบบครัวแบบเรียลไทม์
          </p>

          <div className="hero-actions">

            <Link
              href="/order/20"
              className="hero-primary"
            >
              <SectionIcon type="menu" />
              ดูเมนูอาหาร
            </Link>

            <Link
              href="/generate-qr"
              className="hero-secondary"
            >
              <SectionIcon type="qr" />
              เปิดโต๊ะ / สร้าง QR
            </Link>

          </div>

        </div>


        {/* LOGO */}
        <div className="hero-logo-box">
          <Brand />
        </div>

      </section>


      {/* HOW IT WORKS */}
      <section className="flow-card">

        <div>
          <div className="eyebrow">
            HOW IT WORKS
          </div>

          <h2>
            สั่งอาหารง่ายในไม่กี่ขั้นตอน
          </h2>
        </div>

        <div className="flow-steps">

          <span>
            <b>01</b>
            เปิดโต๊ะ
          </span>

          <b className="flow-arrow">→</b>

          <span>
            <b>02</b>
            สแกน QR
          </span>

          <b className="flow-arrow">→</b>

          <span>
            <b>03</b>
            สั่งอาหาร
          </span>

          <b className="flow-arrow">→</b>

          <span>
            <b>04</b>
            ครัวทำอาหาร
          </span>

          <b className="flow-arrow">→</b>

          <span>
            <b>05</b>
            เสิร์ฟ
          </span>

        </div>

      </section>


      {/* FEATURES */}
      <section className="feature-grid">

        <Link
          href="/generate-qr"
          className="feature-card feature-red"
        >
          <div className="feature-icon">
            <SectionIcon type="table" />
          </div>

          <div>
            <h2>จัดการโต๊ะ</h2>
            <p>
              เปิดโต๊ะ ระบุจำนวนผู้ใหญ่และเด็ก
              พร้อมสร้าง QR
            </p>
          </div>
        </Link>


        <Link
          href="/kitchen"
          className="feature-card feature-blue"
        >
          <div className="feature-icon">
            <SectionIcon type="kitchen" />
          </div>

          <div>
            <h2>จอครัว</h2>
            <p>
              รับออเดอร์และติดตามสถานะแบบเรียลไทม์
            </p>
          </div>
        </Link>


        <Link
          href="/dashboard"
          className="feature-card feature-gold"
        >
          <div className="feature-icon">
            <SectionIcon type="dashboard" />
          </div>

          <div>
            <h2>Dashboard</h2>
            <p>
              ดูยอดขาย ออเดอร์ และโต๊ะที่กำลังใช้งาน
            </p>
          </div>
        </Link>

      </section>

    </main>
  );
}
