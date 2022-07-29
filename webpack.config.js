// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = MiniCssExtractPlugin.loader;

module.exports = () => {
    const mode = isProduction ? 'production' : 'development'
    // if (isProduction) {
    //     config.mode = 'production';
        
        
    // } else {
    //     config.mode = 'development';
    // }
    return {
        mode: mode,
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        devtool: isProduction ? false : 'inline-source-map',
        devServer: {
            open: true,
            host: 'localhost',
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'index.html',
            }),
    
            new MiniCssExtractPlugin(),
            // new webpack.EnvironmentPlugin(['NODE_ENV', 'DEBUG']),
            // new webpack.DefinePlugin({
            //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            //     'process.env.DEBUG': JSON.stringify(process.env.DEBUG),
            //   }),
        ],
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/i,
                    loader: 'ts-loader',
                    exclude: ['/node_modules/'],
                },
                {
                    test: /\.css$/i,
                    use: [stylesHandler,'css-loader'],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [stylesHandler, 'css-loader', 'sass-loader'],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                    type: 'asset',
                },
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: "babel-loader",
                      options: {
                        presets: ['@babel/preset-env']
                      }
                    }
                },
                // Add your rules for custom modules here
                // Learn more about loaders from https://webpack.js.org/loaders/
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
        },
    };
};
