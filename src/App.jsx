import { CareerGoalCard } from "./components/CareerGoalCard";
import { Navbar } from "./components/Navbar";
import { RecentDocuments } from "./components/RecentDocuments";
import { User } from "./components/User";

function App() {
  return (
    <div className="flex min-h-screen bg-black-light">
      <Navbar />
      <div className="w-full min-h-full rounded-tl-2xl rounded-bl-2xl bg-white pb-10">
        <User />
        <div className=" w-10/12 max-w-screen-xl mt-12 mx-auto  ">
          <div className="flex flex-col w-full ">
            <div className="flex flex-col ">
              <h2 className="font-bold font-pulp"> Hi, Gerald Goh 👋</h2>
              <p className="font-normal  text-sm text-grey">
                Manage your documents issued by SMU Academy or track your career
                goal.
              </p>
            </div>
            <div className="flex mt-14">
              <CareerGoalCard />
              <RecentDocuments />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
