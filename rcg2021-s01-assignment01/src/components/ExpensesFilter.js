import React from "react";

const ExpensesFilter = (props) => {
  const yearChangedHandler = (event) => {
    props.onYearChange(event.target.value);
  };

  return (
    <div className="form-group row">
      <label
        htmlFor=""
        className="text-right col-6 col-sm-3 offset-sm-6 col-form-label"
      >
        Year
      </label>
      <div className="col-6 col-sm-3">
        <select
          className="form-control"
          onChange={yearChangedHandler}
          value={props.selectedYear}
        >
          {props.years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
