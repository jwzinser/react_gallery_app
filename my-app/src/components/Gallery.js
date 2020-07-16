import React from 'react';
import Item from './Item';



const Gallery = (props) => {
  const photos = props.data;
  let newPhotos;
    if (photos.length > 0) {
        newPhotos = photos.map((item) => {
        return <Item 
                    farm={item.farm}
                    server={item.server}
                    id={item.id}
                    secret={item.secret}
                    title={item.title} 
                    key={item.id}
                />
        });
    } else {
      newPhotos = <p> no results </p>
    }

    return(
      <div className="photo-list">
        <ul>
          {newPhotos}
        </ul>
      </div> 
    );

}

export default Gallery;