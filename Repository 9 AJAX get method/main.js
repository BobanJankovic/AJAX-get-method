$(document).ready(function () {

    $.ajax({
            url: 'http://mysafeinfo.com/api/data?list=dinosaurs&format=xml',
            type: 'GET',
            dataType: 'xml'
        })

        .done(function (result) {

            var allData = $(result).find('d');
            allData.each(function (i, e) {
                $('#wrapp').append('<p><a href="' + $(this).attr('url') + '">' + $(this).attr('nm') + '</a></p>');
            });

        })
        .fail(function () {
            console.log("error");
        });









});
