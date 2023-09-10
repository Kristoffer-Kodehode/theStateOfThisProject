export default function CarouselItem (properties) {
    const { imgURL, title } = properties


    return (
        <>
            <img className="galleryImg" src={imgURL} alt={title} />
        </>
    )
}