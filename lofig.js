

window.lofig = {
	folder: '/config/default.json',
	config: null,
	fetchConfig: async () => {
		if (!lofig.config) {
			const response = await fetch(lofig.folder);

			if (!response.ok) {
				const message = `An error has occured: ${response.status}`;
				throw new Error(message);
			}

			lofig.config = response.json();
		}

		return lofig.config;
	},
	get: async (query, cb) => {
		let json = await lofig.fetchConfig();

		query.split('.')
			.forEach(property => {
				json = json[property];
			});

		if (cb) return cb(json);
		return json;
	},
	has: async (query, cb) => {
		let json = await lofig.fetchConfig();

		query.split('.')
			.forEach(property => {
				json = json[property];
			});

		if (cb) return cb(!!json);
		return !!json;
	}
};
