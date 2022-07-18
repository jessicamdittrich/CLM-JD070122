$(document).ready(function () {
  $("#submit-button").click(function () {
    var name = $("#full-name").val();
    var email = $("#email").val();
    var occasion = $("#occasion").val();
    var location = $("#location").val();
    $("#return-message").empty(); // To empty previous error/success message.
    // Checking for blank fields.
    if (name == "" || email == "") {
      alert("Please Fill Required Fields");
    } else {
      // Returns successful data submission message when the entered information is stored in database.
      $.post(
        "contact_form.php",
        {
          name1: name,
          email1: email,
          occasion1: occasion,
          location1: location,
        },
        function (data) {
          $("#return-message").append(data); // Append returned message to message paragraph.
          if (
            data == "Your Query has been received, We will contact you soon."
          ) {
            $("#form")[0].reset(); // To reset form fields on success.
          }
        }
      );
    }
  });
});
