const holes = $(".hole");
const scoreBoard = $(".score");
let score = 1;
const moles = $(".mole");
const min = 200;
const max = 1000;
let randomTemps = (Math.floor(Math.random()*(max-min))+min);

$("#startGame").click(function () {
        function generate() {
            let random = Math.floor(Math.random() * holes.length);
            holes.eq(random).toggleClass("up");
        }
        setInterval(generate, randomTemps);

    $(holes).click(function () {
        $(this).removeClass("up");
        scoreBoard[0].innerHTML = score++;
    });
});
