// jest.config.js
module.exports = {
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
	},
	testMatch: [
		'<rootDir>/src/**/*.test.js',
		'<rootDir>/src/Context/**/*.test.js',
		'**/__tests__/**/*.js?(x)',
		'**/?(*.)+(spec|test).js?(x)',
	],
};
