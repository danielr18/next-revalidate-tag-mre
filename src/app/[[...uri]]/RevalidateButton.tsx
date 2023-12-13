"use client";

import * as React from "react";

export function RevalidateButton() {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        fetch("/api/revalidate")
          .then((res) => res.text())
          .then((text) => {
            alert(text);
          });
      }}
    >
      Revalidate
    </button>
  );
}
