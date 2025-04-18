import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-teal-700 flex justify-between items-center  px-8">
      <h3 className="font-bold text-white">GARAJ by Jazz</h3>
      <div className="flex items-center gap-4  p-4 rounded-md w-fit">
        {/* Notification Bell */}
        <Button
          variant="ghost"
          size="icon"
          className="bg-teal-400 hover:bg-teal-200"
        >
          <Bell className="h-5 w-5" />
        </Button>

        {/* Profile Chip */}
        <Button
          variant="ghost"
          className="flex items-center gap-2 bg-teal-400 hover:bg-teal-200  rounded-full px-4 py-2"
        >
          <span className="text-sm font-medium">Michael Smith</span>
          <Avatar className="h-6 w-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-black">MS</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
};

export default Header;
