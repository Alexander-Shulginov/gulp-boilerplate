module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: 'airbnb-base',
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-unused-vars': 'off',
		'no-unused-expressions': 'off',
		'no-param-reassign': 'off',
		'no-console': 'off',
		'import/no-cycle': 'off',
	},
	ignorePatterns: ['build/js/*.js', 'src/js/vendor/*.js'],
};
