module.exports = () => {
    return {

        env: {
            type: 'node'
        },

        files: [
            { pattern: 'src/**/*.ts' },
            { pattern: 'test/**/*.ts' },
            { pattern: '!src/**/*.d.ts' },
            { pattern: '!test/**/*.spec.ts' }
        ],

        tests: [
            { pattern: 'test/**/*.spec.ts' }
        ],

        debug: true,

        // or any other supported testing framework:
        // https://wallabyjs.com/docs/integration/overview.html#supported-testing-frameworks
        testFramework: 'jasmine'
    };
};
