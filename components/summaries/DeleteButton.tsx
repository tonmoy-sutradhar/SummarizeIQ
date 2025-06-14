import { icons, Trash2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DeleteButton() {
  return (
    <Button
      variant={"ghost"}
      size="icon"
      className="text-rose-500 bg-rose-50 border border-gray-200"
    >
      <Trash2 className="w-4 h-4"></Trash2>
    </Button>
  );
}
