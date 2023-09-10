import CarouselItem from "./carouselItem";
import { imgArray } from "../data/data";

export default function CarouselBase() {
  return (
    <div>
      <button className="arrow" id="left-arrow">
        {" "}
        &lt;{" "}
      </button>
      {imgArray.map((img) => {
        return (
          <div className="Carousel" key={img.id}>
            <CarouselItem imgURL={img.imgURL} title={img.title} id={img.id}></CarouselItem>
          </div>
        );
      })}
      <button className="arrow" id="right-arrow">
        {" "}
        &gt;{" "}
      </button>
    </div>
  );
}
