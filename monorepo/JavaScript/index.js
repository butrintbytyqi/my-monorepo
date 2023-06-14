    // Function to shuffle the order of checkbox inputs
    function shuffleValues() {
        var form = document.getElementById("myForm");
        var checkboxes = form.querySelectorAll('input[type="checkbox"]');
        var checkboxesArray = Array.from(checkboxes);
  
        checkboxesArray.sort(function () {
          return 0.5 - Math.random();
        });
  
        checkboxesArray.forEach(function (checkbox) {
          form.appendChild(checkbox.parentNode);
        });
      }
  
      // Function to change the values of the checkbox inputs
      function changeValues() {
        var checkboxes = document.getElementsByName("checkbox");
        checkboxes.forEach(function (checkbox) {
          checkbox.value = "New Value";
        });
      }
  
      // Function to display the selected checkboxes
      function showSelectedValues() {
        var checkboxes = document.getElementsByName("checkbox");
        var selectedValues = [];
  
        checkboxes.forEach(function (checkbox) {
          if (checkbox.checked) {
            selectedValues.push(checkbox.value);
          }
        });
  
        var outputDiv = document.getElementById("output");
        outputDiv.textContent = "Selected Values: " + selectedValues.join(", ");
      }