export default function CarouselItem(properties: { imgURL: string; title: string; id: string }) {
  const { imgURL, title, id } = properties;

  return (
    <>
      <img className="galleryImg" id={id} src={imgURL} alt={title} />
    </>
  );
}
