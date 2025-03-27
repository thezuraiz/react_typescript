import { ChevronRight, Loader2, MailOpen } from "lucide-react";
import { Button } from "../ui/button";

const ShadButtons = () => {
  return (
    <>
      <h3 className="py-3 italic text-xl font-medium text-center">
        Shad CN Buttons
      </h3>
      <div className="flex  items-center justify-between gap-2 my-5 flex-wrap p-5">
        <Button>Click me</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button variant={"destructive"}>Destructive</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button variant={"ghost"}>Ghost</Button>
        <Button variant={"link"}>link</Button>

        <Button>
          <ChevronRight />
        </Button>
        <Button>
          <MailOpen /> Login with Email
        </Button>
        <Button disabled>
          <Loader2 className="animate-spin" />
          Please wait
        </Button>
      </div>
    </>
  );
};

export default ShadButtons;
