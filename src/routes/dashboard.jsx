import { createFileRoute } from "@tanstack/react-router";

import { useUser } from "@/hooks/user";
import { protectRoute } from "@/features/auth/utils/protectRoute";
import CareerGoalCard from "@/features/dashboard/components/CareerGoalCard";
import RecentDocumentsCard from "@/features/dashboard/components/RecentDocumentsCard";

/**
 * Dashboard route component
 *
 * @component
 * @returns {React.JSX.Element} Dashboard route component
 */
const Dashboard = () => {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <small>Loading...</small>;
  }

  return (
    <div className="max-w-screen-xl mt-12 mx-auto flex flex-col md:px-8 px-6 w-full">
      <div className="flex flex-col">
        <h2 className="font-bold font-pulp">Hi, {user.data.name} 👋</h2>
        <p className="font-normal text-sm text-grey">
          Manage your documents issued by SMU Academy or track your career goal.
        </p>
      </div>
      <div className="flex mt-14 md:flex-row flex-col gap-8">
        {!user.data.current_organisation.is_personal && <CareerGoalCard />}
        <RecentDocumentsCard />
      </div>
    </div>
  );
};

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  beforeLoad: protectRoute,
});
