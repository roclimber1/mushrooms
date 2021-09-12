

module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'camelcase': ['error', { 'properties': 'always' }],

        'comma-dangle': ['error', {
            'arrays': 'never',
            'objects': 'never',
            'imports': 'never',
            'exports': 'never',
            'functions': 'never'
        }],

        'indent': [
            'error',
            4
        ],

        'linebreak-style': [
            'error',
            'unix'
        ],

        'operator-linebreak': [
            'error',
            'before'
        ],

        'quotes': [
            'error',
            'single'
        ],

        'semi': [
            'error',
            'never'
        ],

        'object-curly-spacing': ['error', 'always', {
            'arraysInObjects': false,
            'objectsInObjects': false
        }],
        
        'array-bracket-spacing': ['error', 'never', {
            'arraysInArrays': false,
            'objectsInArrays': false,
            'singleValue': false
        }],

        'no-inferrable-types': false
    }
}

