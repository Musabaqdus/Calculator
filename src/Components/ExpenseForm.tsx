import { useEffect, useState } from "react";
import type { Expense } from "../types/expense";

interface Props {
  onAdd: (expense: Expense) => void;
  onUpdate: (expense: Expense) => void;
  editingExpense: Expense | null;
  onCancel?: () => void; // Added a cancel option for better UX
}

export default function ExpenseForm({
  onAdd,
  onUpdate,
  editingExpense,
  onCancel,
}: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setTitle(editingExpense.title);
      setAmount(editingExpense.amount.toString());
      setCategory(editingExpense.category);
    } else {
      resetForm();
    }
  }, [editingExpense]);

  const resetForm = () => {
    setTitle("");
    setAmount("");
    setCategory("");
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !amount) return;

    const expense: Expense = {
      id: editingExpense ? editingExpense.id : crypto.randomUUID(),
      title,
      amount: Number(amount),
      category,
      date: editingExpense ? editingExpense.date : new Date().toISOString(),
    };

    editingExpense ? onUpdate(expense) : onAdd(expense);
    resetForm();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto mb-8"
    >
      <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
        {editingExpense ? "Edit Transaction" : "New Transaction"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
            placeholder="e.g. Starbucks"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="0.00"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Bills">Bills</option>
          </select>
        </div>
      </div>

      <div className="mt-5 flex gap-2 justify-end">
        {editingExpense && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Cancel
          </button>
        )}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md transition-all active:scale-95">
          {editingExpense ? "Save Changes" : "Add Expense"}
        </button>
      </div>
    </form>
  );
}
