$(document).ready(function () {
  const quickUpdatesBtn = $("#quick-updates-btn");
  const quickUpdates = $(".quick-updates");
  const quickUpdatesContainer = $("#quick-updates-container");

  quickUpdatesBtn.click(function () {
    quickUpdates.slideToggle(500);
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(quickUpdatesContainer).length) {
      console.log("NOT-OK");
      quickUpdates.slideUp(500);
    }
  });
});
