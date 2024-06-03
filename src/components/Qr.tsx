import Image from "next/image";
import "../styles/qr.css";

const Qr = ({ URL }: any) => {
  return (
    <Image src={URL} className="qr" width={500} height={500} alt="qr image" />
  );
};

export default Qr;
