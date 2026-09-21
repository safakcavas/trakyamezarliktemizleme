import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.trakyamezarliktemizleme.site";

  // Static main pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Dynamic blog post routes (All 25 articles: 6 Guides + 19 District SEO posts)
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const isDistrict = post.category.includes("İlçeleri");
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly",
      priority: isDistrict ? 0.85 : 0.8,
    };
  });

  return [...staticRoutes, ...blogRoutes];
}
