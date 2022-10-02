function emailFieldValidator(email = "") {
  if (/^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/g.test(email)) {
    return null;
  }
  return "Invalid email address";
}

function phoneFieldValidator(phone = "") {
  if (/^\+?\d{6,12}$/.test(phone)) {
    return null;
  }
  return "Invalid phone number";
}

function requiredFieldValidator(value = "") {
  if (/.+/.test(value.trim())) {
    return null;
  }
  return "Field is required";
}

function numberFieldValidator(value = "") {
  if (/[0-9].+/.test(value)) {
    return null;
  }
  return "Invalid number";
}

function passwordFieldValidator(value = "") {
  if (/.{8}/.test(value)) {
    return null;
  }
  return "Password must contain at least 8 characters";
}

export default function validate(inputValue, validationPattern) {
  for (const validation of validationPattern.split("|")) {
    let validator;

    switch (validation.toLowerCase()) {
      case "required":
        validator = requiredFieldValidator;
        break;
      case "email":
        validator = emailFieldValidator;
        break;
      case "phone":
        validator = phoneFieldValidator;
        break;
      case "number":
        validator = numberFieldValidator;
        break;
      case "password":
        validator = passwordFieldValidator;
        break;
      default:
        break;
    }

    if (validator) {
      let error = validator(inputValue);
      if (error) {
        return error;
      }
    }
  }
  return null;
}
