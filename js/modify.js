$(document).ready(function () {
    $(".next").click(function () {
        $(".mark").show()
    })
    $(".markSubmit").click(function (e) {
        let str=""
        e.preventDefault()
        $("input[type=checkbox]:checked").each(function (i,v) {
            str+=v.value+","
        })
        $(".flowerlabel").val(str.slice(0,-1))
        $(".mark").hide()
    })
    var checkboxLength=$("input[type=checkbox]").length
    if(checkboxLength>3){

    }
})