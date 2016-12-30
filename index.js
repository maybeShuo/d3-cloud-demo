const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const config = require("./webpack.config.dev.js");
const complier = webpack(config);

new WebpackDevServer(complier, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    contentBase: "./public"
}).listen(3000, "localhost", err => {
    if (err) {
        throw new gutil.PluginError("webpack-dev-server", err);
    }
    const uri = "http://127.0.0.1:3000/";
});
