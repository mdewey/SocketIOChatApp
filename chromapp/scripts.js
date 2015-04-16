var socket = io('http://localhost:3000');
socket.on('chat message', function(msg){
	$('#messages').append($('<li>').text(msg));
});

function myAlert(){
	socket.emit('chat message', $('#m').val());
	$('#m').val('');
	return false;
}

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('mybutton').addEventListener('click', myAlert);
});