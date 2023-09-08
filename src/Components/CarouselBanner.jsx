import { Carousel } from "antd";
import wedding1 from "../assets/banner1.jpg";
import wedding2 from "../assets/banner2.jpg";
import wedding3 from "../assets/banner3.jpg";
import wedding4 from "../assets/banner4.jpg";
import wedding5 from "../assets/banner5.jpg";
import "../scss/CarouselBanner.scss";

function CarouselBanner() {
  return (
    <Carousel dots={window.innerWidth >= 900} autoplay className="carousel">
      <div>
        <img src={wedding1} alt="" />
      </div>
      <div>
        <img src={wedding2} alt="" />
      </div>
      <div>
        <img src={wedding3} alt="" />
      </div>
      <div>
        <img src={wedding4} alt="" />
      </div>
      <div>
        <img src={wedding5} alt="" />
      </div>
    </Carousel>
  );
}

export default CarouselBanner;
