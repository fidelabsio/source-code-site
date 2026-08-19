/** @type {import('next').NextConfig} */
const nextConfig = {
  // The webhook route reads zip/*.zip at runtime via fs, not via import, so
  // Next's default file tracing won't pick it up on its own — without this,
  // the base product zip is missing from the deployed serverless function.
  outputFileTracingIncludes: {
    "/api/webhooks/shopify": ["./zip/**"],
  },
};

module.exports = nextConfig;
