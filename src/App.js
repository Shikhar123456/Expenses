import ExpenseItem from "./Components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      price: "250",
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "kitab",
      price: "150",
      date: new Date(2021, 3, 20),
    },
    {
      id: "e3",
      title: "kachua",
      price: "2500",
      date: new Date(2021, 1, 8),
    },
    {
      id: "e4",
      title: "scooter",
      price: "5000",
      date: new Date(2021, 9, 19),
    },
  ];
  return (
    <div>
      <h2>ReactJS Project</h2>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date.toISOString()}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        price={expenses[3].price}
        date={expenses[3].date.toISOString()}
      ></ExpenseItem>
    </div>
  );
}

export default App;
