import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      date: new Date(date),
      title: title,
      amount: Number(amount),
    };
    console.log(expenseData);
    setTitle("");
    setAmount("");
    props.onSaveExpenseData && props.onSaveExpenseData(expenseData);
  };

  const cancelHandler = (event) => {
    props.onCancel && props.onCancel();
  };

  return (
    <div className="card bg-anth20 p-3 my-4">
      <form onSubmit={submitHandler}>
        <div className="form-row">
          <div className="form-group col-12 col-sm-5 col-md-3">
            <label htmlFor="">Date</label>
            <input
              type="date"
              onChange={dateChangeHandler}
              value={date}
              className="form-control"
            />
          </div>
          <div className="form-group col-12 col-sm-7">
            <label htmlFor="">Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={title}
              className="form-control"
            />
          </div>
          <div className="form-group col-12 col-sm-5 col-md-2">
            <label htmlFor="">Amount</label>
            <input
              type="number"
              step="0.01"
              onChange={amountChangeHandler}
              value={amount}
              className="form-control text-right"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="btn-toolbar col justify-content-end">
            <button type="submit" className="btn btn-primary my-1 ml-2">
              Add expense
            </button>
            <button
              type="button"
              onClick={cancelHandler}
              className="btn btn-outline-primary my-1 ml-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
