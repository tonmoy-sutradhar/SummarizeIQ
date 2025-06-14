"use client";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";

export default function DeleteButton() {
  const [open, setOpen] = useState(false);

  const handleDelete = async () => {};
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant={"ghost"}
          size="icon"
          className="text-rose-500 bg-rose-50 border border-gray-200"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Summary</DialogTitle>
          <DialogDescription>
            Are you sure. You want to delete this summary? This action can not
            be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            variant={"ghost"}
            className="  cursor-pointer bg-gray-50 border border-gray-200 hover:text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            Cancel
          </Button>
          <Button
            variant={"destructive"}
            className=" bg-rose-600   cursor-pointer "
            onClick={handleDelete}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

// ++++++++++++
// "use client";
// import { icons, Trash2 } from "lucide-react";
// import { Button } from "../ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../ui/dialog";

// export default function DeleteButton() {
//   return (
//     <Dialog>
//       <DialogTrigger>
//         {" "}
//         <Button
//           variant={"ghost"}
//           size="icon"
//           className="text-rose-500 bg-rose-50 border border-gray-200"
//         >
//           <Trash2 className="w-4 h-4"></Trash2>
//         </Button>
//       </DialogTrigger>
//       <DialogContent>
//         <DialogHeader>
//           <DialogTitle>Are you absolutely sure?</DialogTitle>
//           <DialogDescription>
//             This action cannot be undone. This will permanently delete your
//             account and remove your data from our servers.
//           </DialogDescription>
//         </DialogHeader>
//         <DialogFooter></DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }

// right
