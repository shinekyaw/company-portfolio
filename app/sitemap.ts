import { MetadataRoute } from "next";
import { siteContent } from "@/content/site";
import { caseStudiesContent } from "@/content/caseStudies";
import { blogContent } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteContent.url;

  const staticRoutes = [
    "",
    "/services",
    "/work",
    "/about",
    "/blog",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const workRoutes = caseStudiesContent.items.map((item) => ({
    url: `${baseUrl}/work/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogContent.posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...workRoutes, ...blogRoutes];
}
