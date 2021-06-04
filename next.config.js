const path = require("path");
const withSass = require("@zeit/next-sass");
// const withImages = require('next-images');
const withTypescript = require("@zeit/next-typescript");

module.exports = withTypescript({
  webpack(config, options) {
    return config;
  },
});

module.exports = withSass({
  cssModules: true,
});
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

// module.exports = withImages()

// module.exports = withImages({
//   exclude: path.resolve(__dirname, 'assets/svg'),
//   webpack(config, options) {
//     return config
//   }
// })
