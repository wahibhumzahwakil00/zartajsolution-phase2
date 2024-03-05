<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate and sanitize inputs
    $subject = isset($_POST["subject"]) ? htmlspecialchars(trim($_POST["subject"])) : null;
    $name = isset($_POST["name"]) ? htmlspecialchars(trim($_POST["name"])) : null;
    $email = isset($_POST["email"]) ? filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) : null;
    $message = isset($_POST["message"]) ? htmlspecialchars(trim($_POST["message"])) : null;

    // Check if all required fields are provided
    if ($subject && $name && $email && $message) {
        // Compose the email message
        $to = "wahib.humzah00@gmail.com";
        $headers = "From: $email";
        $mailSubject = "New Contact Form Submission: $subject";
        $mailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

        // Send the email
        $mailResult = mail($to, $mailSubject, $mailBody, $headers);

        if ($mailResult) {
            // Email sent successfully, redirect with success message
            header("Location: index.html?status=success");
            exit();
        } else {
            // Email failed to send, redirect with error message
            header("Location: index.html?status=error&reason=email");
            exit();
        }
    } else {
        // Redirect back to the form with an error message (missing or invalid fields)
        header("Location: index.html?status=error&reason=validation");
        exit();
    }
}
?>
