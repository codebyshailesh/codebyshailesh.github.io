import { useState } from "react";

const themes = [
  { name: "Emerald", color: "bg-emerald-400", shadow: "shadow-emerald-500/50" },
  { name: "Ruby", color: "bg-rose-500", shadow: "shadow-rose-500/50" },
  { name: "Amber", color: "bg-amber-400", shadow: "shadow-amber-500/50" },
  { name: "Azure", color: "bg-sky-400", shadow: "shadow-sky-500/50" },
];

export default function ThemeColorSelector() {
  return (
    <div>
      <select
        name="status"
        id="status"
        class="border border-slate-400 rounded-2xl bg-slate-300 px-3 py-1 text-sm font-medium text-slate-700 outline-none focus:ring-2 focus:ring-slate-400 transition-all cursor-pointer"
      >
        <option value="active" selected>
          Active
        </option>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  );
}
