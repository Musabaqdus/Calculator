import type { Expense } from "../types/expense";

type Props = {
  expense: Expense;
  onDelete: (id: string) => void;
  onEdit: (expense: Expense) => void;
};

function ExpenseItem({ expense, onDelete, onEdit }: Props) {
  // Simple helper to get category-specific colors
  const getCategoryColor = (cat: string) => {
    const colors: Record<string, string> = {
      Food: "bg-orange-100 text-orange-700",
      Travel: "bg-blue-100 text-blue-700",
      Shopping: "bg-purple-100 text-purple-700",
      Bills: "bg-red-100 text-red-700",
    };
    return colors[cat] || "bg-gray-100 text-gray-700";
  };

  return (
    <div className="grid grid-cols-12 gap-4 px-6 py-4 items-center group transition-all">
      <div className="col-span-12 md:col-span-6 flex items-center gap-4">
        <div className="hidden sm:flex flex-col items-center justify-center min-w-[48px] h-12 bg-gray-50 rounded-lg border border-gray-100 text-center">
          <span className="text-[10px] uppercase font-bold text-gray-400">
            {new Date(expense.date).toLocaleString("default", {
              month: "short",
            })}
          </span>
          <span className="text-sm font-bold text-gray-700">
            {new Date(expense.date).getDate()}
          </span>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 leading-tight">
            {expense.title}
          </h3>
          <p className="text-xs text-gray-400 md:hidden mt-0.5">
            {new Date(expense.date).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="col-span-6 md:col-span-2">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(expense.category)}`}
        >
          {expense.category}
        </span>
      </div>

      <div className="col-span-6 md:col-span-2 text-right">
        <span className="text-sm font-bold text-gray-900">
          $
          {expense.amount.toLocaleString(undefined, {
            minimumFractionDigits: 2,
          })}
        </span>
      </div>

      <div className="col-span-12 md:col-span-2 flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onEdit(expense)}
          className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
          title="Edit"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        </button>
        <button
          onClick={() => onDelete(expense.id)}
          className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          title="Delete"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;
