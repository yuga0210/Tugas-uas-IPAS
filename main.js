document.addEventListener("DOMContentLoaded", function () {
  // Function to show the notification

  function showNotification() {
    var notification = document.getElementById("notification");
    notification.style.display = "block";
  }
  //function to close the notification
  window.closeNotification = function () {
    var notification = document.getElementById("notification");
    notification.style.display = "none";
  };
  // show the notification after a slight delay (e.g., 1.second)
  setTimeout(showNotification, 1000);
});
