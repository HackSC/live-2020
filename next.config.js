//const withTypescript = require("next-with-typescript");
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  optimizeImages: true,
  optimizeImagesInDev: true
});
