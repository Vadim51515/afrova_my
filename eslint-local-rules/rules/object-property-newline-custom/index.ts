/* eslint-disable no-mixed-operators */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { type Rule } from 'eslint';
const OPTION_VALUE = { oneOf: [
    { enum: [
        'always',
        'never',
    ] },
    {
        type: 'object',
        properties: {
            multiline: { type: 'boolean' },
            minProperties: {
                type: 'integer',
                minimum: 0,
            },
            consistent: { type: 'boolean' },
        },
        additionalProperties: false,
        minProperties: 1,
    },
] };

type ValueType = 'always' | 'never' | {
    multiline?: boolean;
    minProperties?: number;
    consistent?: boolean;
};

function normalizeOptionValue(value: ValueType) {
    let multiline = false;
    let minProperties = Number.POSITIVE_INFINITY;
    let consistent = false;

    if (value) {
        if (value === 'always') {
            minProperties = 0;
        } else if (value === 'never') {
            minProperties = Number.POSITIVE_INFINITY;
        } else {
            multiline = Boolean(value.multiline);
            minProperties = value.minProperties || Number.POSITIVE_INFINITY;
            consistent = Boolean(value.consistent);
        }
    } else {
        consistent = true;
    }

    return {
        multiline,
        minProperties,
        consistent,
    };
}

function isObject(value: unknown) {
    return typeof value === 'object' && value !== null;
}

function isNodeSpecificOption(option: unknown) {
    return isObject(option) || typeof option === 'string';
}

function normalizeOptions(options: Record<string, ValueType>) {
    if (isObject(options) && Object.values(options).some(isNodeSpecificOption)) {
        return {
            ObjectExpression: normalizeOptionValue(options.ObjectExpression),
            ObjectPattern: normalizeOptionValue(options.ObjectPattern),
            ImportDeclaration: normalizeOptionValue(options.ImportDeclaration),
            ExportNamedDeclaration: normalizeOptionValue(options.ExportDeclaration),
            TSInterfaceDeclaration: normalizeOptionValue(options.TSInterfaceDeclaration),
            TSTypeAliasDeclaration: normalizeOptionValue(options.TSTypeAliasDeclaration),
        };
    }

    const value = normalizeOptionValue(options);

    return {
        ObjectExpression: value,
        ObjectPattern: value,
        ImportDeclaration: value,
        ExportNamedDeclaration: value,
        TSInterfaceDeclaration: value,
        TSTypeAliasDeclaration: value,
    };
}

// function isTokenOnSameLine(left, right) {
//     return left.loc.end.line === right.loc.start.line;
// };

export const objectPropertyNewlineCustom = {
    meta: {
        deprecated: true,
        replacedBy: [],
        type: 'layout',

        schema: [{ oneOf: [
            OPTION_VALUE,
            {
                type: 'object',
                properties: {
                    ObjectExpression: OPTION_VALUE,
                    ObjectPattern: OPTION_VALUE,
                    ImportDeclaration: OPTION_VALUE,
                    ExportDeclaration: OPTION_VALUE,
                    TSInterfaceDeclaration: OPTION_VALUE,
                    TSTypeAliasDeclaration: OPTION_VALUE,
                },
                additionalProperties: false,
                minProperties: 1,
            },
        ] }],

        fixable: 'whitespace',

        messages: { propertiesOnNewline: 'Object properties must go on a new line.' },
    },

    create(context: Rule.RuleContext) {
        const sourceCode = context.getSourceCode();
        const normalizedOptions = normalizeOptions(context.options[0]);

        function check(node) {
            const currentNodeType = node.type;
            let objectProperties;

            if (node.type === 'ObjectExpression' || node.type === 'ObjectPattern') {
                objectProperties = node.properties;
            } else if (node.type === 'TSInterfaceDeclaration') {
                objectProperties = node.body.body;
            } else if (node.type === 'TSTypeAliasDeclaration') {
                objectProperties = node.typeAnnotation.members;
            } else {
                objectProperties = node.specifiers
                    .filter((s) => s.type === 'ImportSpecifier' || s.type === 'ExportSpecifier');
            }

            if (!objectProperties || objectProperties.length <= 1) return;

            if (objectProperties.length >= normalizedOptions[currentNodeType].minProperties) {
                objectProperties.forEach((property, i) => {
                    if (
                        objectProperties[i + 1] && objectProperties[i + 1].loc.start.line !== property.loc.end.line
                        || objectProperties[i - 1] && objectProperties[i - 1].loc.end.line !== property.loc.start.line
                    ) return;
                    context.report({
                        node,
                        loc: property.loc,
                        messageId: 'propertiesOnNewline',
                        fix(fixer) {
                            const comma = sourceCode.getTokenBefore(property);
                            const rangeAfterComma = [
                                comma.range[1],
                                property.range[0],
                            ];

                            if (sourceCode.text.slice(rangeAfterComma[0], rangeAfterComma[1]).trim()) {
                                return null;
                            }

                            return fixer.replaceTextRange(rangeAfterComma, '\n');
                        },
                    });
                });
            }
        }

        return {
            ObjectExpression: check,
            ObjectPattern: check,
            ImportDeclaration: check,
            ExportNamedDeclaration: check,
            TSInterfaceDeclaration: check,
            TSTypeAliasDeclaration: check,
        };
    },
};
