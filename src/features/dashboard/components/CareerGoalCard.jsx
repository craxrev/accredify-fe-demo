import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { getGoals } from "@/features/dashboard/api/goals";
import ProgressBar from "@/components/ProgressBar";
import Card from "@/components/Card";

const CareerGoalCard = () => {
  const { data: goals = { data: [] }, isLoading } = useQuery({
    queryKey: ["goals"],
    queryFn: getGoals,
  });

  const goal = goals.data[0] ?? undefined;

  if (isLoading || !goal) {
    return <small>Loading...</small>;
  }

  return (
    <div className="flex flex-col items-start md:w-auto w-full">
      <h4 className="font-bold font-pulp mb-2">Career Goal</h4>
      <Card className="items-center">
        <h6 className="text-grey font-bold mb-6 w-full text-center">
          Your Progress
        </h6>
        <ProgressBar percentage={goal.progress} colour={"#493DF5"} />
        <p className="text-sm mt-6 w-full text-center">I want to become a</p>
        <h4
          className="text-center font-bold font-pulp"
          title={goal.description}
        >
          {goal.name}
        </h4>
        <Link to="/insights">
          <h6 className="mt-6 font-bold text-accent mb-[2.5px] text-center w-full">
            View Insights
          </h6>
        </Link>
      </Card>
    </div>
  );
};

export default CareerGoalCard;
