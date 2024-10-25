import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
  } from "@/components/ui/pagination";
  import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { ArrowLeft } from "lucide-react";
  import { ArrowRight } from "lucide-react";
import { EventPrograms } from "./EventHistory";
import { DialogEdit } from "./DialogEdit";

  export interface EventListProps {
    eventsData: EventPrograms[];
  }
  
  const EventList: React.FC<EventListProps> = ({ eventsData }) => {
      const [rowsPerPage, setRowsPerPage] = useState(10);
      // const rowsPerPage = 10;
      const numberOptions = [5, 10, 15, 20];
      const totalEvents = eventsData.length;
      const totalPages = Math.ceil(totalEvents / rowsPerPage); // Calculate total number of pages
      const [currentPage, setCurrentPage] = useState(1);
  
    // Calculate the start and end indices based on the current page
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
  
    // Handle page click
    const handlePageClick = (page: number) => {
      setCurrentPage(page);
    };
  
    // Generate page numbers with ellipsis
    const renderPageNumbers = () => {
      const pageNumbers = [];
  
      // Always show the first page and the last page
      if (totalPages <= 3) {
        // Show all page numbers if total pages are 3 or less
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(
            <PaginationItem key={i}>
              <PaginationLink
                className={currentPage === i ? "font-bold bg-gray-600  text-white rounded-full h-[24px] w-[24px] cursor-pointer" : "cursor-pointer"}
                onClick={() => handlePageClick(i)}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
      } else {
        // Show the first two pages, ellipsis, and the last two pages
        pageNumbers.push(
          <PaginationItem key={1}>
            <PaginationLink
              className={currentPage === 1 ? "font-bold bg-[#F1F5F9] dark:bg-[#6A6676] rounded-full h-[24px] w-[24px] cursor-pointer" : "cursor-pointer"}
              onClick={() => handlePageClick(1)}
            >
              1
            </PaginationLink>
          </PaginationItem>
        );
  
        if (currentPage > 3) {
          pageNumbers.push(
            <PaginationEllipsis key="start-ellipsis" />
          );
        }
  
        // Show the two pages before and after the current page
        for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
          pageNumbers.push(
            <PaginationItem key={i}>
              <PaginationLink
                className={currentPage === i ? "font-bold bg-[#F1F5F9] dark:bg-[#6A6676] rounded-full h-[24px] w-[24px]" : " cursor-pointer"}
                onClick={() => handlePageClick(i)}
              >
                {i}
              </PaginationLink>
            </PaginationItem>
          );
        }
  
        if (currentPage < totalPages - 2) {
          pageNumbers.push(
            <PaginationEllipsis key="end-ellipsis" />
          );
        }
  
        pageNumbers.push(
          <PaginationItem key={totalPages}>
            <PaginationLink
              className={currentPage === totalPages ? "font-bold bg-[#F1F5F9] dark:bg-[#6A6676] rounded-full h-[24px] w-[24px] cursor-pointer" : "cursor-pointer"}
              onClick={() => handlePageClick(totalPages)}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        );
      }
  
      return pageNumbers;
    };
  
    // Handle Next page click
    const handleNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    // Handle Previous page click
    const handlePreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    return (
      <div className="mt-6">
          <div className="flex justify-between items-center text-sm h-fit py-3 bg-[#F1F5F9] dark:bg-[#6A6676] px-8 lg:mx-8 xl:hidden">
            <p>Event Name</p>
            <p>Event Status</p>
          </div>
        <div className="container">
          {/* Render Accordion for the current page */}
          <Accordion type="single" collapsible className="w-full xl:hidden">
          {eventsData && eventsData.length > 0 ? (
            eventsData.slice(startIndex, endIndex).map((eventlist, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="flex items-center text-xs">
                  <span className="w-[140px] text-left">{eventlist.title}</span>
                  <span className={`p-1 text-white text-xs rounded-md ${eventlist.status.toLowerCase() === "in progress" ? "bg-green-700" : "bg-blue-600"}`}>
                    {eventlist.status}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="flex justify-between items-center text-xs">
                  <p>{eventlist.speaker}</p>
                  <DialogEdit title={eventlist.title} date={eventlist.date} DisplayText="Edit" />
                  <p>{eventlist.date}</p>
                </AccordionContent>
              </AccordionItem>
            ))
          ) : (
            <p className="font-bold my-8 flex justify-center">No Data</p>
          )}
          </Accordion>

          <div className="hidden xl:block max-w-screen-xl border-2">
          <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Event</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Speaker</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className=" w-full">
              {eventsData && eventsData.length > 0 ? (
                eventsData.slice(startIndex, endIndex).map((eventlist, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <DialogEdit 
                        title={eventlist.title} 
                        date={eventlist.date} 
                        DisplayText={eventlist.title} 
                      />
                    </TableCell>
                    <TableCell>{eventlist.date}</TableCell>
                    <TableCell>{eventlist.speaker}</TableCell>
                    <TableCell className="text-right text-white">
                      <span className={`p-2 rounded-md ${eventlist.status.toLowerCase() === "in progress" ? "bg-green-700" : "bg-blue-600"}`}>{eventlist.status}</span>
                      </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">NO data</TableCell>
                </TableRow>
              )}
              </TableBody>
            </Table>
          </div>

        </div>

        {/* Pagination Component */}
        <Pagination>
          <PaginationContent className="pt-2 text-xs px-2">
            {/* Previous Button */}
            <PaginationItem>
              <ArrowLeft className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                onClick={handlePreviousPage}/>
            </PaginationItem>

            {/* Render Page Numbers with Ellipsis */}
            {renderPageNumbers()}

            {/* Next Button */}
            <PaginationItem>
              <ArrowRight
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                onClick={handleNextPage}
              />
            </PaginationItem>

            <Select value={rowsPerPage.toString()} onValueChange={(value) => setRowsPerPage(Number(value))}>
              <SelectTrigger className="h-[30px] ml-2 bg-white dark:text-white dark:bg-background-dark text-black focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md">
                  <SelectValue placeholder={rowsPerPage.toString()} />
              </SelectTrigger>
              <SelectContent>
                  <SelectGroup className="bg-white dark:bg-background-dark dark:text-white">
                  {numberOptions.map((number) => (
                      <SelectItem key={number} value={number.toString()} className="cursor-pointer">
                      {number}
                      </SelectItem>
                  ))}
                  </SelectGroup>
              </SelectContent>
          </Select>
          </PaginationContent>
        </Pagination>
      </div>
    );
  }
  
export default EventList