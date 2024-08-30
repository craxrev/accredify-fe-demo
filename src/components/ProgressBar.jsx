import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";

/**
 * Cleans the progress percentage
 *
 * @param {number} percentage - Progress percentage
 * @returns {number} Cleaned progress percentage
 */
function cleanPercentage (percentage) {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

/**
 * ProgressBar component
 *
 * @component
 * @param {Object} props - The component accepts percentage and colour as props
 * @param {number} props.percentage - Progress percentage
 * @param {string} props.colour - Progress colour
 * @returns {React.JSX.Element} ProgressBar component
 */
const ProgressBar = ({ percentage, colour }) => {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    setTimeout(() => {
      setPct(cleanPercentage(percentage));
    }, 500);
  }, [percentage]);
  return (
    <div className="relative">
      <svg width={200} height={200}>
        <g transform={`rotate(-90 ${"100 100"})`}>
          <Circle colour="#e8e9eb" />
          <Circle colour={colour} pct={pct} />
        </g>
      </svg>
      <CountUp suffix="%" end={pct} delay={0.25} duration={0.5}>
        {({ countUpRef }) => (
          <div>
            <span
              ref={countUpRef}
              className="absolute tracking-widest	 font-bold font-pulp text-accent text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        )}
      </CountUp>
    </div>
  );
};

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  colour: PropTypes.string.isRequired,
};

/**
 * Circle component
 *
 * @component
 * @param {Object} props - The component accepts colour and pct as props
 * @param {string} props.colour - Circle colour
 * @param {number} props.pct - Circle percentage
 * @returns {React.JSX.Element} Circle component
 */
const Circle = ({ colour, pct }) => {
  const r = 90;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      data-testid="progress-circle" // Added test ID
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""}
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={strokePct || 0}
      strokeLinecap="round"
    ></circle>
  );
};

Circle.propTypes = {
  colour: PropTypes.string.isRequired,
  pct: PropTypes.number,
};

export default ProgressBar;
