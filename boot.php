<?php
header('Content-Type: application/json');

// Simple associative array to map user input to responses
$responses = [
    'do' => 'Hi, Debasish',
    'hello' => 'Hello! How can I help you?',
    'how are you' => 'I am a chatbot. I don\'t have feelings, but thanks for asking!',
    'bye' => 'Goodbye! Have a great day!',
    'so whats your name' => 'My name is avtar',
    'who developed you' => 'I am Ai text assistant..Developed By Debasish Dash, He is from Odisha, Keonjhar Pincode-758031',
    'photo' => '<img src="img/205.jpg" alt="">',
    'doo' => 'Hi, Debasish(Devisha)',



];

// Get user input
$userInput = strtolower(trim($_POST['userInput']));

// Process the user input and get the response
$response = isset($responses[$userInput]) ? $responses[$userInput] : 'I\'m not sure how to respond to that.';

// Simulate processing delay (for demonstration purposes)
sleep(1);

// Return the response as JSON
echo json_encode(['botResponse' => $response]);
?>