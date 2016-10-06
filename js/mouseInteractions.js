
/*
 * Namespace your functions to keep them out of the global space.
*/
var mouseInteractions = function(){
	var $interactiveElement = $('.js-mouse-interaction');

	var $mousePositionElement = $('.js-mouse-coord');
	var $fadeImage = $('.js-fade-in');

	// Binding an event handler to an element using jQuery:
	$interactiveElement.mousemove(mouseMoved);

	// Selecting elements using core Javascript

	// Same as $interactiveElement:
	// Note that the document.getElementsByClassName returns an array so we have to select
	// its first element by using index [0]
	//var interactiveElementsArray = document.getElementsByClassName('js-mouse-interaction')[0];

	// Same as $mousePositionElement but using the element's ID:
	var textFieldElement = document.getElementById('avoidIDs');
	// selecting an element in jquery using an ID: $('#avoidIDs')

	// Adding event listeners in core Javascript:
	//interactiveElementsArray.addEventListener('mousemove', mouseMoved);

	// Event handler for mouse moved event. It doesn't care if it's attached to the 
	// DOM element using jQuery or core JS:
	function mouseMoved(event) {
		$mousePositionElement.text('mouse position' + event.pageX + ", " + event.pageY);
		// using core JS:
		// textFieldElement.innerHTML += 'mouse position' + event.pageX + ", " + event.pageY;

		$fadeImage.css('opacity', event.pageY * 0.001);
		// using core JS:
		//document.getElementsByClassName('js-fade-in')[0].style.opacity = event.pageY * 0.001;
	}
};

/*
 * Our function gets called only when the browser is ready to execute it
*/
$(document).ready(function(){
	mouseInteractions();
});