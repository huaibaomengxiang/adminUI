$(document).ready(function () {
    $(".tab>li").click(function () {
        let index=$(this).index()
        $(this).addClass("tabActive").siblings().removeClass("tabActive")
        $(".content").find("li").eq(index).show().siblings().hide()
    })
})