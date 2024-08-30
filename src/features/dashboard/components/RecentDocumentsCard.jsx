import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

import { getRecentDocuments } from "@/features/dashboard/api/documents";
import Card from "@/components/Card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import IconDocument from "@/assets/icons/document.svg?react";
import IconKebab from "@/assets/icons/kebab.svg?react";

/**
 * @typedef {import('../api/documents').Documents} Documents
 */

/**
 * RecentDocumentsCard component
 *
 * @component
 * @returns {React.JSX.Element} RecentDocumentsCard component
 */
const RecentDocumentsCard = () => {
  /**
   * @type ReturnType<typeof useQuery<Documents>>
   */
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
        <Table className="border-b-[0.5px] border-grey/50">
          <TableHeader>
            <TableRow>
              <TableHead>Document Name</TableHead>
              <TableHead className="text-right">Received on</TableHead>
              <TableHead className="w-px"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.data.map((document) => (
              <TableRow key={document.id}>
                <TableCell>
                  <div className="flex items-center">
                    <IconDocument className="min-w-4 min-h-5 text-accent" />
                    <p className="inline-block ml-4 font-bold text-black-light">
                      {document.document_name}
                    </p>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  {new Date(document.received_on).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
                <TableCell>
                  <button className="min-w-10 min-h-10 flex items-center justify-center">
                    <IconKebab className=" h-[18px] text-black-light" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default RecentDocumentsCard;
