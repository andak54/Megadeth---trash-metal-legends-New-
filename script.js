$(document).ready(function () {
  let isOpen = false;

  // Кнопка меню
  $("#menu-btn").on("click", function () {
    if ($(window).width() <= 1000) {
      if (!isOpen) {
        $("#menu").css("display", "flex").hide().fadeIn(300);
      } else {
        $("#menu").fadeOut(300, function () {
          $(this).css("display", "none");
        });
      }
      isOpen = !isOpen;
    }
  });

  // Адаптив при ресайзі
  $(window).on("resize", function () {
    if ($(window).width() > 1000) {
      $("#menu").css({ display: "flex", opacity: 1 });
      isOpen = false;
    } else if (!isOpen) {
      $("#menu").hide();
    }
  });

  // Плавна поява елементів
  $(".fade-in").each(function (index) {
    $(this).delay(index * 200).queue(function (next) {
      $(this).addClass("show");
      next();
    });
  });

  // Клік по фото → звук
  $("#dave-img").on("click", function () {
    const audio = $("#sound")[0]; // [0] бо jQuery повертає обʼєкт, а нам треба DOM-елемент
    if (audio && !audio.paused) audio.currentTime = 0;
    if (audio) audio.play();
    alert("watchhimbecamagawd");
  });

  // Випадаюче меню
  $("#albums-dropdown").hover(
    function () {
      $(this).find(".dropdown-content").addClass("show");
    },
    function () {
      $(this).find(".dropdown-content").removeClass("show");
    }
  );

  // Звук у відео
  $("#toggle-sound-btn").on("click", function () {
    const video = $("#bg-video")[0];
    if (video.muted) {
      video.muted = false;
      video.play().catch(() => {});
      $(this).text("Вимкнути звук");
    } else {
      video.muted = true;
      $(this).text("Увімкнути звук");
    }
  });
});
