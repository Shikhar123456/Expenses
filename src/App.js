import ExpenseItem from "./Components/ExpenseItem";
import Expenses from "./Components/Expenses";
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
      <Expenses expenses={expenses}></Expenses>;
    </div>
  );
}

export default App;
