let turn = 1;

$("button").click(function () {
  if (turn == 1) {
    $("#screen").text("PLAYER 2 TURN FOLLOWS");
    $(this).css("opacity", "1");
    $(this).addClass("fa fa-check");
    turn = 2;
  } else {
    $("#screen").text("PLAYER 1 TURN FOLLOWS");
    $(this).css("opacity", "1");
    $(this).addClass("fa fa-times");
    turn = 1;
  } /*funckija s kojom mjenjam text u h1 s id s,turn je definiran kao parametar (ali prije sve kao varijabla u globalnom scope-u) if-u
  a onda kad taj parametar koristim da mjenjam neki kod po potrebi,ovdje sad trenutno je .text*/
});

$("button").click(function () {
  if ($(this).hasClass("fa fa-times") || $(this).hasClass("fa fa-check")) {
    $(this).css("background-color", "red");
    setTimeout(() => {
      $(this).css("background-color", "white");
    }, 500);
  }
});

function reset() {
  $("#screen").text("PLAYER 1 TURN FOLLOWS");
  $("#screen").css("background-color", "transparent");
  $(".r").removeClass("fa fa-check");
  $(".r").removeClass("fa fa-times");
  $("button").css("opacity", "0.6");
  turn = 1;

  // Reset Colors
  $(".sq1").css("color", "black");
  $(".sq2").css("color", "black");
  $(".sq3").css("color", "black");
  $(".sq4").css("color", "black");
  $(".sq5").css("color", "black");
  $(".sq6").css("color", "black");
  $(".sq7").css("color", "black");
  $(".sq8").css("color", "black");
  $(".sq9").css("color", "black");
}
