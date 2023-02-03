

const containerEl = [];

const inputName = document.getElementById("name");
containerEl.push(inputName);

const inputPhone = document.getElementById("phone");
containerEl.push(inputPhone);

const inputPassword = document.getElementById("password");
containerEl.push(inputPassword);

const inputPasswordRepeat = document.getElementById("password-repeat");
containerEl.push(inputPasswordRepeat);


function isValid(input) {
    switch (input) {
        case inputName:
            return inputName.value.length > 0 && inputName.value.length <= 50;
        case inputPhone:
            return inputPhone.value.length === 11 && Number.isInteger(+inputPhone.value);
        case inputPassword:
            return inputPassword.value.length >= 5 && inputPassword.value.length <= 50;
        case inputPasswordRepeat:
            return inputPasswordRepeat.value === inputPassword.value;

    }
}

function getTextError(input) {
    switch (input) {
        case inputName:
            if (inputName.value.length <= 0) {
                return "Имя должно содержать как минимум 1 символ";
            } else {
                return "Имя должно содержать максимум 50 символов";
            }
        case inputPhone:
            if (inputPhone.value.length !== 11) {
                return "Номер телефона должен содержать ровно 11 символов";
            } else {
                return "Номер телефона должен содержать 11 целых чисел!";
            }
        case inputPassword:
            if (inputPassword.value.length <= 5) {
                return "Пароль должен содержать не менее 5 символов";
            } else {
                return "Пароль должен содержать не более 50 символов";
            }
        case inputPasswordRepeat:
            return "Данное поле должно совпадать с полем пароль";
    }
}

document.getElementById("button").addEventListener("click", (event) => {
    for (let i = 0; i < containerEl.length; i++) {
        const label = document.querySelector(`[for=${containerEl[i].id}]`);
        label.textContent = "";
        containerEl[i].classList.remove("input-invalid");
        if (!isValid(containerEl[i])) {
            event.preventDefault();
            containerEl[i].classList.add("input-invalid");
            label.textContent = getTextError(containerEl[i]);
        }
    }
});



