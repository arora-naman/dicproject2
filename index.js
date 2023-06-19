function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }

  $(document).ready(function () {
			
    $('#myDiv').fadeIn(5000, function () {
            $('#msgDiv').append(' ')
        });

});


$(document).ready(function(){
    $("button").click(function(){
      $('#inc').animate({
        left: '250px',
        height: '+=150px',
        width: '+=150px'
      });
    });
  });

  $(document).ready(function(){
    $('#gender').blur(function(){
      alert("This input field has lost its focus.");
    });
  });
