/**
 * Created by adisri on 2/15/15.
 */

var server = io.connect('http://localhost:8080');
var loopNumber = 1;

$('#execute').on('click', function(e){
    e.preventDefault();
    server.emit('execute');
});

server.on('execute', function(bookName, sender, receiver){
    var tempRow = $('<tr></tr>');
    var $bookName = $('<td>' + bookName + '</td>');
    var $sender = $('<td>' + sender + '</td>');
    var $receiver = $('<td>' + receiver + '</td>');
    tempRow.append($bookName).append($sender).append($receiver);
    $('#tableBody' + loopNumber).append(tempRow);
});

server.on('newLoop', function(){
    console.log('New Loop!');
    loopNumber++;
});

