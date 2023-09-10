export default function CarouselItem(properties: {
  imgURL: string;
  title: string;
  imgId: string;
}) {
  const { imgURL, title, imgId } = properties;

  return (
    <>
      <img className="galleryImg" id={imgId} src={imgURL} alt={title} />
    </>
  );
}
