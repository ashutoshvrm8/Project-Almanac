$(function () {
    $("#countTable").dataTable({
        "bPaginate": true,
        "bInfo": false,
        "bFilter": false,
        "bLengthChange": false,
        "bSort": false,
        "sPaginationType": "full_numbers"
    });

    $('.first').text('').append('<i class="fa fa-angle-double-left" aria-hidden="true"></i>');
    $('.previous').text('').append('<i class="fa fa-angle-left" aria-hidden="true"></i>');
    $('.next').text('').append('<i class="fa fa-angle-right" aria-hidden="true"></i>');
    $('.last').text('').append('<i class="fa fa-angle-double-right" aria-hidden="true"></i>');
})