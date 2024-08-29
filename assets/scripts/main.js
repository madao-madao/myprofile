$(document).ready(function () {       // подписываемся на событие загрузки документа
});
function OpenModal() {
    $("#registration-modal").addClass("is-active")
}
$("#registration-btn").click(function () {  //подписываемся на событие клика кнопки
    OpenModal()
});