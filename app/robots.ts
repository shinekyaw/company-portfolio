import { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${siteContent.url}/sitemap.xml`,
  };
}
