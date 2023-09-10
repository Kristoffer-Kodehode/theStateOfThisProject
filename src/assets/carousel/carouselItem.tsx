export default function CarouselItem(properties: { imgURL: string; title: string }) {
  const { imgURL, title } = properties;

  return (
    <>
      <img className="galleryImg" src={imgURL} alt={title} />
    </>
  );
}
