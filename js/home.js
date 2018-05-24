window.onload=function () {
    //导航点击
    $(".menu_item_title").click(function () {
        $(this).find(".iconfont").toggleClass("arrowActive");
        $(this).parent().siblings().find(".iconfont").removeClass("arrowActive")
        $(this).siblings().slideToggle('slow').parent().siblings().find(".menu_child").slideUp("slow");
    })
    $(".menu_child_item").click(function () {
        $(this).addClass("menuActive").siblings().removeClass("menuActive")
        $(this).parent().parent().siblings().find(".menu_child_item").removeClass("menuActive")
        $(".crumbs .nav").text($(this).parent().prev().text().trim())
        $(".crumbs span").show()
        $(".crumbs span:last-child").text($(this).text().trim())
    })


}