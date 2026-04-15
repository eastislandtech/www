import { walk } from "@std/fs";
import { extractYaml } from "@std/front-matter";

export async function getPosts() {
  const posts = [];

  for await (const file of walk("./blog", { exts: [".md"] })) {
    const raw = await Deno.readTextFile(file.path);
    const { attrs, body } = extractYaml(raw);

    posts.push({
      slug: file.name.replace(".md", ""),
      ...attrs,
      content: body,
    });
  }

  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getPost(slug: string) {
  const raw = await Deno.readTextFile(`./blog/${slug}.md`);
  const { attrs, body } = extractYaml(raw);

  return {
    ...attrs,
    content: body,
  };
}
