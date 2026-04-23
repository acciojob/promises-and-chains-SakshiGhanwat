//your JS code here. If required.
 const form = document.getElementById("form");

    form.addEventListener("submit", function(e) {
      e.preventDefault(); // prevent page reload

      const age = document.getElementById("age").value;
      const name = document.getElementById("name").value;

      // Validation
      if (age === "" || name === "") {
        alert("Please enter valid details.");
        return;
      }

      // Promise logic
      const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);
      });

      // Handle promise
      checkAge
        .then((message) => {
          alert(message);
        })
        .catch((error) => {
          alert(error);
        });
    });