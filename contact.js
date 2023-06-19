document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter Task Name!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}



  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


  $(document).ready(function () {
			
    $('#cimg').fadeIn(5000, function () {
            $('#msgDiv').append(' ')
        });

});



// $(document).ready(function(){
//     $("button").click(function(){
//       $('#i1').animate({
//         left: '250px',
//         height: '+=150px',
//         width: '+=150px'
//       });
//     });
//   });


$(document).ready(function(){

    $(".animation").mouseover(function(){
       $(this).animate({
                          height:'200px',
                          width:'200px',
                          left : '-11px'
                        })
                                });
    
    $(".animation").mouseout(function(){
       $(this).animate({
                          height:'178px',
                          width:'178px',
                          left : '0px'
                        })
                                });
    
    });

    $(".contactbody").mouseover(function() {
        $(this).animate({ backgroundColor: "olive" }, "slow");
    });