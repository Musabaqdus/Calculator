// import { useState, useEffect } from "react";

// function Calculator() {
//   // Logic remains untouched as requested
//   const [result, setResult] = useState<number | string>(0);
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [operator, setOperator] = useState("");

//   const handleButtonClick = (value: number | string) => {
//     if (typeof value !== "number") return;
//     if (operator === "") setNum1(num1 * 10 + value);
//     if (operator !== "" && operator !== "=") setNum2(num2 * 10 + value);
//   };

//   const handleTotal = () => {
//     setResult(num1 + num2);
//   };

//   useEffect(() => {
//     setResult(num1 + num2);
//     if (operator === "*") setResult(num1 * num2);
//     if (operator === "+") setResult(num1 + num2);
//     if (operator === "-") setResult(num1 - num2);
//     if (operator === "/") setResult(num1 / num2);
//     if (operator === "=") handleTotal();
//     if (operator === "clear") {
//       setResult(0);
//       setNum1(0);
//       setNum2(0);
//       setOperator("");
//     }
//   }, [operator, num1, num2]);

//   useEffect(() => {
//     if (operator && !num2 && operator !== "clear") {
//       setResult(`${num1} ${operator}`);
//     }
//   }, [num1, !num2, operator]);

//   useEffect(() => {});

//   const btnBase =
//     "flex items-center justify-center h-16 w-16 rounded-full text-xl font-semibold transition-all duration-100 active:scale-95";
//   const numBtn = `${btnBase} bg-gray-800 hover:bg-gray-700 text-white`;
//   const opBtn = `${btnBase} bg-orange-500 hover:bg-orange-400 text-white`;
//   const funcBtn = `${btnBase} bg-red-600 hover:bg-red-500 text-white text-sm uppercase`;

//   return (
//     <div className="min-h-screen min-w-screen bg-slate-900 flex items-center justify-center p-4">
//       <div className="bg-black p-6 rounded-3xl shadow-2xl border border-gray-800 w-full max-w-[320px]">
//         <div className="mb-6 p-4 bg-gray-900 rounded-2xl border border-gray-800 text-right overflow-hidden">
//           <div className="text-gray-500 text-xs h-4 mb-1 uppercase tracking-widest font-bold">
//             {/* {operator && operator !== "clear" ? `Mode: ${operator}` : "Ready"} */}
//           </div>
//           <div className="text-white text-6xl font-mono font-bold tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] z-10">
//             {result || 0}
//           </div>
//         </div>

//         <div className="grid grid-cols-4 gap-4">
//           <button className={opBtn} onClick={() => setOperator("*")}>
//             ×
//           </button>
//           <button className={opBtn} onClick={() => setOperator("+")}>
//             +
//           </button>
//           <button className={opBtn} onClick={() => setOperator("-")}>
//             −
//           </button>
//           <button className={opBtn} onClick={() => setOperator("/")}>
//             ÷
//           </button>
//           {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((num) => (
//             <button
//               key={num}
//               className={numBtn}
//               onClick={() => handleButtonClick(num)}
//             >
//               {num}
//             </button>
//           ))}

//           <button className={opBtn} onClick={() => setOperator("=")}>
//             =
//           </button>
//           <button className={funcBtn} onClick={() => setOperator("clear")}>
//             AC
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Calculator;
