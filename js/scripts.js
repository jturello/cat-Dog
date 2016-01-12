$(document).ready(function() {
  $("button#cat").click(function() {
    $("img#cat").after("<p>Hello!</p>");
    });

    $("button#cat").click(function() {
      $("ul").prepend("<li>Hello!</li>");
    });

  });
