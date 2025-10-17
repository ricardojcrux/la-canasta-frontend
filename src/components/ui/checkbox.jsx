import * as React from "react";

export function Checkbox({ checked, onChange, id, label, disabled }) {
  return (
    <label
      htmlFor={id}
      className={`flex items-center gap-2 cursor-pointer select-none ${
        disabled ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="w-4 h-4 accent-green-600 rounded border-gray-300 focus:ring-green-500"
      />
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
}
