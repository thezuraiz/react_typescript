import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ShadButtons from "./components/shadcn_prac/ShadButtons";
import ShadAccordion from "./components/shadcn_prac/ShadAccordion";
import { ShadAlert } from "./components/shadcn_prac/ShadAlert";

// import RenderProb from "./components/RenderProb";

// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-slate-600 flex justify-center">
      <div className="bg-slate-300  h-screen max-w-lg p-5 space-y-4">
        {/* <App /> */}
        {/* <RenderProb /> */}
        <ShadButtons />
        <ShadAccordion />
        <ShadAlert />
      </div>
    </div>
  </StrictMode>
);
