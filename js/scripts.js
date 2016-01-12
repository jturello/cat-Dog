$(document).ready(function() {
  $("button#cat").click(function() {
    $("img#cat").after('<p class="Meow init">Meeoooww!</p>');
    $("img#dog").after('<p class="Scooby">Ruhroh!!</p>');
    });

  $("button#dog").click(function() {
    $("img#dog").after('<p class="Arf init">Arf arf!</p>');
    $("img#cat").after('<p class="Garfield">Hisssssss</p>');
    });

  });
