import ExpenseItem from "./components/ExpenseItem";

function App() {
  // const expenses = [];

  // for (let i = 0; i < 100; i++) {
  //   expenses.push(
  //     <ExpenseItem
  //       expensename={`Expense ${i + 1}`}
  //       location={`Location ${i + 1}`}
  //     />
  //   );
  // }
  return (
    <div>
      <h2>Let's get started!</h2>
      {/* {expenses} */}
      <ExpenseItem
        key={"expense1"}
        expensename={"Toilet Paper"}
        location={`Mumbai`}
        amount={294.67}
      />
      <ExpenseItem
        key={"expense2"}
        expensename={`New Tv`}
        location={`Chennai`}
        amount={694.67}
      />
      <ExpenseItem
        key={"expense3"}
        expensename={`Car Servicing`}
        location={`Delhi`}
        amount={150}
      />
      <ExpenseItem
        key={"expense4"}
        expensename={`Health insurance`}
        location={`Hyderabad`}
        amount={50}
      />
    </div>
  );
}

export default App;
