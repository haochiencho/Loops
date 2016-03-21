/**
 * Created by adisri on 2/14/15.
 */
var server = io.connect('http://localhost:8080');

$('#tableBody').on('click', '.fa-trash-o', function(e){
    e.preventDefault();
    $(this).parent().parent().fadeOut(500);
});

$('#addToTradeList').on('click', function(e){
    e.preventDefault();
    var $chooseBook = $('#chooseBook');
    var addedBook = $chooseBook.val();
    var addedBookTitle = $("#chooseBook option:selected").text();
    var newRow = $('<tr><td>' + addedBookTitle + ' <i class="fa fa-trash-o pull-right"></i> </td></tr>');
    $('#tableBody').append(newRow.fadeIn(500));
});

$('#tableBody2').on('click', '.fa-trash-o', function(e){
    e.preventDefault();
    $(this).parent().parent().fadeOut(500);
});

$('#addToTradeList2').on('click', function(e){
    e.preventDefault();
    var $chooseBook2 = $('#chooseBook2');
    var addedBook = $chooseBook2.val();
    var addedBookTitle = $("#chooseBook2 option:selected").text();
    var newRow = $('<tr><td>' + addedBookTitle + ' <i class="fa fa-trash-o pull-right"></i> </td></tr>');
    $('#tableBody2').append(newRow.fadeIn(500));
});