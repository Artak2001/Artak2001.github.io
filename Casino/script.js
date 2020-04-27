var bet = document.querySelector(".bet");
var slot = document.getElementsByClassName("slot");
var range = document.querySelector(".range");
var reward = document.querySelector(".reward");
var balance = document.querySelector(".balance");
var bank = document.querySelector(".bank");
bank.textContent = 1000 + "$";
balance.textContent = 500 + "$";
range.value = parseInt( bet.textContent );

function range_change(e){
    bet.textContent = e.value + "$";
    
    for (let i = 0; i < slot.length; i++) {
        slot[i].classList.remove("active");
    }

    for (let i = 0; i <slot.length; i++) {
        slot[i].textContent = Math.floor( parseInt( bet.textContent ) * Math.random());
    }
}

function click_button(){
    let length = Math.floor(Math.random() * slot.length );
    console.log(length);
    for (let i = 0; i < slot.length; i++) {
        slot[i].classList.remove("active");
    }
    slot[length].classList.toggle("active");
    
    reward.textContent = -parseInt(bet.textContent) + parseInt(slot[length].textContent ) + "$";
    balance.textContent = parseInt( balance.textContent ) + parseInt(reward.textContent) + "$";
    bank.textContent = parseInt(bank.textContent) + parseInt(reward.textContent) * -1 + "$"  ;  
    
}
