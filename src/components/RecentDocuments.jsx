import IconDocument from "../assets/icons/document.svg?react";
import IconKebab from "../assets/icons/kebab.svg?react";

const documents = [
  {
    name: "Degree in Information Systems",
    receivedOn: "29 Jun 2021",
  },
  {
    name: "Degree in Information Systems",
    receivedOn: "29 Jun 2021",
  },
  {
    name: "Fintech: Foundations and Applications of Financial Technol...",
    receivedOn: "29 Jun 2021",
  },
  {
    name: "Degree in Information Systems",
    receivedOn: "29 Jun 2021",
  },
  {
    name: "Degree in Information Systems",
    receivedOn: "29 Jun 2021",
  },
];

export const RecentDocuments = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center mb-2  justify-between">
        <h4 className="font-bold font-pulp ">Recent Documents</h4>
        <h6 className=" font-bold text-accent  text-center">
          View All Documents
        </h6>
      </div>
      <div className="border-[0.5px] border-grey/50 rounded-lg px-6 py-8 w-full ">
        <div className="flex justify-between mx-4 pb-5 border-b-[0.5px] border-grey/50">
          <p className="font-bold text-sm text-grey ">Document Name</p>
          <p className="font-bold text-sm text-grey mr-10 px-4">Received on</p>
        </div>
        {documents.map((document, i) => (
          <div
            key={i + "document"}
            className="flex justify-between w-full py-3 px-4 border-b-[0.5px] border-grey/50"
          >
            <div className="flex items-center w-8/12">
              <div>
                <IconDocument className="min-w-4 min-h-5  text-accent" />
              </div>
              <p className="ml-4 font-bold text-sm  text-black-light">
                {document.name}
              </p>
            </div>
            <div className="flex items-center ml-auto">
              <p className="text-sm px-4 ">{document.receivedOn}</p>
              <button className="min-w-10 min-h-10 flex items-center justify-center">
                <IconKebab className=" h-[18px] text-black-light" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
