import React from 'react';

import GalleryItem from './Gallery-item';


/**the main gallary component
 * @param photos that will be displayed
 * display the gallery
*/
const Gallery = ({photos}) => {
    let newPhotos;
    if (photos.length > 0) {
        newPhotos = photos.map((item) => {
        return <GalleryItem 
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
    console.log(newPhotos);

    return(
      <div className="photo-list">
        { newPhotos }
      </div> 
    );

}

export default Gallery;