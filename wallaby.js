export default function (wallaby) {
	return {
		compilers: {
			'**/*.js': wallaby.compilers.babel(),
		},
		env: {
			params: { runner: '--experimental-vm-modules' }
		},
	};
}
