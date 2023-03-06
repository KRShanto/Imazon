import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useMobileStore } from "@/stores/mobile";

import Pic1 from "@/public/amazon/1.jpg";
import Pic2 from "@/public/amazon/2.jpg";
import Pic3 from "@/public/amazon/3.jpg";
import Pic4 from "@/public/amazon/4.jpg";
import Pic5 from "@/public/amazon/5.jpg";

export default function Banner() {
  const { isMobile } = useMobileStore();

  return (
    <div className="banner" style={{ width: "80%" }}>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        {[Pic1, Pic2, Pic3, Pic4, Pic5].map((pic, index) => (
          <div
            key={index}
            className="banner-image"
            style={{ height: isMobile ? "50vh" : "60vh" }}
          >
            <Image src={pic} alt="Banner image" style={{ height: "100%" }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
