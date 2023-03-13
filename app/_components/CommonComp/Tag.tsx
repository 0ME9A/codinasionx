import React from "react";

export default function Tag({ tag, style }: { tag: string, style?:string }) {
  return (
    <li title={tag} className={`p-2 text-md py-0 text-gray-700 dark:text-gray-300 bg-light/50 dark:bg-dark/50 rounded-full ${style}`}>
      {tag}
    </li>
  );
}
