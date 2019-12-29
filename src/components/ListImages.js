import React from 'react';
import { LOCAL_API_END_POINT } from '../constants/constants';
const ListImages = (props) => (
    <div className="image-list">
        <input type="file" onChange={(e) => props.onDrop(e)} />
        <p>Image List</p>
        {props.imageList.map((image) => {
            const imageURL = image.local ? `${LOCAL_API_END_POINT}/${image.download_url}`:`${image.download_url}.jpg`;
            return(
                <div key={image.key} className="image">
                    <img height="150" width="200" src={imageURL} onClick={() => props.onSelectImage(image)} />
                </div>
            )
        })}
    </div>
);

export default ListImages;