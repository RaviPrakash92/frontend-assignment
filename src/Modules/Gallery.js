import { useState, useEffect } from "react";
import  './Gallery.css';
import { BrowserRouter as Router } from "react-router-dom";

function Gallery() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (<div>
        {items.map((item) => (
             <a href={item.urls.small}>
                <img src={item.urls.small}/>
             </a>             
        ))}
    </div>);
    }
  }
  
  export default Gallery;
