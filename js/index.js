var gitid = function(id){
    this.id=id;
    var prefix = id.substr(0,1);
    var id_ele = id.substr(1);
    var ele = document.getElementById(id_ele);
    var tag = document.getElementsByClassName(id);
    if(prefix == "#"){
        return ele;
    }else if(prefix == "." ){
        return ele;
    }else{
        return tag;
    }
};

window.onload=function(){
    $("demo_one").swipeUp(function(){
        $(".demo").css('transform','ranslateY(-100%)')
    });
    $("demo_one").swipeDown(function(){
        $(".demo").css('transform','ranslateY(-200%)')
    })
}
