import CarouselItem from "./carouselItem"
import { imgArray } from "../data/data"

export default function CarouselBase () {
    return (
        <div>
            <button className="arrow"> &lt; </button>
            {imgArray.map((img) => {
                console.log(img.imgURL)
                return(
                    <div className="Carousel" key={img.id}>
                        <CarouselItem
                            imgUrl={img.imgURL} 
                            title={img.title}
                        ></CarouselItem>
                    </div>
                );
            })}
            <button className="arrow"> &gt; </button>
            
        </div>
        
    )
}