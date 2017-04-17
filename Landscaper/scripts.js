/*Functions to Execute on Page Load */
document.onreadystatechange = () => {
 if (document.readyState === 'complete') {
   eventsFill();
   resumeFill();
   addNavClickEvents();
 }
};
