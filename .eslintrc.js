// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
	},
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		'plugin:vue/essential',
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard'
	],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		'indent': ['error', 'tab', { 'SwitchCase': 1 }],
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 0,
		'semi': ['error', 'always'],
		'space-before-function-paren': ['error', 'never'],

	},
	"overrides": [{
		"files": ["*.vue"],
		"rules": {
			"indent": "off",
			// TODO: re-enable this rule after https://github.com/vuejs/eslint-plugin-vue/issues/407 is fixed
			// 'vue/script-indent': ['error', 'tab', { 'baseIndent': 1 }]
			'vue/script-indent': 0
		}
	}]
};
