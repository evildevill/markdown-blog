# 📓 Markdown Blog

A dynamic and customizable blog built with Next.js and Tailwind CSS, designed to easily manage content using markdown files.

## 🚀 Features

- 🖋️ Markdown Support: Write blog posts in markdown format with ease.
- 🌗 Dark Mode: Seamless toggle between dark and light themes.
- 📅 Auto-generated Blog Cards: Posts are automatically displayed using metadata.
- 📧 Newsletter Integration: Collect user emails through the newsletter API.
- 📊 Dashboard: Manage settings and content with a simple interface.

## 🏗️ Project Structure

```plaintext
markdown-blog/
├── app/
│   ├── about/               # About page
│   ├── api/                 # API routes (auth, contact, newsletter)
│   ├── blog/                # Blog overview page
│   ├── blogposts/           # Individual blog posts by slug
│   ├── contact/             # Contact page
│   ├── dashboard/           # Admin dashboard with settings
│   └── signup/              # User signup page
├── components/              # Reusable UI components (dark mode switcher, forms, etc.)
├── lib/                     # Utility functions
├── public/
│   ├── content/             # Markdown files for blogs
│   └── images/              # Static assets (blog images, icons)
├── styles/                  # Global styles and Tailwind configurations
└── README.md                # Project documentation
```

## 🛠️ Getting Started

### Prerequisites

- Node.js v16 or higher
- npm

### Installation

- 1. Clone the repository
```
git clone https://github.com/evildevill/markdown-blog.git 
```
- 2. Install dependencies:
```bash
cd markdown-blog
npm install
```

- 3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### 📝 Writing Blog Posts

1. Create a markdown file in the public/content/ folder.
2. Add metadata using frontmatter (YAML format):

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
author: "Author Name"
description: "Short description of the post."
image: "/path-to-image.png"
---
```

3. Your post will automatically appear in the blog section.

### 📧 Newsletter Integration

The newsletter API collects user emails via a simple form. Ensure that your `.env` file contains the necessary configuration for sending emails.

### 📂 File Structure

- **API Routes**:
   - `/api/newsletter`: Handles email subscriptions.
   - `/api/contact`: Manages contact form submissions.
- **Dashboard**: Accessible via `/dashboard`, allowing users to manage their profiles.

### 🌟 Key Components

- `navbar.jsx`: Navigation bar with dark mode toggle.
- `blog-page.jsx`: Renders a list of blog posts.
- `footer-bar.jsx`: Footer with social links and branding.
- `newsletter.jsx`: Form for collecting email addresses.

### 🎨 Styling

This project uses **Tailwind CSS** for styling. Global styles are defined in `globals.css`, and custom utility classes can be added to `tailwind.config.js`.

### 🛡️ Deployment

To deploy this application:
- Build the app for production:
```bash
npm run build
```

2. Deploy it using platforms like **Vercel**, **Netlify**, or **Heroku**.

### 🤝 Contributing

Contributions are welcome! Please submit a pull request or create an issue for any bug reports or feature requests.

### 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

### Author

👤 **Waseem Akram**

- GitHub: [@evildevill](https://github.com/evildevill)
- Facebook: [evildevill](https://www.facebook.com/hackerwasii)
- YouTube: [evildevill](https://www.youtube.com/channel/@hackerwasii)