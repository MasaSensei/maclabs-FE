export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      dissalow: ["/alt-ads-1*", "/alt-ads-2*", "/alt-ads-3*", "/alt-ads-4*"],
    },
    sitemap: "https://maclabs.co.id/sitemap.xml",
  };
}
