import React from "react";
import "./HotelImageGallery.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const HotelImageGallery = ({ hotelImages }) => {
  const images = [
    {
      original: `${hotelImages}`,
      thumbnail: `${hotelImages}`,
    },
    {
      original: `${hotelImages}`,
      thumbnail: `${hotelImages}`,
    },
    {
      original: `${hotelImages}`,
      thumbnail: `${hotelImages}`,
    },
  ];

  return (
    <div>
      <ImageGallery
        autoPlay
        items={images}
        renderItem={(hotelImages) => (
          <img
            src={hotelImages?.original}
            className="gallery-image w-full object-cover"
          />
        )}
        renderThumbInner={(hotelImages) => (
          <img
            src={hotelImages?.original}
            style={{ height: "60px", width: "100%" }}
          />
        )}
      />
    </div>
  );
};

export default HotelImageGallery;
