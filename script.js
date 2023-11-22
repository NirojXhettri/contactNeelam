
  /* paste this line in verbatim */
  window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
  /* customize formbutton below*/     
  formbutton("create", {
    action: "https://formspree.io",
    title: "How can Neelam help you?",
    fields: [
      { 
        type: "number", 
        label: "Number:", 
        name: "number",
        required: true,
        placeholder: "Enter your phone number"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind about bsc agriculture?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "pink"
      },
      button: {
        backgroundColor: "red"
      }
    },
            // Callback function for successful form submission
            onSuccess: function () {
                // Show the success message and hide the form
                document.getElementById("success-message").style.display = "block";
                document.querySelector("form").style.display = "none";
            },
            // Callback function for unsuccessful form submission
            onError: function (error) {
                // Show an error message based on the error response
                const errorMessage = document.getElementById("error-message");
                errorMessage.style.display = "block";
                errorMessage.textContent = error.message;
            }
        });

