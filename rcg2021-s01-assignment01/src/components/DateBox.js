const DateBox = (props) => {
  const month = props.date.toLocaleString("en-US", {
    month: "long",
  });
  const day = props.date.toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = props.date.getFullYear();

  return (
    <div className="bg-white border border-light minw-5r m-1 d-flex flex-column text-center">
      <div className="bg-red text-white small"> {month} </div>{" "}
      <div className="h3 my-1"> {day} </div>{" "}
      <div className="small text-muted"> {year} </div>{" "}
    </div>
  );
};

export default DateBox;
