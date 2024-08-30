import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { getRecentDocuments } from "@/features/dashboard/api/documents";
import Card from "@/components/Card";
import DocumentRow from "@/components/DocumentRow";

/**
 * RecentDocumentsCard component
 *
 * @component
 * @returns {React.JSX.Element} RecentDocumentsCard component
 */
const RecentDocumentsCard = () => {
  const { data: documents = { data: [] }, isLoading } = useQuery({
    queryKey: ["documents"],
    queryFn: getRecentDocuments,
  });

  if (isLoading) {
    return <small>Loading...</small>;
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center mb-2  justify-between">
        <h4 className="font-bold font-pulp ">Recent Documents</h4>
        <Link to="/documents">
          <h6 className=" font-bold text-accent  text-center">
            View All Documents
          </h6>
        </Link>
      </div>
      <Card className="max-h-[440px] overflow-y-auto">
        <div className="flex justify-between mx-4 pb-5 border-b-[0.5px] border-grey/50">
          <p className="font-bold text-sm text-grey ">Document Name</p>
          <p className="font-bold text-sm text-grey mr-10 px-4">Received on</p>
        </div>
        {documents.data.map((document, idx) => (
          <DocumentRow key={idx + "document"} document={document} />
        ))}
      </Card>
    </div>
  );
};

export default RecentDocumentsCard;
