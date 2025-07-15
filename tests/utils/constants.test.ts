import { expect, test } from 'vitest';

import * as utils from '../../src/utils';
import '../helpers/utils';



test('utils - matchMedia', () => {
	expect(utils.UI.ANIMATION_SPEED).toStrictEqual(0);
});
