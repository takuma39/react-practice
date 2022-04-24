/* eslint react-hooks/exhaustive-deps: off  */
import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0);
  const [showText, setShowText] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowText = () => {
    setShowText(!showText);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        showText || setShowText(true);
      } else {
        showText && setShowText(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <div className="wrap">
      <ColorfulMessage color="blue">color</ColorfulMessage>
      <button onClick={onClickCountUp}>count up</button>
      <button onClick={onClickSwitchShowText}>on/off</button>
      <p>{num}</p>
      {showText && <p>表示</p>}
    </div>
  );
};
