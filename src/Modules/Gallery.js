import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        <Router>
        {items.map((item) => (
            //<img src = {item.urls.small}/>
             <a href={item.urls.small}>
                <img src={item.urls.small}/>
             </a>  
            
            // <Link to={item.urls.small}>
            //    <img src={item.urls.small}/>
            // </Link>

        ))}
        </Router>
        </div>);
    }
  }
  
  export default Gallery;