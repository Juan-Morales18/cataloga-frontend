export const REGEX = {
  numbers: /[0-9]/,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  special: /[$*.\[\]{}()\?\-"!@#%&_+\-=;':"\\|,.<>\/?^~`]/,
};

export const PASSWORD_REQUIRMENTS = [
  {
    regex: REGEX.numbers,
    message: "Contiene al menos un número",
  },
  {
    regex: REGEX.uppercase,
    message: "Contiene al menos una letra mayúscula",
  },
  {
    regex: REGEX.lowercase,
    message: "Contiene al menos una letra minúscula",
  },
  {
    regex: REGEX.special,
    message: "Contiene al menos un caracter especial",
  },
];
