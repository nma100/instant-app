import { useEffect } from "react";
import * as HyphenWidget from "@biconomy/hyphen-widget";
import "@biconomy/hyphen-widget/dist/index.css";

function InstantApp() {

  useEffect(() => {
    HyphenWidget.default.init(
      document.getElementById("widget"),
      {
        dAppName: "instant-bridge",
        env: "production", // can be test, staging or production. Default: "staging"
        showWidget: true,
        showCloseButton: false,
        tag: "widget"
      }
    );
  }, []);


  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 id="title" className="display-1 mb-3">Instant Bridge</h1>  
        <h2 className="fs-1 text-muted mb-5">Fast and cheaper cross-chain transfers</h2>  
        <div id="widget"></div>
    </div>
  );
}

export default InstantApp;
