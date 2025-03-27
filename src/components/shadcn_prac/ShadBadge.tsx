import { Badge } from "@/components/ui/badge";

const ShadBadge = () => {
  return (
    <div>
      <h3 className="py-3 italic text-xl font-medium text-center">
        Shad CN Badge
      </h3>
      <div className="flex justify-between">
        <Badge variant="default">Badge</Badge>
        <Badge variant="outline">Badge</Badge>
        <Badge variant="secondary">Badge</Badge>
        <Badge variant="destructive">Badge</Badge>
      </div>
    </div>
  );
};

export default ShadBadge;
