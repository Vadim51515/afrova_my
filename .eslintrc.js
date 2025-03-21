module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    root: true,
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs,ts,tsx}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './.storybook/tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: [
        'react',
        'unused-imports',
        'simple-import-sort',
        'eslint-plugin-local-rules',
        '@stylistic',
        '@typescript-eslint',
    ],
    rules: {
        // common
        'import/extensions': [
            'error',
            'never',
        ],
        'import/prefer-default-export': 'off',
        'array-callback-return': 'off',
        'consistent-return': 'off',
        semi: 'off',
        'object-shorthand': 'off',
        'jsx-quotes': 'off', // stylistic replaced
        'no-underscore-dangle': 'off',
        'dot-notation': 'off',
        radix: 'off',
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ], // Оставлено т.к. stylistic не всегда правильно подбирает отступ
        'object-curly-newline': 'off',
        '@stylistic/object-curly-newline': [
            'error',
            { minProperties: 2 },
        ],
        'object-property-newline': 'off',
        'local-rules/object-property-newline-custom': [
            'error',
            {
                minProperties: 2,
                consistent: true,
                multiline: false,
            },
        ],
        'local-rules/array-bracket-newline-custom': [
            'error',
            {
                ArrayExpression: { minItems: 2 },
                ArrayPattern: { minItems: 4 },
            },
        ],
        'array-element-newline': 'off', // stylistic replaced
        'multiline-ternary': 'off', // stylistic replaced
        'arrow-body-style': [
            'error',
            'as-needed',
        ],
        'max-len': 'off', // stylistic replaced
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
        'n/no-callback-literal': 'off', // react
        'react/jsx-indent': 'off', // stylistic replaced
        'react/jsx-indent-props': 'off', // stylistic replaced
        'react/button-has-type': 'off',
        'react/prop-types': 'off',
        'react/function-component-definition': 'off',
        'react/no-deprecated': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/display-name': 'off',
        'react/jsx-filename-extension': [
            1,
            {
                extensions: [
                    '.js',
                    '.jsx',
                    '.tsx',
                ],
            },
        ], // ts
        '@typescript-eslint/indent': [
            'error',
            4,
        ], // Оставлено т.к. stylistic не всегда правильно подбирает отступ, // stylistic replaced
        '@typescript-eslint/semi': 'off', // stylistic replaced
        '@typescript-eslint/comma-dangle': 'off', // stylistic replaced
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],
        '@typescript-eslint/array-type': [
            'error',
            { default: 'generic' },
        ],
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-dynamic-delete': 'off',

        //stylistic
        '@stylistic/arrow-parens': [
            'error',
            'always',
        ],
        '@stylistic/type-generic-spacing': ['error'],
        '@stylistic/type-named-tuple-spacing': ['error'],
        '@stylistic/jsx-newline': [
            2,
            { prevent: false },
        ],
        '@stylistic/jsx-self-closing-comp': [
            'error',
            {
                component: true,
                html: true,
            },
        ],
        '@stylistic/jsx-one-expression-per-line': [
            'error',
            { allow: 'single-child' },
        ],
        '@stylistic/jsx-curly-brace-presence': [
            1,
            {
                props: 'ignore',
                children: 'ignore',
                propElementValues: 'ignore',
            },
        ],
        '@stylistic/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line',
            },
        ],
        '@stylistic/jsx-closing-bracket-location': [
            1,
            'line-aligned',
        ],
        '@stylistic/jsx-sort-props': [
            1,
            {
                multiline: 'last',
                shorthandLast: true,
                ignoreCase: true,
            },
        ],
        '@stylistic/jsx-first-prop-new-line': [
            'error',
            'multiprop',
        ],
        '@stylistic/jsx-max-props-per-line': [
            'error',
            {
                maximum: 1,
                when: 'always',
            },
        ],
        '@stylistic/jsx-indent': [
            2,
            4,
            {
                checkAttributes: true,
                indentLogicalExpressions: true,
            },
        ],
        '@stylistic/jsx-indent-props': [
            2,
            4,
        ],
        '@stylistic/array-element-newline': [
            'error',
            {
                ArrayExpression: { minItems: 2 },
                ArrayPattern: { minItems: 4 },
            },
        ],
        '@stylistic/multiline-ternary': [
            'error',
            'always',
        ],
        '@stylistic/jsx-tag-spacing': [
            'error',
            {
                'closingSlash': 'never',
                'beforeSelfClosing': 'always',
                'afterOpening': 'never',
                'beforeClosing': 'allow',
            },
        ],
        'operator-linebreak': 'off',
        '@stylistic/operator-linebreak': [
            'error',
            'before',
            {
                overrides: {
                    '=': 'none',
                    ';': 'after',
                },
            },
        ],
        '@stylistic/rest-spread-spacing': [
            'error',
            'never',
        ],
        '@stylistic/max-len': [
            'error',
            {
                code: 120,
                comments: 120,
                tabWidth: 4,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreTemplateLiterals: true,
            },
        ],
        '@stylistic/semi': [
            'error',
            'always',
        ],
        '@stylistic/one-var-declaration-per-line': [
            'error',
            'always',
        ],
        '@stylistic/comma-dangle': [
            'error',
            'always-multiline',
        ],
        '@stylistic/padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: [
                    'multiline-const',
                    'multiline-let',
                ],
                next: '*',
            },
            {
                blankLine: 'always',
                prev: 'import',
                next: 'export',
            },
        ],
        '@stylistic/quotes': [
            'error',
            'single',
        ],

        // plugins
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    [
                        '^react?\\w',
                        '^@?\\w',
                    ],
                    [
                        '/atlas-ui',
                        '/common/hooks',
                        '/common/utils',
                        '/common/components',
                        '/common',
                        '^\\../../..*',
                        '^\\../../*',
                        '^\\../*',
                        '^\\./',
                        '/redux',
                        '/utils',
                        '/type',
                        '/types',
                        'scss',
                        '/translations',
                        '^\\u0000',
                    ],
                ],
            },
        ],
        'simple-import-sort/exports': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
