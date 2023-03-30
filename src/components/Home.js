import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = (searchImage) => {
  const [images, setImages] = useState([]);

  const searchNewImage = searchImage.searchImage;
  //   console.log(searchNewImage);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:7000/image")
        .then((res) => res.json())
        .then((data) => setImages(data));
    };
    fetchData();
  }, []);

  //   console.log(images);

  return (
    <div className="container">
      <div className="boxes">
        {searchImage.length <= 0
          ? images.map((image) => {
              return (
                <div className="border" key={image._id}>
                  <div className="image-Holder">
                    <img src={image.urls} alt={image._id} />
                  </div>
                </div>
              );
              {
              }
            })
          : searchNewImage.map((image) => {
              return (
                <div className="border" key={image.id}>
                  <div className="image-Holder">
                    <img src={image.urls.thumb} alt={image.user} />
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Home;
