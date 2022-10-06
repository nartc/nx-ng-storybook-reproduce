module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials'],
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    // Make whatever fine-grained changes you need that should apply to all storybook configs

    // Modifying the SCSS rule like this yields an error
    // that the Component Styles come in as [undefined]
    //
    // config.module.rules = config.module.rules.filter(
    //   (rule) => rule && rule.test && !rule.test.test('.scss')
    // );
    //
    // config.module.rules.push({
    //   test: /\.scss$/,
    //   exclude: /\\default.scss$/,
    //   use: [
    //     'style-loader',
    //     'css-loader',
    //     {
    //       loader: 'sass-loader',
    //       options: {
    //         sassOptions: {
    //           includePaths: [
    //             "libs/rig/styles/public-api"
    //           ]
    //         }
    //       }
    //     }
    //   ]
    // })

    // Return the altered config
    return config;
  },
};
