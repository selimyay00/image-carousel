import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    // setCurrentImage(currentImage - 1); => 
        // when it comes to the last image
          // clicking on next slide button
            // it will create a bug
    
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  function previousImage() {
    // setCurrentImage(currentImage - 1); => 
        // when it comes to the first image
          // clicking on previous slide button
            // it will also create a bug

            if (currentImage === 0) {
              setCurrentImage(images.length - 1);
            } else {
              setCurrentImage(currentImage - 1);
            }
  }

  return (
    <div>
      <div className="slide-container">
        <h2>Image Carousel</h2>
        <div className="arrow-buttons">
            <button 
              className="left-arrow"
              onClick={previousImage}
            >
              ⬅
            </button>

            <button 
              className="right-arrow"
              onClick={nextImage}
            >
              ⮕
            </button>
        </div>
        {
          images.map((image, index) => {
            if (currentImage === index) {
              return (
                <div key={image}>
                  <img src={image} alt="image" id="image" />
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default App;
