import React from "react";

const ResolvedTask = ({ resolvedData }) => {
  return (
    <div className="w-full md:w-[350px] bg-gray-400 p-2 rounded-xl mt-4">
      <h2 className="text-2xl w-full font-semibold ">Resolved Task</h2>
      <div>
        {resolvedData.map((ticket) => (
          <div key={ticket.id} className="p-4 bg-gray-600 rounded-xl my-2">
            <h2 className="text-xl mb-2">{ticket.title}</h2>
            <p className="text-green-500">Completed</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResolvedTask;
