export function emailFieldValidator(email) {
  if (/^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/g.test(email)) {
    return null;
  }
  return "Invalid email address";
}

export function phoneFieldValidator(phone) {
  if (/^\+?\d{6,12}$/.test(phone)) {
    return null;
  }
  return "Invalid phone number";
}

export function requiredFieldValidator(value) {
  if (/.+/.test(value.trim())) {
    return null;
  }
  return "Field is required";
}
