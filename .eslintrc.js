module.exports = {
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: ['airbnb', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
        'prettier/prettier': 'error',
    },
}
