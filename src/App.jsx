import FallingHearts from "./components/FallingHearts.jsx";
import { QRCodeCanvas } from "qrcode.react";
import bgImg from "./assets/wedding.jpg";     
import ringImg from "./assets/ring.png";     
import BackgroundMusic from "./components/BackgroundMusic.jsx";
export default function App() {
  return (
    <main className="page">
       <BackgroundMusic />
      {/* Background image */}
      <img src={bgImg} alt="" className="bg-img" />

      {/* Hearts */}
      <FallingHearts count={18} />

      {/* Content */}
      <div className="top-ar" dir="rtl" lang="ar">
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْم
      </div>

      <div className="heading">
        Please join us to celebrate the<br />wedding of :
      </div>

      <div className="names">
        <div className="couple">
          <div>Samira</div>
          <div>&</div>
          <div>Khodor</div>
        </div>
      </div>

      {/* Month label above the row (optional – remove if you don't want it twice) */}
      {/* <div className="section">August</div> */}

      {/* ------------- DATE ROW ------------- */}
      {/* Left and right labels have top & bottom lines. 
          The center is ONE ring that contains: August / 19 / 2025 */}
      <div className="date-row">
        <div className="label-ud">Saturday</div>

        <div
          className="ring-center"
          style={{ backgroundImage: `url(${ringImg})`, '--ring-size': '92px' }}
        >
          <div className="ring-stack">
            <div className="ring-month">August</div>
            <div className="ring-day">19</div>
            <div className="ring-year">2025</div>
          </div>
        </div>

        <div className="label-ud">At 7:30 pm</div>
      </div>
      {/* ------------- END DATE ROW ------------- */}

      {/* Venue */}
      <div className="venue">Roche D’oree</div>
      <div className="address">Mejdlaya – Zgharta highway</div>

      {/* QR */}
      <div className="footer">
        <div className="qr" aria-hidden="true">
          <QRCodeCanvas value="https://maps.app.goo.gl/GHdqmgDhWVjLs8k77" size={100} />
        </div>
        <div className="scan">Scan me</div>
        <button onClick={() => document.querySelector("audio").play()}>
          Play Music
        </button>
      </div>
    </main>
  );
}
