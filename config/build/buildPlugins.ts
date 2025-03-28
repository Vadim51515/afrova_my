import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { type IBuildOptions } from './types/config';

export function buildPlugins ({
    paths,
    isDev,
    apiUrl,
    project,
}: IBuildOptions): Array<webpack.WebpackPluginInstance> {
    const isProd = !isDev;
    const progressPlugins = [
        new HTMLWebpackPlugin({ template: paths.html }),
        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),

        new CircularDependencyPlugin({
            // exclude detection of files based on a RegExp
            exclude: /a\.js|node_modules/,
            // include specific files based on a RegExp
            include: /dir/,
            // add errors to webpack instead of warnings
            failOnError: true,
            // allow import cycles that include an asyncronous import,
            // e.g. via import(/* webpackMode: "weak" */ './file.js')
            allowAsyncCycles: false,
            // set the current working directory for displaying module paths
            cwd: process.cwd(),
        }),
        new ForkTsCheckerWebpackPlugin({ typescript: {
            diagnosticOptions: {
                semantic: true,
                syntactic: true,
            },
            mode: 'write-references',
        } }),
    ];

    // progressPlugins.push(new BundleAnalyzerPlugin({
    //     openAnalyzer: false
    // }))

    if (isDev) {
        progressPlugins.push(new webpack.HotModuleReplacementPlugin());
    }

    if (isProd) {
        progressPlugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }));
        progressPlugins.push(new CopyPlugin({ patterns: [{
            from: paths.locales,
            to: paths.buildLocales,
        }] }));
    }

    return progressPlugins;
};
