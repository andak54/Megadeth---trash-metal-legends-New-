// Чекаємо, поки DOM повністю завантажиться
$(document).ready(function () {
  let isOpen = false; // стан меню (відкрите/закрите)

  // Кнопка бургер-меню
  $("#menu-btn").on("click", function () {
    if ($(window).width() <= 1000) { // працює тільки на малих екранах
      if (!isOpen) { 
        // Відкриваємо меню: спочатку ховаємо, потім плавно показуємо
        $("#menu").css("display", "flex").hide().fadeIn(300);
      } else {
        // Закриваємо меню: плавно зникає, потім приховується повністю
        $("#menu").fadeOut(300, function () {
          $(this).css("display", "none");
        });
      }
      isOpen = !isOpen; // міняємо стан
    }
  });

  // Адаптив при зміні розміру вікна
  $(window).on("resize", function () {
    if ($(window).width() > 1000) {
      // На великих екранах меню завжди показане
      $("#menu").css({ display: "flex", opacity: 1 });
      isOpen = false;
    } else if (!isOpen) {
      // Якщо малий екран і меню закрите, ховаємо його
      $("#menu").hide();
    }
  });

  // Плавна поява елементів з класом .fade-in
  $(".fade-in").each(function (index) {
    $(this).delay(index * 200).queue(function (next) {
      $(this).addClass("show"); // додаємо клас для CSS-анімації
      next(); // рухаємося до наступного елементу в черзі
    });
  });

  // Клік по фото → відтворення звуку
  $("#dave-img").on("click", function () {
    const audio = $("#sound")[0]; // отримуємо DOM-елемент аудіо
    if (audio && !audio.paused) audio.currentTime = 0; // скидаємо на початок
    if (audio) audio.play(); // відтворюємо звук
    alert("watchhimbecamagawd"); // повідомлення
  });

  // Випадаюче меню при наведені
  $("#albums-dropdown").hover(
    function () {
      $(this).find(".dropdown-content").addClass("show"); // показати меню
    },
    function () {
      $(this).find(".dropdown-content").removeClass("show"); // сховати меню
    }
  );

  // Кнопка для увімкнення/вимкнення звуку відео
  $("#toggle-sound-btn").on("click", function () {
    const video = $("#bg-video")[0]; // DOM-елемент відео
    if (video.muted) {
      video.muted = false; // увімкнути звук
      video.play().catch(() => {}); // на випадок блокування браузером
      $(this).text("Вимкнути звук"); // змінюємо текст кнопки
    } else {
      video.muted = true; // вимкнути звук
      $(this).text("Увімкнути звук"); // змінюємо текст кнопки
    }
  });
});

// Калькулятор валют (USD → UAH)
const rate = 40; // умовний курс USD→UAH
document.getElementById('convert').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value); // отримуємо суму
  const result = document.getElementById('result'); // елемент для виводу
  if (!isNaN(amount) && amount > 0) {
    // правильна сума → показуємо результат
    result.textContent = `${amount} USD ≈ ${(amount * rate).toFixed(2)} UAH`;
  } else {
    // неправильне значення
    result.textContent = "Будь ласка, введіть правильну суму";
  }
});
