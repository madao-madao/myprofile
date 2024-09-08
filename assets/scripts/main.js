$(document).ready(function () {       // подписываемся на событие загрузки документа
});
function OpenModal() {
    $("#registration-modal").addClass("is-active")
}
$("#registration-btn").click(function () {  //подписываемся на событие клика кнопки
    OpenModal()
});
function CloseModal() {
    $("#registration-modal").removeClass("is-active")
};
$(document).keyup(function (e) {
    if (e.keyCode == "27") {
        CloseModal();
    }
});
$("#close-xmark").on("click", function () {  //обращаемся к крестику и при клике закрываем модальное окно.
    CloseModal()
}
);