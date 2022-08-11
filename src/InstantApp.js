import { useState, useEffect } from "react";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";

function InstantApp() {

  const [hyphenWidget, setHyphenWidget] = useState();

  useEffect(() => {
    const widget = HyphenWidget.default.init(
      document.getElementById("widget"),
      {
        dAppName: "instant-bridge",
        showWidget: true,
        showCloseButton: false,
        tag: "widget"
      }
    );

    if (widget) {
      setHyphenWidget(widget);
    }
  }, []);


  return (
    <div className="App">


      <div id="widget"></div>
    </div>
  );
}

export default InstantApp;
