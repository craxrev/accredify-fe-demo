import { Link } from "@tanstack/react-router";

import ProgressBar from "@/components/ProgressBar";

const CareerGoalCard = () => {
  return (
    <div className="flex flex-col items-start md:w-auto w-full">
      <h4 className="font-bold font-pulp mb-2">Career Goal</h4>
      <div className="border-[0.5px] border-grey/50 rounded-lg px-10 py-8 w-full flex flex-col items-center">
        <h6 className="text-grey font-bold mb-6 w-full text-center">
          Your Progress
        </h6>
        <ProgressBar percentage={37} colour={"#493DF5"} />
        <p className="text-sm mt-6 w-full text-center">I want to become a</p>
        <h4 className="text-center font-bold font-pulp">Tax Manager</h4>
        <Link to="/insights">
          <h6 className="mt-6 font-bold text-accent mb-[2.5px] text-center w-full">
            View Insights
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default CareerGoalCard;
