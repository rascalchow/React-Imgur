import React from "react";
import { GalleryInfo } from "./GalleryInfo";

type GalleryBodyProps = {
  gallery: any;
}

export const GalleryBody = ({ gallery }: GalleryBodyProps) => {

  return (
    <div className="gallery-body">
      <h1 className="gallery-body__title">{gallery.title}</h1>
      <p className="gallery-body__name">by {gallery.account_url}</p>
      {gallery.images ? (
        gallery.images.map((image: any) => {
          return (
            <div key={image.id} className="gallery-body__image-container">
              <div className="gallery-body__image-wrapper">
                {(gallery.images &&
                  gallery.images[0].animated && (
                    <video
                      preload="auto"
                      autoPlay={true}
                      loop={true}
                      className="gallery-body__image"
                    >
                      <source src={gallery.images[0].mp4} type="video/mp4" />
                    </video>
                  )) ||
                  (gallery.image && (
                    <img src={gallery.image.link} alt={image.title} />
                  )) || (
                    <img
                      src={image.link}
                      alt={image.title}
                      className="gallery-body__image"
                    />
                  )}
              </div>
              <p className="gallery-body__image-description">
                {image.description}
              </p>
            </div>
          );
        })
      ) : (
        <div className="gallery-body__image-wrapper">
          <img className="gallery-body__image" src={gallery.link} />
        </div>
      )}
      {gallery.description && (
        <p className="gallery-body__description">{gallery.description}</p>
      )}
      <GalleryInfo gallery={gallery} />
    </div>
  );
};
