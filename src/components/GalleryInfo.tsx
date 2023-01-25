import React from "react";

type GalleryInfoProps = {
  gallery: any;
}
export const GalleryInfo = ({ gallery }: GalleryInfoProps) => {
  return (
    <div>
      <div className="gallery-info__count">
        <span>{gallery.points}</span> Points |
        <span> {gallery.views}</span> Views |
        <span> {gallery.score}</span> Score |
        <span> {gallery.ups}</span> Ups |
        <span> {gallery.downs}</span> Downs
      </div>
      <div className="gallery-info__row">
        {gallery.tags.length ? (
          gallery.tags.map((tag: any, index: number) => {
            return (
              <div key={index} className="gallery-info__tag-wrapper">
                <p className="gallery-info__tag">{tag.display_name}</p>
              </div>
            );
          })
        ) : (
          <div className="col">There are no tags :(</div>
        )}
      </div>
    </div>
  );
};
