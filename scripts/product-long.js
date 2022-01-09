// ************* All imports for index.html ************* //
import textWrapper from './modules/wrapped-text.js';
import customCursor  from './modules/custom-cursor.js';
import clickableCursor  from './modules/clickable-cursor.js';
import copyToClipboard from './modules/clipboard.js';
import magneticBtn from './modules/magnetic-btn.js';
import imageReveal  from './modules/image-reveal.js';
import productLongChoreo from './choreos/product-long-choreo.js';
import pageTransition from './modules/page-transition.js';




// ************* Calling the imports ************* //
customCursor();
clickableCursor();
magneticBtn();
copyToClipboard();
imageReveal();
textWrapper();
productLongChoreo();
pageTransition();

