$(document).ready(function(){
    var flag = 0;  
    $("#move").click(function(){
      if(flag == 0) {
        $("#imgChange1").attr("src","img/section8/kirbyAttack.gif");
        $("#imgChange1").css("padding-left", 220, "px");
        $("#imgChange2").attr("src","img/section8/metaKnightAttack.gif");
        $("#imgChange2").css("padding-right", 220, "px");
        flag = 1;
      }
      else if(flag == 1) {
        $("#imgChange1").attr("src","img/section8/kirbyStop.gif");
        $("#imgChange2").attr("src","img/section8/metaKnightStop.gif");
        flag = 0;
      }
    });
  });