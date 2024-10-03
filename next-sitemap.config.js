const fs = require('fs');
const path = require('path');

const getPostSlugs = () => {
    const postsDirectory = path.join(process.cwd(), 'public/content'); // Adjust if necessary

    // Check if the directory exists
    if (!fs.existsSync(postsDirectory)) {
        console.error(`Directory does not exist: ${postsDirectory}`);
        return [];
    }

    const filenames = fs.readdirSync(postsDirectory);
    return filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const stats = fs.statSync(filePath); // Get file stats

        return {
            loc: `/blog/${filename.replace('.md', '')}`, // Adjust for your slug structure
            lastmod: stats.mtime.toISOString(), // Use the file's last modified time
        };
    });
};

module.exports = {
    siteUrl: 'https://blog.hackerwasii.com',
    generateRobotsTxt: true,
    exclude: ['/api/*'],
    additionalPaths: async (config) => {
        const blogPosts = getPostSlugs(); // Include your blog posts here

        return [
            { loc: '/', lastmod: new Date().toISOString() }, // Add homepage
            ...blogPosts,
        ];
    },
};
