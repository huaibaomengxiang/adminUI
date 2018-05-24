$(document).ready(function () {
    // this.pageSize=size;
    // this.count=total;
    // this.pageNum=Math.ceil(total/size)
    var total;
    var pageSize;
    var maxPageNum=15;

    $(".page div").html(page())
    $(".page").on("click","li",function () {
        let str=page($(this).text())
        $(".page div").html(str)
    })
    $(".page").on("click","span",function () {
        let current=$(".page").find(".pageActive").text()
        if($(this).hasClass("nextMore")){
            let str=page(parseInt(current)+5)
        }else if($(this).hasClass("prevMore")){
            let str=page(parseInt(current)-5)
        }
        $(".page div").html(str)
    })
    $(".icon-zuoyoujiantou").click(function () {
        let current=$(".page").find(".pageActive").text()
        $(".page div").html(page(parseInt(current)-1))
    })
    $(".icon-next").click(function () {
        let current=$(".page").find(".pageActive").text()
        $(".page div").html(page(parseInt(current)+1))
    })
    function page(current=1) {
        if(current<1){
            this.currentPage=1;
        }else if(current>maxPageNum){
            this.currentPage=maxPageNum
        }else{
            this.currentPage=parseInt(current)
        }


        this.range=2

        if(this.currentPage==1){
            this.str="<li class='pageActive'>1</li>";
        }else{
            this.str="<li>1</li>";
        }

        this.minPage=this.currentPage-this.range<=1? 2:this.currentPage-this.range;
        if(this.minPage-1>1){
            this.str=this.str+`<span class="prevMore">...</span>`
        }

        this.maxPage=this.currentPage+this.range>=maxPageNum? maxPageNum-1:this.currentPage+this.range;
        if(this.currentPage<=3){
            this.minPage=2
            for(let i =0;i<=4;i++){
                if(this.minPage==this.currentPage){
                    this.str+=`<li class="pageActive">${this.minPage}</li>`;
                }else{
                    this.str+=`<li>${this.minPage}</li>`;
                }
                this.minPage++;
            }
        }else if(this.currentPage>=maxPageNum-2){
            this.minPage=maxPageNum-5
            for(let i =0;i<=4;i++){
                if(this.minPage==this.currentPage){
                    this.str+=`<li class="pageActive">${this.minPage}</li>`;
                }else{
                    this.str+=`<li>${this.minPage}</li>`;
                }
                this.minPage++;
            }
        }else {
            for(let i =this.minPage;i<=this.maxPage;i++){
                if(this.minPage==this.currentPage){
                    this.str+=`<li class="pageActive">${this.minPage}</li>`;
                }else{
                    this.str+=`<li>${this.minPage}</li>`;
                }
                this.minPage++;
            }
        }

        if(maxPageNum-this.maxPage>1){
            this.str=this.str+`<span class="nextMore">...</span>`
        }


        if(this.currentPage==15){
            this.str=this.str+`<li class="pageActive">${maxPageNum}</li>`
        }else {
            this.str=this.str+`<li>${maxPageNum}</li>`
        }
        return this.str
    }
})