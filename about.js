function myFunction() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  }

  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });


  
  $(document).ready(function () {
			
    $('#cimg').fadeIn(5000, function () {
            $('#msgDiv').append(' ')
        });

});
