import { ProgressBar } from "./ProgressBar";

export const CareerGoalCard = () => {
  return (
    <div className="flex flex-col items-start mr-8">
      <h4 className="font-bold mb-2">Career Goal</h4>
      <div className="border-[0.5px] border-grey/50 rounded-lg px-10 py-8 ">
        <h6 className="text-grey font-bold mb-6 w-full text-center">
          Your Progress
        </h6>
        <ProgressBar percentage={37} colour={"#493DF5"} />
        <p className="text-sm mt-6 w-full text-center">I want to become a</p>
        <h4 className="text-center font-bold">Tax Manager</h4>
        <h6 className="mt-6 font-bold text-accent mb-2 text-center w-full">
          View Insights
        </h6>
      </div>
    </div>
  );
};
