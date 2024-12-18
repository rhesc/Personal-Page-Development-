<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect the form data
    $name = htmlspecialchars($_POST['name']);
    $comment = htmlspecialchars($_POST['comment']);

    // For simplicity, display the data (you can save to a file or database here)
    echo "<h2>Comment Submitted</h2>";
    echo "<p>Name: $name</p>";
    echo "<p>Comment: $comment</p>";

    // Optionally, redirect to a thank you page
    // header("Location: thank_you.php");
}
?>
