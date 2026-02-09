import { useEffect, useState } from "react";
import type { Expense } from "../types/expense";
import ExpenseForm from "../Components/ExpenseForm";
import ExpenseList from "../Components/ExpenseList";
import FilterBar from "../Components/FilterBar";

export function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingExpense, setEditingExpense] = useState<Expense | null>(null);

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const filteredExpenses = expenses.filter((expense) => {
    const matchCategory =
      selectedCategory === "" || expense.category === selectedCategory;
    const matchDate =
      selectedDate === "" || expense.date.slice(0, 10) === selectedDate;
    return matchCategory && matchDate;
  });

  const totalAmount = filteredExpenses.reduce(
    (sum, exp) => sum + exp.amount,
    0,
  );

  const addExpense = (expense: Expense) =>
    setExpenses((prev) => [expense, ...prev]);

  const removeExpense = (id: string) =>
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));

  const updateExpense = (updated: Expense) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === updated.id ? updated : exp)),
    );
    setEditingExpense(null);
  };

  const startEditExpense = (id: string) => {
    const expense = expenses.find((exp) => exp.id === id);
    if (expense) setEditingExpense(expense);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-blue-600">
            WalletWatch
          </h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-xs text-slate-500 font-medium uppercase">
                Current Balance
              </p>
              <p className="text-xl font-bold">
                $
                {totalAmount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-6">
          <section className="sticky top-24">
            <h2 className="text-sm font-semibold text-slate-400 uppercase mb-3">
              Manage Transaction
            </h2>
            <ExpenseForm
              onAdd={addExpense}
              onUpdate={updateExpense}
              editingExpense={editingExpense}
              onCancel={() => setEditingExpense(null)}
            />

            <div className="bg-blue-600 rounded-2xl p-6 text-white shadow-lg shadow-blue-200">
              <p className="text-blue-100 text-sm font-medium">
                Filtered Total
              </p>
              <h3 className="text-3xl font-bold mt-1">
                ${totalAmount.toFixed(2)}
              </h3>
              <p className="text-blue-200 text-xs mt-4">
                Showing {filteredExpenses.length} transactions
              </p>
            </div>
          </section>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-lg font-bold text-slate-800">History</h2>
            <FilterBar
              category={selectedCategory}
              date={selectedDate}
              onCategoryChange={setSelectedCategory}
              onDateChange={setSelectedDate}
            />
          </div>

          <ExpenseList
            expenses={filteredExpenses}
            onDelete={removeExpense}
            onEdit={startEditExpense}
          />
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
