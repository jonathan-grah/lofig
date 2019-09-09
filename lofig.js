import 'bluebird';
import 'whatwg-fetch';

window.lofig = {
	folder: 'config/default.json',
	get: (query, callback) => {
		fetch(lofig.folder)
			.then(response => {
				return response.json();
			}).then(json => {
				query = query.split('.');
				return Promise.each(query, property => {
					json = json[property];
				}).then(() => {
					callback(json);
				});
			}).catch(err => {
				console.log('parsing failed', err);
			});
	},
	has: (query, callback) => {
		fetch(lofig.folder)
			.then(response => {
				return response.json();
			}).then(json => {
				query = query.split('.');
				return Promise.each(query, property => {
					json = json[property];
				}).then(() => {
					if (json) callback(true);
					else callback(false);
				});
			}).catch(err => {
				console.log('parsing failed', err);
			});
	}
};
