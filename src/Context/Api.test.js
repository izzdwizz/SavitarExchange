const { getByTestId } = require('@testing-library/react');
const axios = require('axios');
const supertest = require('supertest');

//  TESTING API
describe('API response body validation', () => {
	let response;
	beforeAll(async () => {
		response = await axios.get(
			'https://api.coinranking.com/v2/coin/Qwsogvtv82FCd/price',
			{
				headers: {
					'x-access-token':
						'coinrankingb0b521302437f6eeac962db6613c638408766e23def98a8a',
				},
				withCredentials: false,
			}
		);
	});
	test('shoud respond with status code of 200', () => {
		expect(response.status).toBe(200);
	});

	test('Price received', () => {
		expect(response.data.data.price).toBeDefined();
	});

	test('Price is number', () => {
		expect(typeof parseInt(response.data.data.price)).toBe('number');
	});

	test('Price is not NAN', () => {
		expect(response.data.data.price).not.toBeNaN();
	});
	// test('Price is not NAN', () => {
	// 	expect(typeof parseInt(response.data.data.price)).toHaveAccessibleDescription;
	// });
});

// TEST sucess message
// TEST rendering
