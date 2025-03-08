"use client";
import CountUp from "react-countup";

const Counter = ({ count }: { count: number }) => {
  return (
    <div className="text-[80px] font-bold">
      <CountUp end={count} duration={2} />
    </div>
  );
};

export default Counter;
