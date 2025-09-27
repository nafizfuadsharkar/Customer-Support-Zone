import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import CustomerTickets from "./Components/CustomerTickets/CustomerTickets";
import Navbar from "./Components/Navbar/Navbar";
import ResolvedTask from "./Components/ResolvedTask/ResolvedTask";
import TaskStatus from "./Components/TaskStatus/TaskStatus";
import { ToastContainer } from "react-toastify";

const fetchTickets = async () => {
  const res = await fetch("/tickets.json");
  return res.json();
};
const ticketPromise = fetchTickets();

function App() {
  const [statusColor, setStatusColor] = useState("Open");
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [seletedTicket, setSelectedTicket] = useState([]);
  const [resolvedData, setResolvedData] = useState([]);
  const [hiddenTickets, setHiddenTickets] = useState([]);

  const completeTask = (t) => {
    console.log(seletedTicket);
    const filterData = seletedTicket.filter((tic) => tic.id !== t.id);
    console.log(filterData);
    setSelectedTicket(filterData);
    const filterData2 = seletedTicket.filter((tic) => tic.id === t.id);
    setResolvedData([...resolvedData, ...filterData2]);
    setHiddenTickets([...hiddenTickets, t.id]);
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <Banner progressCount={progressCount} resolvedCount={resolvedCount}></Banner>

      <div className="flex max-w-[1200px] mx-auto gap-5">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <CustomerTickets
            ticketPromise={ticketPromise}
            statusColor={statusColor}
            setStatusColor={setStatusColor}
            progressCount={progressCount}
            setProgressCount={setProgressCount}
            seletedTicket={seletedTicket}
            setSelectedTicket={setSelectedTicket}
            hiddenTickets={hiddenTickets}
          ></CustomerTickets>
        </Suspense>
        <div>
          <TaskStatus
            seletedTicket={seletedTicket}
            completeTask={completeTask}
            resolvedCount={resolvedCount}
            setResolvedCount={setResolvedCount}
            progressCount={progressCount}
            setProgressCount ={setProgressCount}
          ></TaskStatus>
          <ResolvedTask resolvedData={resolvedData}>Resolved</ResolvedTask>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
