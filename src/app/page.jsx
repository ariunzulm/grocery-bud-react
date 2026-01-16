"use client";

import { useState } from "react";
import Home from "./components/home";

export default function App() {
  return (
    <div className="flex items-center justify-center pt-30">
      <Home />
    </div>
  );
}
// const Hooks = () => {
//   const [number, setNumber] = useState(4);
//   const [state, setState] = useState({ count: 5, theme: "blue" });
//   const count = state.count;
//   const theme = state.theme;
//   const decrementCount = () => {
//     setState((prevState) => {
//       return { ...prevState, count: prevState.count + 1 };
//     });
//     setNumber((prevNumber) => prevNumber - 1);
//   };
//   return;
// };
