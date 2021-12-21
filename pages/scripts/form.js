var submit_button = document.querySelector("#submit_button");
var message_area = document.querySelector("#message_area");
var warning_window = document.querySelector("#warning_window")
var warning_button = document.querySelector("#warning_button");
var warning_message = document.querySelector("#warning_message");
var display = false;

function sendMessage() {
    var text = message_area.value;
    message_area.value = "";
    if (text.length > 0)
        warning("Спасибо за пару красивых слов :)");
    else
        warning("Вы забыли написать пару красивых слов");
    setTimeout(hideWarning, 2000);
}

function warning(message) {
    warning_window.style.display = "flex";
    warning_message.textContent = message;
    display = true;
}

function hideWarning() {
    warning_window.style.display = "none";
    display = false;
}

hideWarning();
warning_button.addEventListener("click", function (event) {
    if (display === true)
        hideWarning();})
submit_button.addEventListener("click", function (event) {
    if (display === false)
        sendMessage();})