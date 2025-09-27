import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({
  seletedTicket,
  completeTask,
  resolvedCount,
  setResolvedCount,
  progressCount,
  setProgressCount,
}) => {
  const handleComplete = (tic) => {
    completeTask(tic);
    setResolvedCount(resolvedCount + 1);
    toast.success("Completed!");
    setProgressCount(progressCount - 1);
  };

  return (
    <div className="w-full md:w-[350px] bg-gray-400 p-2 rounded-xl">
      <h2 className="text-2xl w-full font-semibold">Task Status</h2>
      <div>
        {seletedTicket.length > 0 ? (
          seletedTicket.map((ticket) => (
            <div key={ticket.id} className="p-4 bg-gray-600 rounded-xl my-2">
              <h2 className="text-xl mb-2">{ticket.title}</h2>
              <button
                onClick={() => handleComplete(ticket)}
                className="text-center bg-[#02A53B] w-full p-1 rounded-lg btn"
              >
                Complete
              </button>
            </div>
          ))
        ) : (
          <p className="text-start mt-4">
            Select a Ticket to add to Task Status
          </p>
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
