

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
    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    message: 'минимум 8 символов, одну заглавную букву и одну цифру',
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

   
