"use client";

import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) {
      toast.error("Please Provide Value", { position: "top-center" });
      return;
    } else {
      toast.success("Item Added To The List", { position: "top-center" });
    }
    setList([...list, { id: Date.now(), name: item, completed: false }]);
    setItem("");
  };

  const toggleItem = (id) => {
    setList(
      list.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  };

  const deleteItem = (id) => {
    toast.info("Item Deleted", { position: "top-center" });
    setList(list.filter((i) => i.id !== id));
  };

  return (
    <div className="w-120 items-center justify-center p-8 flex flex-col gap-8 bg-white rounded-sm shadow-lg">
      <h4 className="text-[25px] font-medium">Grocery Bud</h4>
      <form className="flex w-full h-7.25" onSubmit={handleSubmit}>
        <input
          className="bg-[#f8fafc] w-full px-4 rounded-sm  border focus:outline-none focus: border-cyan-800"
          type="text"
          onChange={(e) => setItem(e.target.value)}
          placeholder={"e.g. eggs"}
          value={item}
        />
        <button
          type="submit"
          className="hover:bg-cyan-800 w-25 flex items-center bg-[#06b6d4] font-medium text-[14px] py-1.5 px-3 rounded-sm text-white cursor-pointer border-transparent"
        >
          Add Item
        </button>
      </form>

      <ul className="w-full flex flex-col gap-3 ">
        {list.map((i) => (
          <li key={i.id} className="capitalize flex gap-4 items-center">
            <input
              type="checkbox"
              className="accent-cyan-600"
              checked={i.completed}
              onChange={() => toggleItem(i.id)}
            />
            <div className="flex justify-between items-center w-full">
              <span className={i.completed ? "line-through text-gray-400" : ""}>
                {i.name}
              </span>{" "}
              <button
                onClick={() => deleteItem(i.id)}
                className="bg-black font-medium text-white focus: border-cyan-800 rounded-sm text-[12px] px-1 py-[2.4px] cursor-pointer"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
