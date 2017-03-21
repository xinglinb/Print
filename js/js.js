var $ = function(id){
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
    
    $("#book1").onclick=function(){
        $("#mm1").style.animation="Moveupq 1.2s ease-in-out 0.6s forwards";
        $("#zz1").style.animation="Moveupw 1.2s ease-in-out 0.6s forwards";
        $("#oo1").style.animation="Moveupe 0.8s ease-in-out 1.4s forwards";
    };

    $("#book2").onclick=function(){
        $("#mm2").style.animation="Moveupq 1.2s ease-in-out 0.6s forwards";
        $("#zz2").style.animation="Moveupn 1.2s ease-in-out 0.6s forwards";
        $("#oo2").style.animation="Moveupe 0.8s ease-in-out 1.4s forwards";
    };

    $("#book3").onclick=function(){
        $("#mm3").style.animation="Moveupq 1.2s ease-in-out 0.6s forwards";
        $("#zz3").style.animation="Moveupm 1.2s ease-in-out 0.6s forwards";
        $("#oo3").style.animation="Moveupe 0.8s ease-in-out 1.4s forwards";
    };

    
 

}