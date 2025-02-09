document.getElementById("cash-out-btn")
.addEventListener("click", function (event) {
      event.preventDefault();

      
      const cashOut = inputFeildValueById("input-cash-out");
      console.log(cashOut)
      const pinNumber = inputFeildValueById("input-pin-cash-out");

      if(isNaN(cashOut)){
            return("please try again")
      }
      
      if(pinNumber === 1234){
            const accountBalence = inputTextValueById("account-balence");

            if(cashOut <= accountBalence){
                  const newBalence = accountBalence - cashOut; 
                  document.getElementById("account-balence").innerText = newBalence;



            }else{
                  alert("please currect amount enter")
            }

            
      }else{
            alert("faild please try again")
      }

})