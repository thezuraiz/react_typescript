import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NotificationCard = () => {
  return (
    <div className="flex items-start justify-between py-4 rounded-xl hover:bg-gray-200">
      {/* Left: Avatar + Info */}
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src="/rizwan.jpg" alt="Rizwan" />
          <AvatarFallback>R</AvatarFallback>
        </Avatar>

        <div className="text-sm">
          <p className="font-semibold">Rizwan</p>
          <p className="text-muted-foreground">
            Opened a Maintenance{" "}
            <span className="text-emerald-600 font-medium">On</span>
          </p>
          <p className="text-emerald-700 font-semibold">Device No 11235228</p>
        </div>
      </div>

      {/* Right: Timestamp */}
      <div className="text-xs text-muted-foreground">Wed 16 April 5:33PM</div>
    </div>
  );
};

export default NotificationCard;
