// this test is run by Vows (as all files matching *test.js)

var vows = require('vows');

var common = require('./common'),
	objectShouldBeValid = common.objectShouldBeValid,
	objectShouldBeInvalid = common.objectShouldBeInvalid;

var objString = {
	val: 'Hello, json-gate'
};

var objNumber = {
	val: 3.14
};

var objInteger = {
	val: 42
};

var objBoolean = {
	val: false
};

var objObject = {
	val: {}
};

var objArray = {
	val: []
};

var objNull = {
	val: null
};

var objAny = {
	val: 'sub kuch milega'
};

var schemaNonString = {
	type: 'object',
	properties: {
		val: {
			disallow: 'string',
			required: true
		}
	}
};

var schemaNonNumber = {
	type: 'object',
	properties: {
		val: {
			disallow: 'number',
			required: true
		}
	}
};

var schemaNonInteger = {
	type: 'object',
	properties: {
		val: {
			disallow: 'integer',
			required: true
		}
	}
};

var schemaNonBoolean = {
	type: 'object',
	properties: {
		val: {
			disallow: 'boolean',
			required: true
		}
	}
};

var schemaNonObject = {
	type: 'object',
	properties: {
		val: {
			disallow: 'object',
			required: true
		}
	}
};

var schemaNonArray = {
	type: 'object',
	properties: {
		val: {
			disallow: 'array',
			required: true
		}
	}
};

var schemaNonNull = {
	type: 'object',
	properties: {
		val: {
			disallow: 'null',
			required: true
		}
	}
};

var schemaNonAny = {
	type: 'object',
	properties: {
		val: {
			disallow: 'any',
			required: true
		}
	}
};

vows.describe('Object Disallow').addBatch({
	'when a string is passed for a non-string': objectShouldBeInvalid(objString, schemaNonString),
	'when trying to pass a number for a non-string': objectShouldBeValid(objNumber, schemaNonString),
	'when a number is passed for a non-number': objectShouldBeInvalid(objNumber, schemaNonNumber),
	'when trying to pass a string for a non-number': objectShouldBeValid(objString, schemaNonNumber),
	'when an integer is passed for a non-number': objectShouldBeInvalid(objInteger, schemaNonNumber),
	'when an integer is passed for a non-integer': objectShouldBeInvalid(objInteger, schemaNonInteger),
	'when trying to pass a number for a non-integer': objectShouldBeValid(objNumber, schemaNonInteger),
	'when a boolean is passed for a non-boolean': objectShouldBeInvalid(objBoolean, schemaNonBoolean),
	'when trying to pass an integer for a non-boolean': objectShouldBeValid(objInteger, schemaNonBoolean),
	'when an object is passed for a non-object': objectShouldBeInvalid(objObject, schemaNonObject),
	'when trying to pass an array for a non-object': objectShouldBeValid(objArray, schemaNonObject),
	'when an array is passed for a non-array': objectShouldBeInvalid(objArray, schemaNonArray),
	'when trying to pass an object for a non-array': objectShouldBeValid(objObject, schemaNonArray),
	'when a null is passed for a non-null': objectShouldBeInvalid(objNull, schemaNonNull),
	'when trying to pass a boolean for a non-null': objectShouldBeValid(objBoolean, schemaNonNull),
	'when a string is passed for non-any': objectShouldBeInvalid(objAny, schemaNonAny)
}).export(module);
