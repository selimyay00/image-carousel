
After creating and preparing the React app, I've created an array called images and added all the image URL's. Then I've started to build the JSX structure.

Created a wrapper div element with the class name of slide container.

Added a header inside the div.

Added buttons for skipping to next slide and going back to the previous slide. These buttons are shown as left and right arrows.

Added onClick event handler to buttons in order to add the functionality.

Then I used JavaScript array .map() method and called a callback function for each image in the images array.

I realized that I need to create a React state because I had to show which slide we're currently at. For that, I used useState hook and created a state called currentImage and initialized as 0.

Created a div for each images and added the img element inside. I used Vanilla JavaScript for programming part. I know I can also do the same thing with ternary or && operators but I like using Vanilla JavaScript.

The logic goes like that: If currentImage is equal to images.length - 1, (which means we're at the last image) set currentImage to 0 again. So that it can go back to the first slide. Else, add 1 to the currentImage.
