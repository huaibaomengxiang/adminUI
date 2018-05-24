/**
 * Created by Administrator on 2018/1/11.
 */
$(document).ready(function () {
    $("button.add").click(function () {
        if($(".form_item").find("input[name='id']")){
            $("input[name='id']").parent().hide()
        }
        $(".mark").show()
    })
    $("button.edit").click(function () {
        if($(".form_item").find("input[name='id']")){
            $("input[name='id']").parent().show()
        }
        $(".mark").show()
    })
    $("tbody img").click(function () {
        $(".mark>.main>img").attr("src",$(this)[0].src)
        $(".mark").show()
    })
    document.querySelector(".mark").onclick=function (e) {
        let ev=e.target||e.srcElement
        if(ev.className=="mark"){
            $(".mark").hide()
        }
    }
})