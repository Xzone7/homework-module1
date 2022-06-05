$(document).ready(function() {
  $("#activities main tbody tr td:not(:first-child)").each(function() {
    if ($(this).text() !== "Not Available") {
      $(this).css({cursor: "pointer"});
      $(this).click(function() {
        $(this).toggleClass("activitiesCell");
      });
    }
  });
});