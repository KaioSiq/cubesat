const form = document.getElementById('form');
const wishButtons = document.getElementsByClassName("wish-button");
const input = document.getElementById("email");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;

    if (email.includes("@")) {
        window.alert("Enviado com sucesso!");
        localStorage.setItem('lead', email);
        form.reset();
        return;
    }

    window.alert("Email inválido!")
})


console.log(wishButtons, typeof wishButtons)

for (let button of wishButtons) {
    button.onclick = (e) => {
        input.focus();     
    }
}
