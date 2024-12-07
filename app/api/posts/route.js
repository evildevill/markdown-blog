// app/api/posts/route.js
import fs from 'fs';
import matter from 'gray-matter';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '6', 10);

  const dirContent = fs.readdirSync("public/content", "utf-8");
  const allPosts = dirContent.map(file => {
    const fileContent = fs.readFileSync(`public/content/${file}`, "utf-8");
    const { data } = matter(fileContent);
    return data;
  }).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date (newest first)

  const start = (page - 1) * limit;
  const end = page * limit;
  const posts = allPosts.slice(start, end);

  return new Response(JSON.stringify({ posts, hasMore: end < allPosts.length }), {
    headers: { 'Content-Type': 'application/json' },
  });
}