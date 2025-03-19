class AmigoSecreto {
    constructor() {
        // Referencias a los elementos del DOM
        this.inputAmigo = document.getElementById("amigo");
        this.listaAmigos = [];
        this.ulListaAmigos = document.getElementById("listaAmigos");
        this.ulResultado = document.getElementById("resultado");
        this.btnAgregar = document.querySelector(".button-add");
        this.btnSortear = document.querySelector(".button-draw");
        this.btnReiniciar = document.querySelector(".button-reset");

        // Expresión regular para validar solo letras y espacios
        this.regex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚüÜ\s]+$/;

        // Inicializa los eventos de los botones
        this.init();
    }

    init() {
        // Asigna eventos a los botones
        this.btnAgregar.addEventListener("click", this.agregarAmigo.bind(this));
        this.btnSortear.addEventListener("click", this.sortearAmigo.bind(this));
        this.btnReiniciar.addEventListener("click", this.reiniciarAmigo.bind(this));
    }

    agregarAmigo() {
        const amigo = this.inputAmigo.value.trim();

        if (!this.regex.test(amigo)) {
            alert('Debes ingresar un nombre válido (solo letras y espacios).');
            this.inputAmigo.value = "";
            return;
        }

        if (this.listaAmigos.includes(amigo)) {
            alert("Este nombre ya está en la lista.");
            return;
        }

        if (this.listaAmigos.length >= 4) {
            alert("Solo puedes agregar hasta 4 amigos.");
            return;
        }

        this.listaAmigos.push(amigo);
        const li = document.createElement("li");
        li.textContent = amigo;
        this.ulListaAmigos.appendChild(li);
        this.inputAmigo.value = "";
        this.inputAmigo.focus();
    }

    sortearAmigo() {
        if (this.listaAmigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }

        const randomIndex = Math.floor(Math.random() * this.listaAmigos.length);
        const amigoSecreto = this.listaAmigos[randomIndex];

        this.ulResultado.innerHTML = `<li style="color: #6C7B91">El amigo secreto es: ${amigoSecreto}</li>`;
        this.btnSortear.disabled = true;
        this.btnAgregar.disabled = true;
    }

    reiniciarAmigo() {
        this.listaAmigos = [];
        this.ulListaAmigos.innerHTML = "";
        this.ulResultado.innerHTML = "";

        this.btnSortear.disabled = false;
        this.btnAgregar.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new AmigoSecreto();
});
