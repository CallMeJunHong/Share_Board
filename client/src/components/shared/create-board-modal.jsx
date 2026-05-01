import { useNavigate } from "@tanstack/react-router"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { axiosInstance } from "@/lib/axios-instance.js"


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
  <DialogContent className="sm:max-w-sm  border shadow-lg rounded p-5 bg-white/90 backdrop-blur-sm">
    <DialogHeader>
      <DialogTitle className="text-black">Create Room</DialogTitle>
    </DialogHeader>

    <div className="grid gap-4 py-4">
      <Label className="text-black" htmlFor="name">Name</Label>
      <Input 
        id="name" 
        value={name} 
        onChange={handleNameChange} 
        placeholder="Enter Room name" 
        name="name" 
      />
    </div>

    <DialogFooter>
      <DialogClose asChild>
        <Button >Cancel</Button>
      </DialogClose>
      <Button variant="outline" onClick={handleSubmit}>Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}
