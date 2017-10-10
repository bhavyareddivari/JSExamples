//https://jsfiddle.net/bhavyareddivari/fntvvt7j/

var tab1 = document.getElementById('tabOne');
var tab2 = document.getElementById('tabTwo');
var content = document.getElementById('content');
 
 // add event listener 
var tabsHolder = document.getElementById("tabsHolder");
tabsHolder.addEventListener("click", modifyContent);

// default tab
window.addEventListener("load", function(event) {
    firstTabContent();
  });   

function firstTabContent() {
	content.innerHTML = 'First tab';
}

function secondTabContent() {
	content.innerHTML = 'Second tab';
}

// Function to change the content 
function modifyContent(e) {
	if (e.target.id === 'tabOne') {
		firstTabContent();
  } 
  if (e.target.id === 'tabTwo') {
  	secondTabContent();
  }
}



    
