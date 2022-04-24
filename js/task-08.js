const formEl = document.querySelector('.login-form');


formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
    
    if (email.value === "" || password.value === "") {
        return alert("Всі поля форми мають бути заповнені!");
    } else {
        const userRegisterData = {};
        userRegisterData.email = email.value,
            userRegisterData.password = password.value
    
        console.log(userRegisterData);
    }
    event.currentTarget.reset();
});
