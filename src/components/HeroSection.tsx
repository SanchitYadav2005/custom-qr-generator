import Image from "next/image";
import facebook from "../../public/facebook.jpg";
import youtube from "../../public/youtube.jpg";
import twitter from "../../public/twitter.jpg";
import '../styles/herosection.css';

type Props = {};
export const HeroSection = ({}: Props) => {
  return (
    <div className="hero-section">
      
      <div className="image-container">
        <Image
          src={facebook}
          alt="facebook"
          placeholder={"blur"}
          className="img"
        />
        <Image
          src={twitter}
          alt="twitter"
          placeholder={"blur"}
          className="img"
        />
        <Image
          src={youtube}
          alt="youtube"
          placeholder={"blur"}
          className="img"
        />
      </div>
      <div className="text">
        {" "}
        Generate <span>custom QR codes</span> in seconds. <span>Simplify </span>connections, <span>amplify </span>
        impact.
      </div>
    </div>
  );
};
