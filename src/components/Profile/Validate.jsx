

export const emailValidate = {

  required: {
    value: true,
    message: 'Введите email',
},
pattern: {
    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Некорректный  email',
},
}

export const passValidate = {
  required: {
    value: true,
    message: 'Введите пароль',
},
pattern: {
    value:  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
    message: 'Пароль должен содержать минимум 6 символов, одну букву латинского алфавита и одну цифру',
},

}

export const tokenValidate = {
  required: {
      value: true,
      message: 'Введите токен',
  },
  minLength: {
      value: 197,
      message: 'Неккоректный токен',
  },
};

export const nameValidate = {
  required: {
      value: true,
      message: 'Введите имя',
  },
  maxLength: {
      value: 20,
      message: 'Имя слишком длинное',
  },
};

export const avatarValidate = {
  required: {
      value: true,
      message: 'URL-адрес вашего аватара',
  },
}; 

export const aboutValidate = {
  required: {
      value: true,
      message: 'О себе',
  },
  maxLength: {
      value: 50,
      message: 'Слишком длинная биография',
  },
};


export const imageValidate = {
  required: {
      value: true,
      message: 'URL-адрес картинки',
  },
};

export const textValidate = {
  required: {
      value: true,
      message: 'Не забудьте текст',
  },
};

export const titleValidate = {
  required: {
      value: true,
      message: 'заголовок',
  },
  maxLength: {
      value: 20,
      message: 'слишком длинный',
  },
};