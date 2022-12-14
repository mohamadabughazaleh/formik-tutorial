import React, { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

export default function Deck() {
  const [open, toggle] = useState(false);
  const [ref, { height }] = useMeasure();
  const props = useSpring({ height: open ? height : 0 });

  return (
    <div className={"container"}>
      <div ref={ref} className={"main"} onClick={() => toggle(!open)}>
        <animated.div className={"fill"} style={props} />
        <animated.div className={"content"}>
          {props.height.to((x) => x.toFixed(0))}
        </animated.div>
      </div>
    </div>
  );
}
