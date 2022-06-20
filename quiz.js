// var questlist=[];
// while (questlist.length<3){
//   var nextnumb=Math.floor(Math.random()*3)+1;
//   var check=questlist.includes(nextnumb);
//   if (check==false){
//     questlist.push(nextnumb);
//   }
// }

// $(".ans").prop('checked', false);
// console.log(questlist);
// var i=0;
// $(".start").click(function(){
//   $(".q"+questlist[i]).removeClass("hide");
//   $(".start").addClass("hide");
// });
// $(".next").click(function(){
//     $("body").removeAttr("class");
//     $(".q"+questlist[i]).addClass("hide");
//     i++;
//     $(".q"+questlist[i]).removeClass("hide");
//     $(".next").addClass("hide");
//     console.log(questlist[i]);
//     if (i>2){
//       $(".ans-true").removeClass("hide");
//     }
// });

// $(document).on("click",".submit", answer);

// function answer(e) {
//   let rightAnswer = $(e.target).parent().find('.true')
//     if (rightAnswer.is(":checked")){
        
//         $("body").attr("class","true");
//         $(".next").removeClass("hide");
//     }else if ($(".false").is(":checked")){
//         $("body").attr("class","false");
//         $(".ans-wrong").removeClass("hide");
//     }else{
//         alert("chose the answer");
//     }
// }
var questlist=[];
while (questlist.length<3){
  var nextnumb=Math.floor(Math.random()*3)+1;
  var check=questlist.includes(nextnumb);
  if (check==false){
    questlist.push(nextnumb);
  }
}

$(".ans").prop('checked', false);
console.log(questlist);
var i=0;
$(".start").click(function(){
  $(".q"+questlist[i]).removeClass("hide");
  $(".start").addClass("hide");
});
$(".next").click(function(){
    $("#container").removeAttr("class");
    $(".q"+questlist[i]).addClass("hide");
    i++;
    $(".q"+questlist[i]).removeClass("hide");
    $(".submit").removeClass("hide");
    $(".next").addClass("hide");
    console.log(questlist[i]);
    if (i>2){
      $(".ans-true").removeClass("hide");
    }
});

$(document).on("click",".submit", answer);



function answer(e) {
  let rightAnswer = $(e.target).parent().find('.true')
    if (rightAnswer.is(":checked")){
        
        $("#container").attr("class","true");
        $(".next").removeClass("hide");
        $(".submit").addClass("hide");
    }else if ($(".false").is(":checked")){
        $("#container").css("display","none");
        $(".ans-wrong").removeClass("hide");
    }else{
        alert("chose the answer");
    }
}

