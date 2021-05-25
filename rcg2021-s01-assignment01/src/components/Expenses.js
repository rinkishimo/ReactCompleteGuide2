import React, { useState } from "react";
import ExpencesFilter from "../components/ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  const years =
    !props.expenses || props.expenses.length === 0
      ? [String(new Date().getFullYear())]
      : props.expenses
          .map((e) => {
            return String(e.date.getFullYear());
          })
          .sort()
          .filter(function (item, pos, ary) {
            return !pos || item !== ary[pos - 1];
          });

  const [selectedYear, setSelectedYear] = useState(years[years.length - 1]);

  const changeSelectedYearHandler = (year) => {
    setSelectedYear(year);
    console.log("Year changed: ", year);
    console.log(`Year changed to ${year}.`);
  };

  return (
    <>
      <ExpencesFilter
        years={years}
        selectedYear={selectedYear}
        onYearChange={changeSelectedYearHandler}
      />
      {props.expenses && (
        <div className="row">
          {props.expenses
            .filter((exp) => selectedYear === String(exp.date.getFullYear()))
            .sort((a, b) => {
              return a.date.getTime() - b.date.getTime();
            })
            .map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Expenses;
