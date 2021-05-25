import DateBox from "./DateBox";

const ExpenseItem = (props) => {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card shadow-sm my-2 d-flex flex-row">
        <DateBox date={props.date} />
        <div className="flex-grow-1 p-2">
          <h4>{props.title}</h4>
          <div className="position-absolute position-bottom-right-2">
            <div className="badge badge-pill badge-light">
              ${Number.parseFloat(props.amount).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
