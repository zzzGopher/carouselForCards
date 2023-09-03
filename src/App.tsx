import "./styles.css";
import { useRef, useState, useEffect } from "react";

export default function App() {
  const [pos, setPos] = useState(0);
  const myRef = useRef(null);
  let down = false;
  let startX;
  let scrollLeft;
  const current = myRef.current;

  useEffect(() => console.log("position: " + pos), [pos]);

  function mouseDown(e: MouseEvent) {
    e.preventDefault();
    thisElement = e.currentTarget;
    down = true;

    startX = e.pageX - thisElement.offsetLeft;
    scrollLeft = thisElement.scrollLeft;

    thisElement.classList.add("j");
    posX = thisElement.getBoundingClientRect().x;
    posY = thisElement.getBoundingClientRect().y;
  }

  function mouseUp(e: MouseEvent) {
    e.preventDefault();
    mouseUpTarget = e.currentTarget;
    thisElement.classList.remove("j");
    down = false;

    {
      /* find better variables than 300, 1100 etc possibly boudningclientrects of childNodes */
    }

    if (mouseUpTarget.scrollLeft > 300 && mouseUpTarget.scrollLeft < 1100) {
      mouseUpTarget.scrollTo(633, 0);
    } else if (mouseUpTarget.scrollLeft < 300) {
      mouseUpTarget.scrollTo(0, 0);
    } else mouseUpTarget.scrollTo(1266, 0);
  }

  function mouseMove(e: MouseEvent) {
    e.preventDefault();
    if (down) {
      const x = e.pageX - e.currentTarget.offsetLeft;
      const walk = (x - startX) * 1;
      e.currentTarget.scrollLeft = scrollLeft - walk;
    }
  }

  return (
    <div className="App">
      <h1 className="hayh1">dd</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div
        onMouseUp={(e) => mouseUp(e)}
        onMouseDown={(e) => mouseDown(e)}
        onMouseMove={(e) => mouseMove(e)}
        ref={myRef}
        className={"container"}
      >
        <div className="one">d</div>
        <div className="two">e</div>
        <div className="three">f</div>
      </div>
    </div>
  );
}
