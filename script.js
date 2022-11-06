const divResult = document.getElementById("divResult");
const btnSummary = document.getElementById("btnSummary");
const btnDelete = document.getElementById("btnDelete");
const form = document.forms[1];

const discountCategory = {
    estudiante: 0.80,
    trainee: 0.50,
    junior: 0.15,
};

btnSummary.addEventListener("click", (e) => {
    e.preventDefault();
    
    const amount = parseInt(form["amount"].value);
    const category = form["category"].value;
    const total = amount * 200;

    const totalToPay = total - (total * discountCategory[category]);
    document.getElementById("total").innerText = totalToPay;

    divResult.style.display = "block";
});

btnDelete.addEventListener("click", (e) => {
    e.preventDefault();
    divResult.style.display = "none";
    form.reset();
});
