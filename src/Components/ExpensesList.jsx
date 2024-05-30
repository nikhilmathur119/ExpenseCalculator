import React from 'react';

const ExpensesList = ({ items }) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  let totalExpenses = 0;

  items.forEach((item) => {
    const expenseDate = new Date(item.date);
    if (expenseDate.getMonth() === currentMonth) {
      totalExpenses += parseFloat(item.number);
    }
  });
  
  return (
    <>
      <div style={{ position: 'fixed', bottom: 20, right: 20, backgroundColor: 'white', padding: 10 }}>
        Total Expenses for {currentMonth + 1}/12: ${totalExpenses.toFixed(2)}
      </div>
    </>
  );
};

export default ExpensesList;
