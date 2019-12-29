import React from "react";

const ListImages = props => (
  <div className="image-list">
    <input type="file" onChange={e => props.onDrop(e)} />
    <h2>Image List</h2>
    {props.imageList.map((image, index) => {
      const imageURL = image.url ? image.download_url : image.uploadImage_url;
      return (
        <div key={index} className="image">
          <img
            height="200"
            width="200"
            src={imageURL}
            onClick={() => props.onSelectImage(image)}
          />
        </div>
      );
    })}
  </div>
);

export default ListImages;
