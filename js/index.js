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
    $("#demo_one").tap(function(){
        alert("你妈逼");
    });
    $("#demo_one").doubleTap(function(){
        alert("你妈逼1")
    });
    $("#demo_one").swipeUp(function(){
        alert("你妈逼2");
    });
    $("#demo_one").swipeDown(function(){
        alert("你妈逼3");
    });
}
