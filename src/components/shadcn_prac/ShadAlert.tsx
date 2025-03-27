import { AlertCircle, Terminal, LucideMoveDiagonal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { Button } from "../ui/button";

export function ShadAlert() {
  const [show, setshow] = useState<boolean>(true);

  return (
    <>
      <h3 className="py-2 italic text-xl font-medium text-center underline">
        Shad CN Alert
      </h3>
      <div className="space-y-4">
        <Button
          variant={"outline"}
          className="w-full"
          onClick={() => setshow((e) => !e)}
        >
          {show ? "Hide" : "Open"} Simple Alert <LucideMoveDiagonal />
        </Button>
        {show && (
          <>
            <Alert>
              <Terminal className="h-4 w-4" />
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your session has expired. Please log in again.
              </AlertDescription>
            </Alert>
          </>
        )}
      </div>
    </>
  );
}
