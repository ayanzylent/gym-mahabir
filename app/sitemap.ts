import { MetadataRoute } from "next";
import { APP_URL } from "@/config/constant";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: APP_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    // Add additional pages here as the site grows
  ];
}
