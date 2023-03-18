import { render } from '@testing-library/svelte';
import { InputMath } from '../src/input-math';
// import { waitForTimeout } from './helpers/utils';
import userEvent from '@testing-library/user-event';


const props = {
	id: 'Component1',
	name: 'Component1',
	title: 'Component1',
	placeholder: 'Component1',
	class: 'test-class',
	required: true,
};


test('InputMath', async () => {
	const { container, component, getByTitle } = render(InputMath, props);
	const mock = jest.fn();
	component.$on('change', mock);

	const inputMath = container.querySelector('.test-class');
	expect(inputMath).toBeInTheDocument();
	expect(inputMath).toHaveClass('test-class');

	// verify props
	const input = getByTitle('Component1');
	expect(input).toHaveAttribute('id', 'Component1');
	expect(input).toHaveAttribute('title', 'Component1');
	expect(input).toHaveAttribute('name', 'Component1');
	expect(input).toHaveAttribute('placeholder', 'Component1');
	expect(input).toHaveAttribute('required');

	// test just digits
	await userEvent.clear(input);
	await userEvent.type(input, '123456');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('123456');

	// test fractions
	await userEvent.clear(input);
	await userEvent.type(input, '12.3456');
	await userEvent.keyboard('[Tab]');
	expect(input).toHaveValue('12.35');
	expect(mock).toHaveBeenCalled();


	// test addition
	await userEvent.clear(input);
	await userEvent.type(input, '12+13');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('25');

	// test fractions addition (inc. js bug when adding 0.1 and 0.2)
	await userEvent.clear(input);
	await userEvent.type(input, '0.01+0.02');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('0.03');

	// test longer expression
	await userEvent.clear(input);
	await userEvent.type(input, '10 * 2 - 10 / 2 + 1');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('16');


	// test incorrect input
	await userEvent.clear(input);
	await userEvent.type(input, '.0.0');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('0');

	await userEvent.clear(input);
	await userEvent.type(input, 'abc');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('');

	await userEvent.clear(input);
	await userEvent.type(input, '1.0000a');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('1');

	await userEvent.clear(input);
	await userEvent.type(input, '1e');
	await userEvent.keyboard('[Enter]');
	expect(input).toHaveValue('1');
});
