//Esta classe pode ser chamada na anotation @Matches() para ser usado como validador de senha

const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

export const regExHelper = {
    password,
};


