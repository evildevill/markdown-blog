// OnThisPage.jsx
"use client";
import React from "react";
import { load } from "cheerio"; // Import the load function from cheerio

const OnThisPage = ({ htmlContent }) => {
  // Use cheerio to parse the HTML content
  const $ = load(htmlContent);
  const headings = $("h1, h2, h3").toArray();

  // Create an array of heading data (id, text, and level)
  const headingList = headings.map((heading) => {
    const level = heading.tagName.toLowerCase();
    const id =
      $(heading).attr("id") ||
      $(heading).text().replace(/\s+/g, "-").toLowerCase();
    const text = $(heading).text();

    return { id, text, level };
  });

  return (
    <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow-lg bg-white dark:bg-gray-900">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        On This Page
      </h2>
      <div className="max-h-80 overflow-y-auto custom-scrollbar">
        <ul className="space-y-2">
          {headingList.map(({ id, text, level }) => (
            <li
              key={id}
              className={`pl-${level === "h2" ? 4 : level === "h3" ? 6 : 2}`}
            >
              <a
                href={`#${id}`}
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all duration-200 ease-in-out"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
