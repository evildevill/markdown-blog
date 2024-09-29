// OnThisPage.jsx
"use client";
import React from 'react';
import { load } from 'cheerio';  // Import the load function from cheerio

const OnThisPage = ({ htmlContent }) => {
  // Use cheerio to parse the HTML content
  const $ = load(htmlContent);
  const headings = $('h1, h2, h3').toArray();

  // Create an array of heading data (id, text, and level)
  const headingList = headings.map((heading) => {
    const level = heading.tagName.toLowerCase();
    const id = $(heading).attr('id') || $(heading).text().replace(/\s+/g, '-').toLowerCase();
    const text = $(heading).text();

    return { id, text, level };
  });

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
      <ul>
        {headingList.map(({ id, text, level }) => (
          <li key={id} className={`pl-${level === 'h2' ? 2 : level === 'h3' ? 4 : 0} py-1`}>
            <a href={`#${id}`} className="text-gray-600 dark:text-white hover:underline">
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;
