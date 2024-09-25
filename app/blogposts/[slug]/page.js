export default function Page({ params }) {
    const blog = {
        title: "How to Use React with Next.js",
        author: "John Doe",
        description: "A guide on building web apps with React and Next.js.",
        date: "September 25, 2024",
        content: "<p>This is the HTML content of the blog post. Learn how to use React effectively with Next.js.</p>"
    };
  
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">{blog.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
                By <span className="font-semibold italic">{blog.author}</span> on {blog.date}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{blog.description}</p>
            <div className="prose dark:prose-dark mt-6" dangerouslySetInnerHTML={{ __html: blog.content }}></div>
        </div>
    );
  }
  