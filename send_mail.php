<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    $to = "andrian.saviak.pp.2024@lpnu.ua"; // Куди приходять повідомлення
    $subject = "Нове повідомлення з форми";
    $body = "Ім'я: $name\nEmail: $email\n\nПовідомлення:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Повідомлення успішно відправлено!";
    } else {
        echo "Помилка при відправці повідомлення.";
    }
}
?>
