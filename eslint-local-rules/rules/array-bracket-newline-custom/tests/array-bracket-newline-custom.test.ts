import { RuleTester } from 'eslint';

import { arrayBracketNewlineCustom } from '../index';

const ruleTester = new RuleTester();

ruleTester.run('array-bracket-newline-custom', arrayBracketNewlineCustom, {
    valid: [{ code: `
    [
        1, 
        2, 
        3
    ]
    ` }],
    invalid: [
        {
            code: `[
        1]`,
            output: '[1]',
            errors: [{ messageId: 'unexpectedOpeningLinebreak' }],
        },
        {
            code: `[1
        ]`,
            output: '[1]',
            errors: [{ messageId: 'unexpectedClosingLinebreak' }],
        },
        {
            code: `[1,
         2
        ]`,
            output: `[
1,
         2
        ]`,
            errors: [{ messageId: 'missingOpeningLinebreak' }],
        },
        {
            code: `[
         1,
         2]`,
            output: `[
         1,
         2
]`,
            errors: [{ messageId: 'missingClosingLinebreak' }],
        },
    ],
});
