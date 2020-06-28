import React from 'react';
function createMarkup() {
    return {__html: 'First &middot; Second   m '};
  }
  
  function MyComponent() {
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
/**Items from gallery
 * @param (farm, server, id, secret, title) photo props from gallery
 * generate each img from gallery
 */
const GalleryItem = ({ farm, server, id, secret, title }) => { 
    const img_url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg` ;
    return (
        <img key={id} src={img_url} alt={title}  />
        // <View style={{ backgroundColor: "blue", flex: 0.3 }} />
        // MyComponent()
        // <div dangerouslySetInnerHTML={createMarkup()} />

        );
  };
  
  export default GalleryItem;