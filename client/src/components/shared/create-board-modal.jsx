import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { axiosInstance } from "@/lib/axios-instance.js"
import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"

export function CreateBoardModal({ isOpen, onClose }) {

  const navigate = useNavigate();

  const [name, setName] = useState('');

  const handleNameChange = (event) => {
    const {value} = event.target;
    setName(value);
  };

  const handleSubmit = async() => {
    try {
      const url = '/shareboard';
      const {status} = await axiosInstance.post(url, { name });

      if(status === 201) {
        onClose();
        navigate({ to: "/" });
      }

    } catch (err) {
      console.log(err);
    }

  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        {/* DialogTrigger is used to open the dialog when the button is clicked */}
        <DialogTrigger asChild>
          <Button variant="outline">Create Room</Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Create Room</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={handleNameChange} 
              placeholder="Enter Room name" 
              name="name" />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleSubmit}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
