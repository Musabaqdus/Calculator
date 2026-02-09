type Props = {
  category: string;
  date: string;
  onCategoryChange: (value: string) => void;
  onDateChange: (value: string) => void;
};

export default function FilterBar({
  category,
  date,
  onCategoryChange,
  onDateChange,
}: Props) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4 flex gap-4">
      <select
        className="border p-2 rounded w-full"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
      </select>

      <input
        type="date"
        className="border p-2 rounded w-full"
        value={date}
        onChange={(e) => onDateChange(e.target.value)}
      />
    </div>
  );
}
