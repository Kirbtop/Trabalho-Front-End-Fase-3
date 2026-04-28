const mensalBtn = document.getElementById("BotaoMensal");
const anualBtn = document.getElementById("BotaoAnual");
const prices = document.querySelectorAll(".preco");

mensalBtn.addEventListener("click", () => {
    mensalBtn.classList.add("active");
    anualBtn.classList.remove("active");

    prices.forEach(p => {
        p.textContent = "R$" + p.dataset.mensal + "/mês";
    });
});

anualBtn.addEventListener("click", () => {
    anualBtn.classList.add("active");
    mensalBtn.classList.remove("active");

    prices.forEach(p => {
        p.textContent = "R$" + p.dataset.anual + "/ano";
    });
});