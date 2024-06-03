import Image from "next/image";
import "../styles/qr.css";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Qr = ({ URL }: { URL: string }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = URL;
    link.download = 'qr_code.png'; // Default filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="qr-container">
      <Image src={URL} className="qr" width={200} height={200} alt="qr image" />
      <div className="overlay">
        <button onClick={handleDownload} className="download-button">
          <ArrowDownTrayIcon className="icon" />
          Download
        </button>
      </div>
    </div>
  );
};

export default Qr;
