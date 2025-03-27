import { AlertCircle, Terminal, PanelLeftClose } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";
import { Button } from "../ui/button";

export function ShadAlert() {
  const [show, setshow] = useState<boolean>(true);

  return (
    <div className="space-y-4">
      <Button onClick={() => setshow((e) => !e)}>
        {show ? "Hide" : "Open"} <PanelLeftClose />
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
  );
}
