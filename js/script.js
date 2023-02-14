function getInputValue(id) {
  const value = document.getElementById(id).value;
  document.getElementById(id).value = "";
  return parseInt(value);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function subTotal() {
  const roseTotalPrice = document.getElementById("rose-price").innerText;
  const cupCakeTotalPrice = document.getElementById("cup-cake-price").innerText;
  const waferBiscuitsTotalPrice = document.getElementById(
    "wafer-biscuits-price"
  ).innerText;
  const kitKatTotalPrice = document.getElementById("kitkat-price").innerText;

  const subTotal =
    parseInt(roseTotalPrice) +
    parseInt(cupCakeTotalPrice) +
    parseInt(waferBiscuitsTotalPrice) +
    parseInt(kitKatTotalPrice);
  console.log(subTotal);

  setInnerText("subtotal", subTotal);
  setInnerText("total", subTotal);
}

document.getElementById("btn-rose").addEventListener("click", function () {
  const quantity = getInputValue("rose-quantity");
  const rosePrice = quantity * 120;

  setInnerText("rose-price", rosePrice);
  subTotal();
});

document.getElementById("btn-cup-cake").addEventListener("click", function () {
  const quantity = getInputValue("cup-cake-quantity");
  const cupCakePrice = quantity * 200;

  setInnerText("cup-cake-price", cupCakePrice);
  subTotal();
});

document
  .getElementById("btn-wafer-biscuits")
  .addEventListener("click", function () {
    const quantity = getInputValue("wafer-biscuits-quantity");
    const waferBiscuitsPrice = quantity * 100;

    setInnerText("wafer-biscuits-price", waferBiscuitsPrice);
    subTotal();
  });

document.getElementById("btn-kitkat").addEventListener("click", function () {
  const quantity = getInputValue("kitkat-quantity");
  const kitKatPrice = quantity * 150;

  setInnerText("kitkat-price", kitKatPrice);
  subTotal();
});

document
  .getElementById("btn-promo-code-apply")
  .addEventListener("click", function () {
    const promoCode = getInputValue("promo-code");

    if (promoCode === 101) {
      const total = document.getElementById("total").innerText;
      const sum = total - total * 0.1;
      setInnerText("total", sum);
    } else {
      alert("Invalid promo code. Try again with valid code!");
    }
  });
