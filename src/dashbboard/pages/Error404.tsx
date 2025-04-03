import { useNavigate } from "react-router-dom";
import Image from "@/assets/not-found.png";
import { Button } from "@/components/ui/button";

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-screen bg-layout overflow-hidden p-6">
      <div className="max-w-[480px] mx-auto text-center">
        <div className="h-full flex flex-col flex-1 justify-center gap-6">
          <p className="text-typo-light leading-none">404 ERROR</p>
          <p className="text-typo font-medium text-5xl text-center">
            <span className="block">Something's</span>
            <span className="block">Missing</span>
          </p>
          <p className="text-typo">
            You're seeing this page because the URL you entered doesn't exist.
            Yet.
          </p>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </div>
      <div
        className={`relative hidden bg-[linear-gradient(360deg,_rgba(140,_216,_208,_0.4)_-6.64%,_#8CD8D0_106.38%)] 
        lg:flex rounded-[30px] items-center justify-center`}
      >
        <img src={Image} alt="Asset Pow" className="w-[74%]" />
      </div>
    </div>
  );
};

export default Error404;
