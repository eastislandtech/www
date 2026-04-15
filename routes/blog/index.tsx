// routes/blog/index.tsx
import { page } from "fresh";
import { define } from "@/utils.ts";
import { getPosts } from "@/lib/blog.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const posts = await getPosts();
    return page({ posts });
  },
});

export default define.page((ctx) => {
  const { posts } = ctx.data;

  return (
    <>
      <main class="min-h-screen max-w-4xl mx-auto p-6">
        <section class="prose">
          <h1>Blog</h1>

          <div class="space-y-6 prose-a:no-underline">
            {!posts.length && <h2>No posts yet. Check back soon!</h2>}
            {posts.map((post) => (
              <a href={`/blog/${post.slug}`} class="card bg-base-200">
                <div class="card-body">
                  <h2 class="card-title mt-4">{post.title}</h2>
                  <p class="text-xs">Posted: {post.date}</p>
                  <p class="lead">{post.excerpt}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
});
