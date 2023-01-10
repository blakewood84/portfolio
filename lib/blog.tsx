import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "blog");

// Display Categories on the Side

// Display a List of Categories
// with articles inside categories

//   Flutter
//   - Article 1
//   - Article 2
//  Javascript
//   - Article 1
//   - Article 2

export function getBlogPosts(): any {
  const posts = [];

  // Each folder under the blog folder is a category
  const files: string[] = fs.readdirSync(blogDirectory);

  for (const file of files) {
    const id = file.replace(/\.md$/, "");

    // Read markdown file as string
    const filePath = path.join(blogDirectory, file);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Use gray-matter to pare the post metadata section
    const { content, data } = matter(fileContents);

    const contents = {
      id,
      data,
      content,
    };

    posts.push(contents);
  }

  return posts;
}
