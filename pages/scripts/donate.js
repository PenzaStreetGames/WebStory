var button = document.querySelector("#submit_button");
var sum = document.querySelector("#sum");
var card_number = document.querySelector("#card_number");
var valid_month = document.querySelector("#valid_month");
var valid_year = document.querySelector("#valid_year");
var cvv = document.querySelector("#cvv");
var attempts = 0;
var card_div = document.querySelector(".bank_card_div");
var donate_div = document.querySelector(".donate");
var strings = ["Нет, спасибо", "Не заполняйте форму", "Я пошутил", "Я её удалю сейчас", "Я предупреждал"]

var field_list = [sum, card_number, valid_month, valid_year, cvv];

function attemptIncrement() {
    if (attempts < strings.length) {
        for (let i = 0; i < field_list.length; i++) {
            field_list[i].value = strings[attempts];
        }
        attempts += 1;
    }
    else {
        card_div.remove();
        donate_div.remove();
    }
}

button.addEventListener("click", function (event) {
    attemptIncrement();
    button.remove();
})
