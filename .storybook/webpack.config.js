const path = require('path');
const { lstatSync, readdirSync } = require('fs');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

const basePath = path.resolve(__dirname, '../', 'packages');
const packages = readdirSync(basePath).filter((name) =>
  lstatSync(path.join(basePath, name)).isDirectory(),
);

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  Object.assign(config.resolve.alias, {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@taxi/${name}`]: path.join(basePath, name, 'src'),
      }),
      {},
    ),
  });

  return config;
};
