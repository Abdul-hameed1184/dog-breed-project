import React, { useEffect } from "react";

const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return null; // This component doesn't render anything
};

export default ScrollToTop;
