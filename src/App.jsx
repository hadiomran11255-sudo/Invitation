// App.jsx
import FallingHearts from "./components/FallingHearts.jsx";
import { QRCodeCanvas } from "qrcode.react";
import bgImg from "./assets/wedding.jpg";
import ringImg from "./assets/weddingring2.png"; 

export default function App() {
  return (
    <main className="page">
      <section className="card" role="article" aria-label="Wedding invitation">
        <img src={bgImg} alt="" className="bg-img" />
        <FallingHearts count={18} />

        <div className="top-ar" dir="rtl" lang="ar">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم
        </div>

        <div className="heading">
          Please join us to celebrate the
          <br />
          wedding of :
        </div>

        {/* RING IMAGE (rotating) */}
        <div
          className="ring-wrap"
          style={{
           
            "--hole": "60%", 
            "--ring-x": "0px", 
            "--ring-y": "2px", 
          }}
        >
          <div className="ring-tilt">
            <img src={ringImg} alt="Gold ring" className="ring-img spin" />
          </div>

          {/* Names (they’ll appear inside the ring) */}
          <div className="names">
            <div className="couple">
              <div>Ahlam</div>
              <div>&</div>
              <div>Hadi</div>
            </div>
          </div>
        </div>

        {/* Month */}
        <div className="section">August</div>

        {/* DATE ROW — one line */}
        <div className="date-row">
          <div className="label-lr">
            <span>Saturday</span>
          </div>
          <div className="day">19</div>
          <div className="label-lr">
            <span>At 7:30 pm</span>
          </div>
        </div>

        {/* Year */}
        <div className="section">2025</div>

        <div className="venue">Roche D’oree</div>
        <div className="address">Mejdlaya – Zgharta highway</div>

        <div className="footer">
          <div className="qr" aria-hidden="true">
            <QRCodeCanvas
              value="https://maps.app.goo.gl/your-venue-link"
              size={100}
            />
          </div>
          <div className="scan">Scan me</div>
        </div>
      </section>
    </main>
  );
}
