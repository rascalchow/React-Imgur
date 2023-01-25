import React, { Component, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { GalleryBody } from "./GalleryBody";

import "../css/gallery.css";
import { useAppSelector } from "../store";

const GalleryView: React.FC = () => {

  const { galleryId } = useParams();

  const gallery = useAppSelector(state => state.galleriesList.find((i: any) => i.id === galleryId))

  return (
    <div className="row">
      <div className="col-md-12">
        <Link className="gallery__home-link" to="/">
          <div className="logo" />.
        </Link>
        <GalleryBody gallery={gallery} />
      </div>
    </div>
  );
}

export default GalleryView;