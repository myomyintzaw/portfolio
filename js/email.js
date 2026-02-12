
  (function () {
  emailjs.init("wnN1OHZx0re5G-7qb"); // 🔑 Public Key
})();

 
document.getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_2poys7d",   // 📩 Service ID
      "template_ivg6yyj",  // 🧾 Template ID
      this
    ).then(
      function () {
        document.getElementById("status").innerText =
          "✅ Message sent successfully!";
          status.style.color = "green";
          status.style.fontWeight = "bold";
          status.style.animation = "fadeIn 0.5s ease";
        document.getElementById("contact-form").reset();
          //  alert("hello world");
      },

      function (error) {
        document.getElementById("status").innerText =
          "❌ Failed to send message!";
        console.log(error);
      }
    );
  });

