/* Next task:
-  write next tasks for project here, commit messages get buried
- example task
*/

// importing CSS directly into the related js file
import './styles.css';

// module imports, from named and default
import { logToConsole as lg, tableToConsole as tb } from './logger'; //shorthand loggers

const viewRollImage = ( imageIndex=> {
  //// Get the root element (usually <html>)
  const root = document.documentElement;
  // set bubbling evt listener
  document.querySelector('.sliderFrame').addEventListener( 'click', e=> {
    switch (e.target.className) {
      case 'goLeft':
        lg(e.target.className);
        break;
      case 'goRight':
        lg(e.target.className);
    }
  } );

  // Set a CSS variable
  // root.style.setProperty('--my-color', 'blue');

  return {
    test: 'hi'
  };
} )();
