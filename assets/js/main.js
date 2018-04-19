(function () {
    var numOfHaystacks = Math.floor(Math.random() * (9 - 5) + 1) + 5;

    var needleRandomizer;

    var imageOnScreen = 'assets/images/haystack.png';

    var haystacksClicked = 0;

    var needleFound = false;

    $('.restart-button').hide();

    function generateImages() {
        needleRandomizer = Math.floor(Math.random() * numOfHaystacks);
        console.log(needleRandomizer);
        for (var i = 0; i < numOfHaystacks; i++) {
            $('.haystacks').append(`<span class="image-container-size haystack-position${i}"><img class="haystack" src="./${imageOnScreen}"></span>`);
            if (i === needleRandomizer) {
                $('.haystack-position' + i).addClass('needle-here');
            }
        }
    }
    
    function checkGuessesRemaining() {
        if (haystacksClicked >= 3 && needleFound === false) {
            alert('Out of guesses. Click Restart to try again.')
            $('.restart-button').show();
        }
    }

    function restartGame() {
        imageOnScreen = 'assets/images/haystack.png';
        $('.haystacks').empty();
        generateImages();
        $('.restart-button').hide();
        haystacksClicked = 0;
        needleFound = false;
    }

    $('.restart-button').on('click', function(){
        restartGame();
    })

    $(document).on('click', '.haystack', function () {
        haystacksClicked++;
        checkGuessesRemaining();
        $(this).addClass('smash');
    })

    $(document).on('click', '.needle-here', function () {
        needleFound = true;
        $('.needle-here').empty();
        imageOnScreen = 'assets/images/needle.png';
        $('.needle-here').append(`<span class="image-container-size"><img class="haystack" src="./${imageOnScreen}"></span>`);
        alert("You win!");
        $('.restart-button').show();
    })
    generateImages();
})(); // end of document ready function