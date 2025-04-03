import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import ShadButtons from "./components/shadcn_prac/ShadButtons";
// import ShadAccordion from "./components/shadcn_prac/ShadAccordion";
// import { ShadAlert } from "./components/shadcn_prac/ShadAlert";
// import ShadAlertDialog from "./components/shadcn_prac/ShadAlertDialog";
// import ShadAvatar from "./components/shadcn_prac/ShadAvatar";
// import ShadBadge from "./components/shadcn_prac/ShadBadge";
// import ShadBreadcrumb from "./components/shadcn_prac/ShadBreadcrumb";
// import ShadCalender from "./components/shadcn_prac/ShadCalender";
// import ShadCarousal from "./components/shadcn_prac/ShadCarousal";
// import ShadChart from "./components/shadcn_prac/ShadChart";
// import ShadCheckBox from "./components/shadcn_prac/ShadCheckBox";
import { RouterProvider } from "react-router-dom";
import { router } from "./dashbboard/routes";

// import RenderProb from "./components/RenderProb";

// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <div className="bg-slate-600 flex justify-center p-5"> */}
    {/* <div className="bg-slate-300  max-w-lg p-5 space-y-4 rounded-xl"> */}
    {/* <App /> */}
    {/* <RenderProb /> */}
    {/* <ShadButtons />
        <ShadAccordion />
        <ShadAlert />
        <ShadAlertDialog />
        <ShadAvatar />
        <ShadBadge />
        <ShadBreadcrumb />
        <ShadCalender />
        <ShadCarousal />
        <ShadChart />
        <ShadCheckBox /> */}
    {/* </div> */}
    {/* </div> */}
    <RouterProvider router={router} />
  </StrictMode>
);
