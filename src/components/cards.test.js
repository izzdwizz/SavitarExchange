const { getByTestId, render, waitFor } = require('@testing-library/react');
const cardComponent = require('./Cards.js').default;

describe('Components display correct data after API call', () => {
	// test('Bulk price displays correct data type', () => {
	// 	const bulkTag = getByTestId('bulk-price');
	// 	const bulkPrice = bulkTag.textContent;
	// 	expect(bulkPrice).not.toBeNaN();
	// });
	test('Bulk price displays correct data type', async () => {
		const { getByTestId } = render(cardComponent);
		const bulkPriceElement = await waitFor(() => getByTestId('bulk-price'));
		const bulkPriceText = bulkPriceElement.textContent;
		expect(parseFloat(bulkPriceText)).not.toBeNaN();
	});
});
// TEST sucess message
// TEST rendering
