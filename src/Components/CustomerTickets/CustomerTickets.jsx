import React, { use, useState } from "react";
import calenderImg from "../../assets/calender.png";
import { toast } from "react-toastify";

const CustomerTickets = ({
  ticketPromise,
  statusColor,
  setstatusColor,
  progressCount,
  setProgressCount,
  seletedTicket,
  setSelectedTicket,
  hiddenTickets,
}) => {
  const [isSelected, setIsSelected] = useState(false);
  const ticketData = use(ticketPromise);

  const handleSelected = (ticketData) => {
    setProgressCount(progressCount + 1);
    toast.success("In Progreass");
    setSelectedTicket([...seletedTicket, ticketData]);
    ticketData.status = "In-Progress";
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold">Customer Tickets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {ticketData
          .filter((ticket) => !hiddenTickets.includes(ticket.id))
          .map((ticket) => (
            <div
              onClick={() => {
                handleSelected(ticket);
              }}
              className="card card-dash bg-base-100 w-96"
            >
              <div className="card-body">
                <div className="flex justify-between">
                  <div>
                    <h2 className="card-title">{ticket.title}</h2>
                  </div>
                  <div>
                    <p
                      className={`px-2 rounded 
    ${
      ticket.status === "Open"
        ? "bg-[#B9F8CF] text-[#0B5E06]"
        : "bg-[#F8F3B9] text-[#9C7700]"
    }
  `}
                    >
                      {ticket.status}
                    </p>
                  </div>
                </div>
                <p>{ticket.description}</p>
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <p>{ticket.id}</p>
                    <p
                      className={
                        ticket.priority === "HIGH"
                          ? "text-red-600 font-bold"
                          : ticket.priority === "MEDIUM"
                          ? "text-yellow-500 font-semibold"
                          : "text-blue-600 font-semibold"
                      }
                    >
                      {ticket.priority}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p>{ticket.customer}</p>
                    <img className="" src={calenderImg} alt="" />
                    <p>{ticket.createdAt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
