import React from 'react';


const Item = ({ farm, server, id, secret, title }) => { 
    const img_url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg` ;
    return (
      <li>
        <img key={id} src={img_url} alt={title}  />
      </li>
        );
  };
  
  export default Item;