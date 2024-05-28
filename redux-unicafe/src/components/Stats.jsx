import { useSelector } from "react-redux";

const Stats = () => {
  const stats = useSelector((state) => state);

  return (
    <>
      <div>good {stats.good}</div>
      <div>ok {stats.ok}</div>
      <div>bad {stats.bad}</div>
    </>
  );
};

export default Stats;
