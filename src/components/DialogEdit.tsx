import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export type EventProgramWithText  = {
  title: string;
  speaker?: string;
  date: string;
  DisplayText:string;
}

export function DialogEdit({ title, date, DisplayText}: EventProgramWithText) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <p className="hover:font-bold cursor-pointer p-1 text-xs rounded-md">{DisplayText}</p>
      </DialogTrigger>
      <DialogContent className="md:max-w-[425px] w-[300px] xl:w-[500px] bg-white dark:bg-background-dark dark:text-white">
        <DialogHeader>
          <DialogTitle>Edit Event</DialogTitle>
          <DialogDescription>
            <div>
                <p>Event Date: {date}</p>
            </div>
            <div>
                <p>Event Description: {title}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-col gap-3">
            <Button type="submit" className="bg-white border-2 dark:text-black">Edit</Button>
            <Button type="submit" className="bg-red-500">Delete</Button>
          <Button type="submit" className="bg-primarySelect">Mark as completed</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
