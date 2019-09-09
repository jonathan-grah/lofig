import 'bluebird';
import 'whatwg-fetch';

window.lofig = {
	folder: 'config/default.json',
	get: query => {
		return fetch(lofig.folder)
			.then(response => {
				return response.json();
			}).then(json => {
				query = query.split('.');
				return Promise.each(query, property => {
					json = json[property];
				}).then(() => {
					return json;
				});
			}).catch(err => {
				console.log('parsing failed', err);
			});
	},
	has: query => {
		return fetch(lofig.folder)
			.then(response => {
				return response.json();
			}).then(json => {
				query = query.split('.');
				return Promise.each(query, property => {
					json = json[property];
				}).then(() => {
					if (json) return true;
					else return false;
				});
			}).catch(err => {
				console.log('parsing failed', err);
			});
	}
};
