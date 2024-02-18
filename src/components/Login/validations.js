const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

const validate = (obj) => {
	const errors = {};
	if (!regexEmail.test(obj.email)) {
		errors.email = "Enter a valid email";
	} else if (obj.email.length > 35) {
		errors.email = "The email must be less than 35 characters";
	} else if (!regexPassword.test(obj.password)) {
		errors.password =
			"The password must be between 8 and 16 characters, at least one digit, at least one lowercase letter, and at least one uppercase letter";
	}

	return errors;
};

export default validate;
