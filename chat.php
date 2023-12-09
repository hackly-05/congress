<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chatbot Example</title>
</head>

<body>
    <div id="chat-box"></div>
    <div id="input-box">
        <input type="text" id="user-input" placeholder="Type your message...">
        <button id="send-btn" onclick="sendMessage()">Send</button>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script>
    function sendMessage() {
        var userInput = $('#user-input').val();

        if (userInput.trim() !== "") {
            $('#chat-box').append('<p><strong>You:</strong> ' + userInput + '</p>');

            // Send user input to the server for processing
            $.post('boot.php', {
                userInput: userInput
            }, function(response) {
                var botResponse = response.botResponse;
                $('#chat-box').append('<p><strong>Bot:</strong> ' + botResponse + '</p>');
            });

            $('#user-input').val("");
            $('#chat-box').scrollTop($('#chat-box')[0].scrollHeight);
        }
    }
    </script>
</body>

</html>