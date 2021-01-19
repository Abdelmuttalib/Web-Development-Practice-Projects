var button = document.getElementById('button');
var todoDiv = document.getElementById('todo');
button.addEventListener('click', doK, false);

function doK(){
  event.preventDefault;
var input = document.getElementById('input').value;
if(input == ""){
    alert("Enter To Do Item");
    return;
}



var span = document.createElement('span');
span.innerText = input;
todoDiv.appendChild(span);


    // DONE FUNCTION
var done = document.createElement('button');
  span.appendChild(done);
  done.className = "icons";
  done.id = "done";
  done.innerHTML = "&#10004"; // By Dec value
  done.addEventListener('click', function(){
      alert("KAFOO");
  });

var remove = document.createElement('button');

span.appendChild(remove);
remove.className = "icons";
remove.id = "remove";
remove.innerHTML = "&#x2716"; // By Hex Value // need x
    // REMOVE FUNCTION
remove.addEventListener('click', function(){
    todoDiv.removeChild(span);
    todoDiv.removeChild(done);
    todoDiv.removeChild(remove);
})

}

var selectSpan = document.getElementsByTagName('span');
var clear = document.getElementById('clear');
clear.addEventListener('click', clearList, false);
function clearList(){
  event.preventDefault;
    for(var i = selectSpan.length - 1; i >= 0; i--){
      selectSpan[i].remove();
    }
}
