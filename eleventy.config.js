import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

export default function (eleventyConfig) {
  // --- Markdown ---
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true, // smart quotes, em/en dashes
  }).use(markdownItAttrs);

  eleventyConfig.setLibrary("md", md);

  // --- Filters ---
  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  // --- Passthrough ---
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/googleb53b14940f3802ae.html");
  eleventyConfig.ignores.add("src/googleb53b14940f3802ae.html");
  eleventyConfig.addPassthroughCopy("src/yandex_6a465c15b8e56ae2.txt");

  return {
    dir: {
      input: "src",
      output: "_site",
      layouts: "_layouts",
      includes: "_includes",
      data: "../_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
