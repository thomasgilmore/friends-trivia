const wrongAnswer = (classOfButtonClicked, classOfOtherButton) => {
    console.log('wrong');
    $(classOfButtonClicked).css('background-color', '#FF0000');
    $(classOfOtherButton).attr("disabled","disabled");
    $(classOfOtherButton).removeClass("hover");
};
const rightAnswer = (classOfButtonClicked, classOfOtherButton) => {
    console.log('right');
    $(classOfButtonClicked).css('background-color', '#00FF0A');
    $(classOfOtherButton).attr("disabled","disabled");
    $(classOfOtherButton).removeClass("hover");
};

$('.Days-of-Our-Lives').on('click', function() { rightAnswer('.Days-of-Our-Lives', '.General-Hospital'); });
$('.General-Hospital').on('click', function() { wrongAnswer('.General-Hospital', '.Days-of-Our-Lives'); });
$('.Rotate').on('click', function() { wrongAnswer('.Rotate', '.Pivot'); });
$('.Pivot').on('click', function() { rightAnswer('.Pivot', '.Rotate'); });
$('.twenty').on('click', function() { rightAnswer('.twenty', '.fifteen'); });
$('.fifteen').on('click', function() { wrongAnswer('.fifteen', '.twenty'); });
$('.A-city-bus').on('click', function() { wrongAnswer('.A-city-bus', '.A-job-title'); });
$('.A-job-title').on('click', function() { rightAnswer('.A-job-title', '.A-city-bus'); });
$('.Cole-Sprouse').on('click', function() { rightAnswer('.Cole-Sprouse', '.Dylan-Sprouse'); });
$('.Dylan-Sprouse').on('click', function() { wrongAnswer('.Dylan-Sprouse', '.Cole-Sprouse'); });