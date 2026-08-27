import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogGrid from "../components/blog/BlogGrid";
import Newsletter from "../components/blog/Newsletter";

import { blogPosts } from "../data/blog";

function Blog() {
  const featuredPost =
    blogPosts.find(
      (post) => post.featured
    );

  return (
    <div className="page">

      <Navbar />

      <main>

        <BlogHero />

        {featuredPost && (
          <section className="featured-post-section section">
            <div className="container">
              <FeaturedPost
                post={featuredPost}
              />
            </div>
          </section>
        )}

        <BlogGrid />

        <Newsletter />

      </main>

    </div>
  );
}

export default Blog;