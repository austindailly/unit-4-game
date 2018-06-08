$(document).ready(function(){
    var random=Math.floor(Math.random() * 101 + 19)

    $("#randomNumber").text(Random);

    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);

    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random);
        $("#randomNumber").text(random);
        var num1 = Math.floor(Math.random() * 11 + 1);
        var num2 = Math.floor(Math.random() * 11 + 1);
        var num3 = Math.floor(Math.random() * 11 + 1);
        var num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $("#finalTotal").text(userTotal);
    }

    function win() {
        alert("You Win!");
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function lose() {
        alert("You lose!");
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }

    $("#saphire").on("click", function () {
        userTotal = userTotal + num1;
        console.log("New User Total = " + userTotal);
        $("#finalTotal").text(userTotal);
        if (userTotal == random) {
            win();
        }
        else (userTotal > random); {
            lose();
        }
    })

    $("#ruby").on("click", function () {
        userTotal = userTotal + num1;
        console.log('"New User Total = " + userTotal');
        $("#finalTotal").text(userTotal);
        if (userTotal == random) {
            win();
        }
        else (userTotal > random); {
            lose();
        }
    })

    $("#diamond").on("click", function () {
        userTotal = userTotal + num1;
        console.log("New User Total = " + userTotal);
        $("#finalTotal").text(userTotal);
        if (userTotal == random) {
            win();
        }
        else (userTotal > random); {
            lose();
        }
    })

    $("#emerald").on("click", function () {
        userTotal = userTotal + num1;
        console.log("New User Total = " + userTotal);
        $("#finalTotal").text(userTotal);
        if (userTotal == random) {
            win();
        }
        else (userTotal > random); {
            lose();
        }
    });

});