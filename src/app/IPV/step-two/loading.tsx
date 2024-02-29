import BoltIcon from "@mui/icons-material/Bolt";
import SpaceShipIcon from "@/utils/spaceship-icon.png";
import Image from "next/image";
import Loadingtext from "@/components/loadingtext";
import "./loading.css";

function Loading() {
  return (
    <div>
      <div className="bolt-wrapper">
        <BoltIcon className="bolt" sx={{ fontSize: "3rem" }} />
      </div>
      <div className="ufo-wrapper">
        <Image className="ufo" src={SpaceShipIcon} alt="" />
      </div>
      <Loadingtext />
    </div>
  );
}

export default Loading;
