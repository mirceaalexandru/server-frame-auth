'use strict';

const Joi = require('joi');

let descriptionCurrentUser =
	'Get current logged in user information.' +
	'<br>' +
	'<br> ' +
	'Usage: <br>' +
	'<i>curl -i -b "sid=Fe26.2**922304f9f..." http://localhost:9090/users/my</i>' +
	'<br>';

let responseCurrentUser = {
	failAction: 'log',
	status: {
		200: Joi.object({
			user: Joi.object({
				_id: Joi.string().required(),
				username: Joi.string().required(),
				email: Joi.string().required(),
				firstName: Joi.string(),
				lastName: Joi.string()
			})
		}),
		401: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		})
	}
};

let descriptionGetUser =
	'Get user information.' +
	'<br>' +
	'<br> ' +
	'Usage: <br>' +
	'<i>curl -i -b "sid=Fe26.2**922304f9f..." http://localhost:9090/users/57f55bb0930f6c0366598389</i>' +
	'<br>';

let responseGetUser = {
	failAction: 'log',
	status: {
		200: Joi.object({
			user: Joi.object({
				_id: Joi.string().required(),
				username: Joi.string().required(),
				email: Joi.string().required(),
				firstName: Joi.string(),
				lastName: Joi.string()
			})
		}),
		401: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		}),
		404: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		})
	}
};

let descriptionUpdateUser =
	'Update user information.' +
	'<br>' +
	'<br> ' +
	'Usage: <br>' +
	'<i>curl -i -H "Content-Type: application/json" -d \'{"username":"admin_", "isActive": true, "_id": "57f55bb0930f6c0366598380", "email": "wer@wer.wer", "firstName": "123", "lastName": "asd"}\'  -b "sid=Fe26.2**922304f9f..." http://localhost:9090/users/57f55bb0930f6c0366598389</i>' +
	'<br>';

let validateUpdateUser = {
	params: {
		id: Joi.string().required()
	},
	payload: {
		_id: Joi.string().required(),
		isActive: Joi.boolean().required(),
		username: Joi.string().required(),
		email: Joi.string().required(),
		firstName: Joi.string(),
		lastName: Joi.string()
	}
};

let responseUpdateUser = {
	failAction: 'log',
	status: {
		200: Joi.object({
			user: Joi.object({
				_id: Joi.string(),
				isActive: Joi.boolean().required(),
				username: Joi.string().required(),
				email: Joi.string().required(),
				firstName: Joi.string(),
				lastName: Joi.string()
			})
		}),
		401: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		}),
		404: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		}),
		409: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		})
	}
};

let descriptionChangePassword =
	'Change user password.' +
	'<br>' +
	'<br> ' +
	'Usage: <br>' +
	'<i>curl -i -H -X PUT "Content-Type: application/json" -d \'{"password":"xxx"}\'  -b "sid=Fe26.2**922304f9f..." http://localhost:9090/users/57f55bb0930f6c0366598389/password</i>' +
	'<br>';

let validateChangePassword = {
	params: {
		id: Joi.string().required()
	},
	payload: {
		password: Joi.string().min(8).required()
	}
};

let responseChangePassword = {
	failAction: 'log',
	status: {
		200: Joi.object(),
		401: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		}),
		404: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		}),
		409: Joi.object({
			statusCode: Joi.number().required(),
			error: Joi.string().required(),
			message: Joi.string().required()
		})
	}
};

module.exports.getCurrentUser = {
	description: descriptionCurrentUser,
	response: responseCurrentUser
};

module.exports.getUser = {
	description: descriptionGetUser,
	response: responseGetUser
};

module.exports.updateUser = {
	validate: validateUpdateUser,
	description: descriptionUpdateUser,
	response: responseUpdateUser
};

module.exports.changePassword = {
	validate: validateChangePassword,
	description: descriptionChangePassword,
	response: responseChangePassword
};
