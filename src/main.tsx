import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RenderProb from "./components/RenderProb";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <RenderProb />
  </StrictMode>
);
