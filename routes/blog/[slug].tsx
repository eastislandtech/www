import { page } from "fresh";
import { define } from "@/utils.ts";
import { getPost } from "@/lib/blog.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const post = await getPost(ctx.params.slug);
    return page({ post });
  },
});

export default define.page((ctx) => {
  const post = ctx.data.post;

  return (
    <>
      <main class="max-w-6xl mx-auto p-8">
        <section class="prose">
          <h2>{post.title}</h2>
          <p class="text-sm text-gray-500 mt-2">{post.date}</p>

          <article class="prose mt-6">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </section>
      </main>
    </>
  );
});
