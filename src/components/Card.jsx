import PropTypes from "prop-types";

import { cn } from "@/lib/utils";

/**
 * Card component
 *
 * @component
 * @param {Object} props - The component accepts className and children as props
 * @param {string} props.className - Additional/Override class names
 * @param {React.ReactNode} props.children - Card content
 * @returns {React.JSX.Element} Card component
 */
const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "border-[0.5px] border-grey/50 rounded-lg px-10 py-8 w-full flex flex-col",
        className,
      )}
    >
      {children}
    </div>
  );
};


Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Card;
