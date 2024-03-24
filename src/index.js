/* Next task:
-  write next tasks for project here, commit messages get buried
- example task
*/

// importing CSS directly into the related js file
import './styles.css';

// module imports, from named and default
// import { logToConsole as lg, tableToConsole as tb } from './logger'; //shorthand loggers

( ()=> {
  //state vars with initalizations ready for dependencies if needed.
  let imageIndex = 0; //zero-indexed images
  const totalImages = 5; //match to amount of .image divs
  let lastDisplayedImageIndex = totalImages - 1;
  const navDots = document.querySelectorAll('.navDot');

  //after state is ready, set the CSS variable and appropriate new content
  const updateDisplay = ()=> {
    document.documentElement.style.setProperty( '--imageIndex', imageIndex );
    //set old and new dots
    navDots[lastDisplayedImageIndex].textContent = '○';
    navDots[imageIndex].textContent = '●';
  };
  updateDisplay();//for first run

  const goToNext = ()=> {
    if ( imageIndex === totalImages - 1 ) { // if at last image
      lastDisplayedImageIndex = imageIndex; //set last image
      imageIndex = 0; //set next image
      updateDisplay(); //use the new settings
    } else {
      lastDisplayedImageIndex = imageIndex;
      ++imageIndex;
      updateDisplay();
    }
  };

  const goToPrevious = ()=> {
    if ( imageIndex === 0 ) { //if at first image
      lastDisplayedImageIndex = imageIndex; //set last image
      imageIndex = totalImages - 1; //set next image
      updateDisplay(); //use the new settings
    } else {
      lastDisplayedImageIndex = imageIndex;
      --imageIndex;
      updateDisplay();
    }
  };

  const goToPicked = dotIndex=> {
    lastDisplayedImageIndex = imageIndex;
    imageIndex = dotIndex;
    updateDisplay();
  };

  // listener for next/previous image buttons
  document.querySelector('.sliderFrame').addEventListener( 'click', e=> {
    e.stopPropagation();
    switch ( e.target.className ) {
      case 'previous':
        goToPrevious();
        break;
      case 'next':
        goToNext();
        break;
      case 'navDot':
        //make sure to extract correct type (number) from dataset!!!
        goToPicked( +e.target.dataset.dotIndex );
    }
  } );

  //auto advance to next image every 5 seconds. save returned intervalID if needed.
  setInterval( goToNext, 5000 );
} )();
