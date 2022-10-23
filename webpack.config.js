const path = require("path");
const src = "app";

module.exports = {
    entry: path.resolve(__dirname, src, "index.js"),
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: false,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: false,
        // hot: false,
        client: {
            progress: true,
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        compress: true,
        port: 9000,
    },
    plugins: [
        // new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, src),
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: "defaults",
                                    },
                                ],
                                "@babel/preset-react",
                            ],
                        },
                    },
                ],
            },
        ],
    },
};
