document.getElementById("add-money-btn")
.addEventListener("click", function (event) {
      event.preventDefault();

      const addMoney = inputFeildValueById("input-add-money");
      const pinNumber =inputFeildValueById("input-pin-number");

      if(isNaN(addMoney)){
            return("please try again")
      }
      
      if(pinNumber === 1234){
            const inpuAddMoney = inputTextValueById("account-balence");
            const newBalence = addMoney + inpuAddMoney;

            document.getElementById("account-balence").innerText = newBalence;

            const p = document.createElement("p");
            p.innerText = `Added ${addMoney} Tk || new belance: ${newBalence}`

            document.getElementById("transection-history").appendChild(p)
            
      }else{
            alert("faild please try again")
      }

})