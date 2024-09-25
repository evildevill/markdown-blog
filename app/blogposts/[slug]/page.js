import fs from "fs";
import matter from "gray-matter";

export default function Page({ params }) {
    const filepath = `content/${params.slug}.md`;

    let fileContent;
    try {
        fileContent = fs.readFileSync(filepath, "utf-8");
    } catch (error) {
        console.error(`Error reading file: ${error.message}`);
        return <div>Error loading blog post.</div>;
    }

    const { content, data } = matter(fileContent);

    const formattedDate = data.date instanceof Date ? data.date.toLocaleDateString() : data.date;

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{data.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
                By <span className="font-semibold italic">{data.author}</span> on {formattedDate}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm">{data.description}</p>
            <div className="prose dark:prose-dark mt-6" dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
}