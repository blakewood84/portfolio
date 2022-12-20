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

export function getBlogPosts() {
  console.log("Blog Directory: ", blogDirectory);
  // get directories under the blog directory
  const fileNames = fs.readdirSync(blogDirectory);

  // Will give an array of directories

  const files = fs.readdirSync(blogDirectory + `/${fileNames[0]}`);
  console.log("Files in flutter directory: ", files);
}
