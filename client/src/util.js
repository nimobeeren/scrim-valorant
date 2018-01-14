/*
	Source: https://stackoverflow.com/a/901144
 */
export function getUrlParameter(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[[\]]/g, "\\$&");
	const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}
