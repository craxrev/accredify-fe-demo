import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { getRecentDocuments } from "@/features/dashboard/api/documents";
import Card from "@/components/Card";
import IconDocument from "@/assets/icons/document.svg?react";
import IconKebab from "@/assets/icons/kebab.svg?react";

const RecentDocumentsCard = () => {
  const { data: documents = { data: [] }, isLoading } = useQuery({
    queryKey: ["documents"],
    queryFn: getRecentDocuments,
  });

  console.log(documents);

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
      <Card>
        <div className="flex justify-between mx-4 pb-5 border-b-[0.5px] border-grey/50">
          <p className="font-bold text-sm text-grey ">Document Name</p>
          <p className="font-bold text-sm text-grey mr-10 px-4">Received on</p>
        </div>
        {documents.data.map((document, idx) => (
          <div
            key={idx}
            className="flex justify-between w-full py-3 px-4 border-b-[0.5px] border-grey/50"
          >
            <div className="flex items-center w-8/12">
              <div>
                <IconDocument className="min-w-4 min-h-5  text-accent" />
              </div>
              <p className="ml-4 font-bold text-sm  text-black-light">
                {document.document_name}
              </p>
            </div>
            <div className="flex items-center ml-auto">
              <p className="text-sm px-4 ">
                {new Date(document.received_on).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <button className="min-w-10 min-h-10 flex items-center justify-center">
                <IconKebab className=" h-[18px] text-black-light" />
              </button>
            </div>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default RecentDocumentsCard;
