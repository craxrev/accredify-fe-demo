import PropTypes from "prop-types";
import IconDocument from "@/assets/icons/document.svg?react";
import IconKebab from "@/assets/icons/kebab.svg?react";

/**
 * DocumentRow component
 *
 * @component
 * @param {Object} props - The component accepts document as props
 * @param {Object} props.document - Document object
 * @param {string} props.document.document_name - Document name
 * @param {string} props.document.received_on - Document received on date
 * @returns {React.JSX.Element} DocumentRow component
 */
const DocumentRow = ({ document }) => {
  return (
    <div className="flex justify-between w-full py-3 px-4 border-b-[0.5px] border-grey/50">
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
  );
};

// Define PropTypes for DocumentRow
DocumentRow.propTypes = {
  document: PropTypes.shape({
    document_name: PropTypes.string.isRequired,
    received_on: PropTypes.string.isRequired,
  }).isRequired,
};

export default DocumentRow;
