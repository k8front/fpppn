let button = $(".btn-submit")[0];
button.addEventListener("click", function () {
    let result = [];
let title = "";
let str = "<b>Данные формы:</b> <br> <b>Страница:</b> http://fpppn.ru/ <br> <b>Форма:</b> Подбор квартиры" +
    "<br> -----------------------------------------------------";
    let array = $( 'input:checked' ).next("label");
    for (let n = 0; n < array.length; n++) {
        if (title !== $(array[n]).parent().parent().attr("title-checkbox")) {
            title = $(array[n]).parent().parent().attr("title-checkbox");
            str += "<br>"+ "<b>" + title + "</b>"+ " : " +"";
            str += $(array[n]).text()+", ";
        } else {
            str += $(array[n]).text() +", ";
        }

    }

    if($('input[data-name = "Номер телефона"]').val()) {
        str += "<br><b>Номер телефона:</b> " + "" + $('input[data-name = "Номер телефона"]').val();
        $.ajax({
            method: "POST",
            url: ""https://k8front.github.io/fpppn/send.php",
            data: {mailText: str},
            success: function (data, textStatus) {
                window.location.replace("/thanks");
            }
        })
    }
});
