	  var j=0;
//to fetch old items from local storage
function fetchOld(){
  document.getElementById("myInput").focus();
	var i=0;
	console.log("loading all items from local storage");
	for(var x in localStorage){
		if(localStorage.getItem(x) ){
			if(localStorage.getItem(x) != 'Completed'){
					console.log(x+" "+localStorage.getItem(x));	
		populateEle(localStorage.getItem(x),i);
		i++;
			}
			else{
				localStorage.removeItem(x)
			}
	
		}

	}
	j=i;

}


// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByTagName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   myNodelist[i].appendChild(span);
// }

// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }

// Add a "checked" symbol when clicking on a list item
/*var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);*/

// Create a new list item when clicking on the "Add" button

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
 
  if (inputValue === '' ) {
    alert("You must write something!");
  } else {
  	 li.appendChild(t);
  	localStorage.setItem("Item "+j, inputValue);
  	j+1;
    document.getElementById("myol").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Close");
  span.className = "close";
  var att2 = document.createAttribute("onclick");      
          att2.value = "delTask("+j+");location.reload();";  
          span.setAttributeNode(att2); 

  span.appendChild(txt);
  li.appendChild(span);

  var span2 = document.createElement("SPAN");
     var att = document.createAttribute("onclick");      
          att.value = "populateEle(prompt('whats the edit'),"+j+");location.reload();";    
          span2.setAttributeNode(att);                    
  var txt2 = document.createTextNode("Edit");
  span2.className = "edit";
  span2.appendChild(txt2);
  li.appendChild(span2);


/*  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }*/
  location.reload()
}


function populateEle(data,index) {
  var inputValue = data;
 var li = document.createElement("li");
  var t = document.createTextNode(inputValue);
 
  if (inputValue === '' ) {
    alert("You must write something!");
  } else {
  	 li.appendChild(t);
  	localStorage.setItem("Item "+index, inputValue);
  	j+1;
    document.getElementById("myol").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Close");
  span.className = "close";
  var att2 = document.createAttribute("onclick");      
          att2.value = "delTask("+index+");location.reload();";   
          span.setAttributeNode(att2); 

  span.appendChild(txt);
  li.appendChild(span);

  var span2 = document.createElement("SPAN");
     var att = document.createAttribute("onclick");      
          att.value = "populateEle(prompt('whats the edit'),"+index+");location.reload();";    
          span2.setAttributeNode(att);                    
  var txt2 = document.createTextNode("Edit");
  span2.className = "edit";
  span2.appendChild(txt2);
  li.appendChild(span2);


/*  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }*/
}


function delTask(index){
		localStorage.removeItem("Item "+index)
  	//localStorage.setItem("Item "+index, 'Completed');
}