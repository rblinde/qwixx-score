module.exports = eleventyConfig => {
  eleventyConfig.addPassthroughCopy({ "./src/_css": "/css" });
  eleventyConfig.addPassthroughCopy({ "./src/_scripts": "/scripts" });

  return {
    templateFormats: ["html"],
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "src/",
      includes: "_includes",
      layouts: "_layouts",
    }
  };
};
