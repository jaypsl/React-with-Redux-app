import React from "react";
import { LOCAL_API_END_POINT } from "../constants/constants";

const PreviewImage = props => {
  const imageURL = props.selectedImage.local
    ? `${LOCAL_API_END_POINT}/${props.selectedImage.download_url}`
    : `${props.selectedImage.download_url}.jpg`;
  return (
    <div className="image-preview-section">
      <div className="image-preview">
        {Object.keys(props.selectedImage).length > 0 ? (
          <div>
            <h2>{props.selectedImage.author}</h2>
            <img height="200" width="200" src={imageURL} />
            <br />
            <button
              className="clear-button"
              onClick={() => props.onSelectImage({})}
            >
              Clear
            </button>
          </div>
        ) : (
          <p>No image selected</p>
        )}
      </div>
    </div>
  );
};

export default PreviewImage;
