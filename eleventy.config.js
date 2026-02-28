import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import rssPlugin from "@11ty/eleventy-plugin-rss";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItKatex from "markdown-it-katex";

export default function (eleventyConfig) {
  // --- Plugins ---
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(rssPlugin);

  // --- Markdown ---
  const md = markdownIt({
    html: true,
    linkify: true,
    typographer: true, // smart quotes, em/en dashes
  })
    .use(markdownItAttrs)
    .use(markdownItKatex, { throwOnError: false });

  eleventyConfig.setLibrary("md", md);

  // --- Collections ---
  eleventyConfig.addCollection("posts", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/blog/*.md").reverse()
  );

  eleventyConfig.addCollection("tagList", (collectionApi) => {
    const tagSet = new Set();
    collectionApi.getAll().forEach((item) => {
      (item.data.tags || []).forEach((tag) => {
        if (tag !== "post") tagSet.add(tag);
      });
    });
    return [...tagSet].sort();
  });

  // --- Filters ---
  eleventyConfig.addFilter("dateDisplay", (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    })
  );

  eleventyConfig.addFilter("dateISO", (date) =>
    new Date(date).toISOString()
  );

  eleventyConfig.addFilter("limit", (arr, n) => arr.slice(0, n));

  eleventyConfig.addFilter("currentYear", () => new Date().getFullYear());

  eleventyConfig.addFilter("slugify", (str) =>
    str.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")
  );

  // --- Passthrough ---
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/resume.pdf");

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
