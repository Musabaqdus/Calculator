import type { Expense } from "../types/expense";
import ExpenseItem from "./ExpenseItem";

type Props = {
  expenses: Expense[];
  onDelete(id: string): void;
  onEdit(id: string): void;
};

export default function ExpenseList({ expenses, onDelete, onEdit }: Props) {
  // Enhanced Empty State with an Icon-like feel
  if (expenses.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl border-2 border-dashed border-gray-200">
        <p className="text-gray-400 font-medium">No expenses recorded yet.</p>
        <p className="text-gray-300 text-sm">
          Add your first expense above to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
        <div className="col-span-1">Date</div>
        <div className="col-span-5">Details</div>
        <div className="col-span-2">Category</div>
        <div className="col-span-2 text-right">Amount</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      <div className="divide-y divide-gray-100">
        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="hover:bg-gray-50/50 transition-colors group"
          >
            <ExpenseItem
              expense={expense}
              onDelete={() => onDelete(expense.id)}
              onEdit={() => onEdit(expense.id)}
            />
          </div>
        ))}
      </div>

      <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
        <p className="text-xs text-gray-400">
          Showing {expenses.length}{" "}
          {expenses.length === 1 ? "transaction" : "transactions"}
        </p>
      </div>
    </div>
  );
}
