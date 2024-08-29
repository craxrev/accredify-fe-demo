import React from "react";
import CountUp from "react-countup";
import PropTypes from "prop-types";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

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
      <CountUp suffix="%" end={pct} delay={0.25} duration={1}>
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
