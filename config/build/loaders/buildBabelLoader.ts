import { type IBuildOptions } from '../types/config';

interface IBabelLoader extends IBuildOptions {
    isTsx?: boolean;
}
export const babelLoaderFunc = ({
    isDev,
    isTsx,
}: IBabelLoader) => ({
    test: isTsx
        ? /\.(jsx|tsx)$/
        : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            cacheDirectory: true,
            presets: ['@babel/preset-env'],
            plugins: [
                // [
                //     'i18next-extract',
                //     {
                //         locales: ['ru', 'en'],
                //         keyAsDefaultValue: true
                //     }
                // ],
                [
                    '@babel/plugin-transform-typescript',
                    { isTsx },
                ],
                '@babel/plugin-transform-runtime',
                isTsx && !isDev && [{ props: ['data-testid'] }],
            ].filter(Boolean),
        },
    },
});
