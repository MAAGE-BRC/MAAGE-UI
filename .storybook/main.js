/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  "stories": [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/experimental-addon-test"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },
  "docs": {
    "autodocs": "tag"
  },
  "viteFinal": async (config) => {
    if (!config.optimizeDeps) {
      config.optimizeDeps = {};
    }
    config.optimizeDeps.exclude = [
      ...(config.optimizeDeps.exclude || []),
      '@storybook/addon-docs',
      '@storybook/blocks',
    ];

    // Add Tailwind CSS support
    config.css = config.css || {};
    config.css.postcss = config.css.postcss || {};
    config.css.postcss.plugins = [
      require('tailwindcss'),
      require('autoprefixer'),
    ];

    return config;
  }
};
export default config;
