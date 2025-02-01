let formData = {
    email: "",
    message: "",
}

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]'),
}
const { form, input, textarea } = refs;

form.addEventListener('input', (evt) => {
    formData.email = evt.currentTarget.elements.email.value.trim();
    formData.message = evt.currentTarget.elements.message.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (input.value === "" || textarea.value === "") {
        alert('Fill please all fields');
        return;
    } else {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
        form.reset();
    }
})

if (localStorage.getItem("feedback-form-state")) {
    const savedData = localStorage.getItem("feedback-form-state");
    formData = JSON.parse(savedData);
    input.value = formData.email;
    textarea.value = formData.message;
}
