/* Next task:
-  write next tasks for project here, commit messages get buried
- example task
*/

// importing CSS directly into the related js file
import './styles.css';

// module imports, from named and default
import { logToConsole as lg, tableToConsole as tb } from './logger'; //shorthand loggers

const imageSliderSetup = ( ()=> {
  let imageIndex = 0; //control index for zero-indexed images
  const totalImages = 5; //match to .image divs

  //change CSS variable after logic used to change imageIndex
  const setCSSVarImageIndex = ()=> document.documentElement.style.setProperty( '--imageIndex', imageIndex );

  // listener for next/previous image buttons
  document.querySelector('.sliderFrame').addEventListener( 'click', e=> {
    e.stopPropagation();
    switch (e.target.className) {
      case 'previous':
        if (imageIndex === 0) { //at first image
          imageIndex = totalImages - 1; //go to last by setting new control index
          setCSSVarImageIndex();
        } else {
          --imageIndex;
          setCSSVarImageIndex();
        }
        break;
      case 'next':
        if (imageIndex === totalImages - 1) { //at last image
          imageIndex = 0; //go to first
          setCSSVarImageIndex();
        } else {
          ++imageIndex;
          setCSSVarImageIndex();
        }
    }
  } );

  //auto advance to next image every 5 seconds
  setInterval( ()=> {
    if (imageIndex === totalImages - 1) { //at last image
      imageIndex = 0; //go to first
      setCSSVarImageIndex();
    } else {
      ++imageIndex;
      setCSSVarImageIndex();
    }
  }, 5000 ); //every 5 seconds

  // return { test: 'hi' };
} )();
