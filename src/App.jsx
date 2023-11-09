import { useState } from "react"

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]

function App() {
  const [currentImage, setCurrentImage] = useState(0)
  
  return (
    <div>
      <div className="slide-container">
        <h2>Image Carousel</h2>
        <div className="arrow-buttons">
            <button className="left-arrow">⬅</button>
            <button className="right-arrow">⮕</button>
        </div>
      </div>
    </div>
  )
}

export default App
