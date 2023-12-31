import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/3408746/pexels-photo-3408746.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2072573/pexels-photo-2072573.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1581098/pexels-photo-1581098.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/3680315/pexels-photo-3680315.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    // setCurrentImage(currentImage + 1); 
      // If I use this,
        // when it comes to the last image
          // clicking on next slide button
            // will create a bug
    
    // images.length - 1 is equal to the last index
    if (currentImage === images.length - 1) {
      setCurrentImage(0); // go back to the first index(image)
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
        <h2 className="header">Image Carousel</h2>
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
                  <img src={image} alt="image" className="slide-images" />
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
