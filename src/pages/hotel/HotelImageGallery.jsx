import React from "react";
import "./HotelImageGallery.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const HotelImageGallery = ({ img }) => {
  console.log(img)
  const images = [
    {
      original: `${img}`,
      thumbnail: `${img}`,
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div>
      <ImageGallery
        items={images}
        renderItem={(img) => (
          <img
            src={img?.original}
            className="gallery-image w-full object-cover"
          />
        )}
        renderThumbInner={(img) => (
          <img src={img.original} style={{ height: "60px", width: "100%" }} />
        )}
      />
    </div>
  );
};

export default HotelImageGallery;
