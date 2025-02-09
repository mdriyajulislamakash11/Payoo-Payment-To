function inputFeildValueById(id) {
      const addMoney = document.getElementById(id).value;
      const inputAddMoney = parseFloat(addMoney);
      return inputAddMoney;
}

function inputTextValueById(id) {
      const balence = document.getElementById(id).innerText;
      const newBalence = parseFloat(balence);
      return newBalence;
}

function showAddBtn(id) {
      document.getElementById("add-money-form").classList.add("hidden");
      document.getElementById("cash-out-form").classList.add("hidden");
      document.getElementById("transection-form").classList.add("hidden");

      document.getElementById(id).classList.remove("hidden");
}