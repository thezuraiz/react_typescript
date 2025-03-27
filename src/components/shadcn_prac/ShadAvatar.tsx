import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";

const ShadAvatar = () => {
  return (
    <>
      <h3 className="py-3 italic text-xl font-medium text-center">
        ShadCN Avatar
      </h3>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Badge variant={"outline"}>CN</Badge>
      </div>
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/137849379?v=4" />
          <AvatarFallback>Zuraiz Khan</AvatarFallback>
        </Avatar>
        <Badge variant={"outline"}>Zuraiz Khan</Badge>
      </div>
    </>
  );
};

export default ShadAvatar;
