module.exports = {
  addons: [
    {
      name: "@storybook/addon-postcss",
      options: { postcssLoaderOptions: { implementation: require("postcss") } },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  core: { builder: "@storybook/builder-webpack5" },
  framework: "@storybook/react",
  stories: ["../stories/**/*.stories.@(j|t)s?(x)"],
};
