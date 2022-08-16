module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard-with-typescript', 'plugin:prettier/recommended'],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				arrowParens: 'always',
				bracketSameLine: false,
				bracketSpacing: true,
				insertPragma: false,
				printWidth: 140,
				requirePragma: false,
				semi: true,
				singleQuote: true,
				trailingComma: 'es5',
				useTabs: true,
				tabWidth: 4,
			},
		],
	},
};
