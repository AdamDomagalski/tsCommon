module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "@typescript-eslint/tslint",
        "import",
        "unicorn"
    ],
    "overrides": [
        {
            "files": ["*Test.ts"],
            "rules": {
                "no-unused-expressions": 0,
                "@typescript-eslint/no-explicit-any": 0,
                "@typescript-eslint/tslint/config": 0,
                "@typescript-eslint/no-require-imports":0,
                "@typescript-eslint/member-ordering":0,
                "@typescript-eslint/no-var-requires":0,
                "unicorn/consistent-function-scoping":0
            }
        }
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": ["error", {default: 'array-simple'}],
        "@typescript-eslint/await-thenable": "error",
        "@typescript-eslint/ban-ts-ignore": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "error",
        "@typescript-eslint/consistent-type-assertions": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                "accessibility": "explicit",
                overrides: {
                    accessors: 'explicit',
                    constructors: 'no-public',
                    methods: 'explicit',
                    properties: 'explicit',
                    parameterProperties: 'explicit'
                }
            }
        ],
        "@typescript-eslint/indent": [
            "error",
            4,
            {
                "ObjectExpression": "first",
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "FunctionExpression": {
                    "parameters": "first"
                },
                "SwitchCase":1
            }
        ],
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                "multiline": {
                    "delimiter": "semi",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-extraneous-class": "error",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-for-in-array": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "no-param-reassign": ["error", {"props": true}],
        "@typescript-eslint/no-parameter-properties": "error",
        "@typescript-eslint/no-require-imports": "warn",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/no-use-before-define": "warn",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "off",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/quotes": [
            "error",
            "single"
        ],
        "@typescript-eslint/restrict-plus-operands": "error",
        "@typescript-eslint/semi": [
            "error",
            "always"
        ],
        "@typescript-eslint/space-within-parens": [
            "off",
            "never"
        ],
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unbound-method": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": [
            "error",
            "always"
        ],
        "camelcase": "warn", //TODO when a lot of incompatible external libraries are used, can be turned off
        "class-methods-use-this": "off",
        "comma-dangle": "off",
        "complexity": [
            "error",
            {
                "max": 5
            }
        ],
        "constructor-super": "error",
        "curly": "error",
        "default-case": "error",
        "dot-notation": "error",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "guard-for-in": "error",
        "id-blacklist": [
            "error",
            "any",
            "Number",
            "String",
            "Boolean",
        ],
        "id-match": "error",
        "import/no-default-export": "off",
        "import/no-deprecated": "warn",
        "import/no-extraneous-dependencies": [
            "error",
            {
                "devDependencies": true
            }
        ],
        "import/no-internal-modules": "error",
        "import/no-unassigned-import": "error",
        "import/order": "off",
        "linebreak-style": "off",
        "max-classes-per-file": [
            "error",
            2
        ],
        "max-len": [
            "error",
            {
                "ignorePattern": "^import |^export",
                "code": 170
            }
        ],
        "max-lines": [
            "error",
            300
        ],
        "new-parens": "error",
        "newline-per-chained-call": "off",
        "no-bitwise": "error",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "error",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "error",
        "@typescript-eslint/no-magic-numbers": [
            "error",
            {
                "ignoreReadonlyClassProperties": true,
                "ignore": [
                    0,
                    1
                ]
            }
        ],
        "no-multiple-empty-lines": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-null/no-null": "off",
        "no-plusplus": [
            "error",
            {
                "allowForLoopAfterthoughts": true
            }
        ],
        "no-redeclare": "error",
        "no-return-await": "error",
        "no-sequences": "error",
        "no-shadow": [
            "error",
            {
                "hoist": "all"
            }
        ],
        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "error",
        "no-unsafe-finally": "error",
        "no-unused-expressions": "off",
        "no-unused-labels": "error",
        "no-useless-constructor": "error",
        "no-var": "error",
        "no-void": "error",
        "object-shorthand": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padding-line-between-statements": [
            "off",
            {
                "blankLine": "always",
                "prev": "*",
                "next": "return"
            }
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "@typescript-eslint/prefer-readonly": "error",
        "prefer-template": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "radix": "off",
        "space-before-function-paren": "off",
        "spaced-comment": [
            "off",
            "never"
        ],
        "unicorn/filename-case": "off",
        "unicorn/catch-error-name": "error",
        "unicorn/consistent-function-scoping": "error",
        "unicorn/custom-error-definition": "off",
        "unicorn/error-message": "error",
        "unicorn/escape-case": "error",
        "unicorn/expiring-todo-comments": "error",
        "unicorn/explicit-length-check": "error",
        "unicorn/import-index": "error",
        "unicorn/new-for-builtins": "error",
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/no-array-instanceof": "error",
        "unicorn/no-console-spaces": "error",
        "unicorn/no-fn-reference-in-iterator": "off",
        "unicorn/no-for-loop": "off", //This should be error
        "unicorn/no-hex-escape": "error",
        "unicorn/no-keyword-prefix": "off",
        "unicorn/no-nested-ternary": "error",
        "unicorn/no-new-buffer": "error",
        "unicorn/no-process-exit": "off",//This should be used in non CLI apps
        "unicorn/no-unreadable-array-destructuring": "error",
        "unicorn/no-unsafe-regex": "warn",
        "unicorn/no-unused-properties": "error",
        "unicorn/no-zero-fractions": "error",
        "unicorn/number-literal-case": "error",
        "unicorn/prefer-add-event-listener": "error",
        "unicorn/prefer-dataset": "error",
        "unicorn/prefer-event-key": "error",
        "unicorn/prefer-exponentiation-operator": "error",
        "unicorn/prefer-flat-map": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/prefer-modern-dom-apis": "error",
        "unicorn/prefer-negative-index": "error",
        "unicorn/prefer-node-append": "error",
        "unicorn/prefer-node-remove": "error",
        "unicorn/prefer-query-selector": "error",
        "unicorn/prefer-reflect-apply": "error",
        "unicorn/prefer-spread": "error",
        "unicorn/prefer-starts-ends-with": "off",
        "unicorn/prefer-string-slice": "warn",
        "unicorn/prefer-text-content": "error",
        "unicorn/prefer-trim-start-end": "error",
        "unicorn/prefer-type-error": "error",
        "unicorn/prevent-abbreviations": "off",
        "unicorn/regex-shorthand": "error",
        "unicorn/throw-new-error": "error",
        "use-isnan": "error",
        "valid-typeof": "off",
        "yoda": "off",
        "@typescript-eslint/tslint/config": [
            "error",
            {
                "rules": {
                    "ban": [
                        true,
                        [
                            "describe",
                            "only"
                        ],
                        [
                            "it",
                            "only"
                        ]
                    ],
                    "encoding": true,
                    "import-spacing": true,
                    "jsdoc-format": [
                        true,
                        "check-multiline-start"
                    ],
                    "match-default-export-name": true,
                    "no-boolean-literal-compare": true,
                    "no-dynamic-delete": true,
                    "no-inferred-empty-object-type": true,
                    "no-mergeable-namespace": true,
                    "no-reference-import": true,
                    "no-tautology-expression": true,
                    "no-unnecessary-callback-wrapper": true,
                    "@typescript-eslint/no-unused-vars": ["error", {
                        "vars": "all",
                        "args": "after-used",
                        "ignoreRestSiblings": false
                    }],
                    "number-literal-format": true,
                    "one-line": [
                        true,
                        "check-catch",
                        "check-finally",
                        "check-else",
                        "check-open-brace"
                    ],
                    "prefer-conditional-expression": [
                        true,
                        "check-else-if"
                    ],
                    "prefer-method-signature": true,
                    "prefer-switch": [
                        true,
                        {
                            "min-cases": 2
                        }
                    ],
                    "prefer-while": true,
                    "return-undefined": true,
                    "static-this": true,
                    "switch-final-break": true,
                    "typedef": [
                        true,
                        "call-signature",
                        "arrow-call-signature",
                        "parameter",
                        "property-declaration",
                        "member-variable-declaration"
                    ],
                    "unnecessary-else": true,
                    "whitespace": [
                        true,
                        "check-branch",
                        "check-decl",
                        "check-operator",
                        "check-separator",
                        "check-type",
                        "check-typecast",
                        "check-type-operator",
                        "check-rest-spread"
                    ]
                }
            }
        ]
    }
};
