After creating and preparing the React app, I created an array called images and added all the image URLs. I then started building the JSX structure.

I created a wrapper div element with the class name of slide-container. Inside this div, I added a header.

For navigation, I added buttons to skip to the next slide and go back to the previous slide, displayed as left and right arrows. I added onClick event handlers to these buttons to provide functionality.

Realizing the need to track the current slide, I used the useState hook to create a state called currentImage, initialized to 0.

For each image in the images array, I created a div and added an img element inside using Vanilla JavaScript for the programming part. While I'm aware that I could achieve the same with ternary or && operators, I prefer using Vanilla JavaScript.

The logic is as follows: If currentImage is equal to images.length - 1 (indicating the last image), I set currentImage to 0, allowing it to go back to the first slide. Otherwise, I increment currentImage by 1.
