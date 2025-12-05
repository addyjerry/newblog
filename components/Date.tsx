const today = new globalThis.Date();

const TodayDate = () => {
  return <h1 className="font-bold">{today.toDateString()}</h1>;
};

export default TodayDate;
