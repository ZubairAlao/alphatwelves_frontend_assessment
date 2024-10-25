import { Dot, Download, Search } from "lucide-react"
import EventList from "./EventList"
import { Input } from "./ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
} from "@/components/ui/select"
import * as React from "react"
import { eventsProgram } from "@/constants"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

export type EventPrograms  = {
    title: string;
    speaker?: string;
    date: string;
    status: string;
  }



const EventHistory = () => {
    const [date, setDate] = React.useState<Date | undefined>(undefined);
    const [status, setStatus] = useState<string | undefined>(undefined);
    const [speaker, setSpeaker] = useState<string | undefined>(undefined);
    const [orderEvent, setOrderEvents] = useState<string>("recent");
    const [searchTitle, setSearchTitle] = useState<string>("");

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const formatDate = (date: Date | undefined): string => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);

        return `${year}-${month}-${day}`;
    }

    const clearAll = () => {
        setDate(undefined);
        setStatus(undefined);
        setSpeaker(undefined);
        setSearchTitle("");
        setOrderEvents("")

    }

    console.log(formatDate(date));

    const filteredEvents = eventsProgram.filter((event) => {
        const isDateMatch = date
          ? format(new Date(event.date), "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
          : true;
        const isStatusMatch = status ? event.status === status : true;
        const isSpeakerMatch = speaker ? event.speaker === speaker : true;
        const isSearchMatch = searchTitle
          ? event.title.toLowerCase().includes(searchTitle.toLowerCase())
          : true;
    
        return isDateMatch && isStatusMatch && isSpeakerMatch && isSearchMatch;
      });

        const sortedEvents = [...filteredEvents];
        if (orderEvent === "recent") {
            sortedEvents.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else if (orderEvent === "oldest") {
            sortedEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }

        console.log(sortedEvents)
    
  return (
    <section className="pb-[100px]">
        <div>
            <h1 className="text-xl font-semibold mb-4 container">Events History</h1> 
            <div className="space-y-2  xl:space-y-0  text-sm container xl:flex items-center gap-6">
                <div className="relative w-full xl:max-w-[200px]">
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={searchTitle}
                        onChange={(e) => setSearchTitle(e.target.value)}
                        className="pl-10 pr-3 dark:border-none dark:bg-background-dark focus:ring-0 focus:outline-none"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-full xl:max-w-[180px]  justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                        )}
                        >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={(e) => {
                                setDate(e);
                                setIsCalendarOpen(false);
                              }}
                            initialFocus
                            className="dark:bg-background-dark"
                        />
                    </PopoverContent>
                </Popover>

                <Select onValueChange={(value) => setStatus(value)} value={status}>
                    <SelectTrigger className="xl:max-w-[80px]">
                        {status ? status : "Status"} 
                    </SelectTrigger>
                    <SelectContent className="dark:bg-background-dark bg-white dark:text-white">
                        <SelectGroup>
                        <SelectItem value="In Progress">In Progress</SelectItem>
                        <SelectItem value="Completed">Completed</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => setSpeaker(value)}>
                    <SelectTrigger className="w-full xl:max-w-[80px] dark:border-none dark:bg-background-dark focus:ring-0 focus:outline-none">
                        {speaker ? speaker : "Name"}
                    </SelectTrigger>
                    <SelectContent className="dark:bg-background-dark bg-white dark:text-white">
                        <SelectGroup>
                        <SelectLabel>Name</SelectLabel>
                        {[...new Set(eventsProgram.map((event) => event.speaker))].map(
                            (speaker) => (
                                <SelectItem key={speaker} value={speaker}>
                                {speaker}
                                </SelectItem>
                            )
                        )}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <div className="flex gap-2 xl:items-center">
                    <p>Displaying {filteredEvents.length} results</p>
                    <span className="ml-8 px-1 py-0.5 bg-red-500 rounded-md text-white cursor-pointer" onClick={clearAll}>clear</span>
                </div>

                <div className="flex justify-between items-center">
                    <p className="mr-4">Sort:</p>
                    <Select onValueChange={(value) => setOrderEvents(value)}>
                        <SelectTrigger className="w-[130px] dark:border-none dark:bg-background-dark focus:ring-0 focus:outline-none">
                            {orderEvent ? orderEvent : "Order Time"}
                        </SelectTrigger>
                        <SelectContent className="dark:bg-background-dark bg-white dark:text-white">
                            <SelectGroup>
                            <SelectItem value="recent">Most Recent</SelectItem>
                            <SelectItem value="oldest">Oldest</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="flex xl:gap-2 justify-between items-center">
                    <div className="w-[30px] h-[30px] border-2 flex flex-col items-center justify-center rounded-md cursor-pointer p-1">
                        <Dot className="w-5" />
                        <Dot className="w-5" />
                        <Dot className="w-5" />
                    </div>
                    <div className="flex gap-2 border-2 py-1 px-3 rounded-md cursor-pointer">
                        <Download className="w-[20px]" />
                        Export
                    </div>
                </div>
            </div>
            <EventList eventsData={sortedEvents}/>
        </div>
    </section>
  )
}

export default EventHistory