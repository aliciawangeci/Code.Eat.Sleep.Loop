const snakeCase = str => {
	return str
		.replace(/([a-z](?=[A-Z]))/g, "$1 ")
		.toLowerCase()
		.replace(/[ -]/g, "_")
		.replace(/[\W]/g, "");
};

module.exports = snakeCase;
