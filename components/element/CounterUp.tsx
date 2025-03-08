"use client";
import CountUp from "react-countup";

const Counter = ({ count }: { count: number }) => {
  return (
    <div className="2xl:text-[80px] text-[40px] font-bold">
      <CountUp end={count} duration={2} />
    </div>
  );
};

export default Counter;
