import React from "react";
import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
  return (
    <div className="App">
    <AnimatedCursor
      innerSize={20}
      outerSize={50}
      color='145, 94, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'img',
        'h2',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
    </div>
  );
}

export default Cursor