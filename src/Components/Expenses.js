import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  return (
    <div>
      <div className="expenses">
        <h2>AHO</h2>
        <ExpenseItem
          title={props.expenses[0].title}
          price={props.expenses[0].price}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          price={props.expenses[1].price}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          price={props.expenses[2].price}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          price={props.expenses[3].price}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </div>
    </div>
  );
}
export default Expenses;
