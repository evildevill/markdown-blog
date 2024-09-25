import fs from "fs";
import path from "path";
import matter from "gray-matter";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypePrettyCode from "rehype-pretty-code";
import { unified } from "unified";
import { transformerCopyButton } from '@rehype-pretty/transformers'

// This function generates the static paths for each blog post
export async function generateStaticParams() {
  const files = fs.readdirSync("public/content");
  return files.map((fileName) => ({
    slug: fileName.replace(".md", ""),
  }));
}

// This is a React Server Component that will render your blog post
export default async function Page({ params }) {
  const { slug } = params;
  const filepath = path.join("public/content", `${slug}.md`);

  let fileContent;
  try {
    fileContent = fs.readFileSync(filepath, "utf-8");
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
    return <div>Error loading blog post.</div>;
  }

  const { content, data } = matter(fileContent);

  const formattedDate =
    data.date instanceof Date ? data.date.toLocaleDateString() : data.date;

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "👋🌍" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .use(rehypePrettyCode, {
      theme: "github-dark",
      transformers: [
        transformerCopyButton({
          visibility: "always",
          feedbackDuration: 3_000,
        }),
      ],
    });

  const htmlContent = (await processor.process(content)).toString();

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        {data.title}
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        By <span className="font-semibold italic">{data.author}</span> on{" "}
        {formattedDate}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">
        {data.description}
      </p>
      <div
        className="prose dark:prose-invert mt-6"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    </div>
  );
}
