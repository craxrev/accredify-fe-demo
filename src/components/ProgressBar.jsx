import React from "react";
import CountUp from "react-countup";

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

export const ProgressBar = ({ percentage, colour }) => {
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
          <Circle colour="lightgrey" />
          <Circle colour={colour} pct={pct} />
        </g>
      </svg>
      <CountUp suffix="%" end={pct} delay={0.5} duration={0.75}>
        {({ countUpRef }) => (
          <div>
            <span
              ref={countUpRef}
              className="absolute font-bold text-accent text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        )}
      </CountUp>
    </div>
  );
};

const Circle = ({ colour, pct }) => {
  const r = 90;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  console.log(strokePct);
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"1rem"}
      strokeDasharray={circ}
      strokeDashoffset={strokePct || 0}
      strokeLinecap="round"
    ></circle>
  );
};
