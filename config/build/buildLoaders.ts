import type webpack from 'webpack';

import { babelLoaderFunc } from './loaders/buildBabelLoader';
import { buildCssLoader } from './loaders/buildCssLoader';
import { type IBuildOptions } from './types/config';

export function buildLoaders (options: IBuildOptions): Array<webpack.RuleSetRule> {
    // Если не используем typescript - нужен babel-loader
    // const typescriptLoader = {
    //     test: /\.tsx?$/,
    //     use: 'ts-loader',
    //     exclude: /node_modules/
    // }

    const cssLoader: webpack.RuleSetRule = buildCssLoader(options.isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgoConfig: { plugins: [{
                    name: 'convertColors',
                    params: { currentColor: true },
                }] },
            },
        }],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
        // test: /\.(png|jpe?g|gif)$/i,
        use: [{ loader: 'file-loader' }],
    };

    const codeBabelLoader = babelLoaderFunc({
        ...options,
        isTsx: false,
    });

    const tsxCodeBabelLoader = babelLoaderFunc({
        ...options,
        isTsx: true,
    });

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        // typescriptLoader,
        cssLoader,
    ];
}
