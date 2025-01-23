import { RuleTester } from 'eslint';

import { objectPropertyNewlineCustom } from '../index';

const ruleTester = new RuleTester({
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
});

const ruleOptions = {
    ObjectExpression: {
        minProperties: 2,
        consistent: true,
        multiline: false,
    },
    ObjectPattern: {
        minProperties: 2,
        consistent: true,
        multiline: false,
    },
    ImportDeclaration: {
        minProperties: 2,
        consistent: true,
        multiline: false,
    },
    ExportDeclaration: {
        minProperties: 2,
        consistent: true,
        multiline: false,
    },
    TSInterfaceDeclaration: {
        minProperties: 2,
        consistent: true,
        multiline: false,
    },
    TSTypeAliasDeclaration: {
        minProperties: 2,
        consistent: true,
        multiline: false,
    },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
ruleTester.run('object-property-newline-custom', objectPropertyNewlineCustom, {
    valid: [
        {
            options: [ruleOptions],
            code: 'interface IKek { asd: string };',
        },
        {
            options: [ruleOptions],
            code: 'type TKek = { asd: string }',
        },
        {
            options: [ruleOptions],
            code: 'import { useEffect } from \'react\'',
        },
        {
            options: [ruleOptions],
            code: 'let x = { a: 1 };',
        },
        {
            options: [ruleOptions],
            code: `
        let x = {
        a:1,
        b:2,
        c:3
        };`,
        },
    ],
    invalid: [{
        options: [ruleOptions],
        code: `
let x = {a:{b:'foo',c:'bar'}, g:'baz'};
`,
        output: `
let x = {
a:{
b:'foo',
c:'bar'},
g:'baz'};
`,
        errors: 4,
    }],
});
