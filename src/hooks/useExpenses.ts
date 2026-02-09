import { useState } from "react";
import type { Expense } from "../types/expense";

export function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense]);
  };
  const removeExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };
  return { expenses, addExpense, removeExpense };
}
