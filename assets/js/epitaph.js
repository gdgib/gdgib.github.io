epitaphs = [ {
	before : "Before"
}, "after", "more" ]

function loadEpitaph(getElement) {
	var seconds = 60 * 10;
	var element;
	var after = null, margin = null;
	// Load or create (if forced or not present) a cookie which is keyed on
	// the "seconds" and "epitaphs.length" inputs
	// Return value is a random number in the range
	// [0,seconds*epitaphs.lenth)
	// Used to determine both an offset into the array, and which second of
	// the time block this browser should update epitaphs
	function loadCookie(force) {
		return null;
	}
	// Use the cookie and current time (divide by seconds) to index into the
	// array
	// Remove any prior epitaph element
	// Add in the epitaph element using innerHTML to allow formatting
	// Set the after and margin flags
	function setEpitaph(cookie) {
		// Math.floor
		// Math.random
		// parseInt

		// thing.parentNode
		// thing.nextSibling
		// thing.previousSibling
		// thing.insertBefore(new, existing)
		// thing.removeChild

		// thing.style.marginTop
		// thing.style.marginBottom

		// string.indexOf("before:") == 0
		// typeof epitaph === 'object'
		// typeof epitaph === 'string'
	}
	function changeEpitaph() {
		setEpitaph(loadCookie(true));
	}
	function createEpitaph() {
		element = getElement();
		element.onclick = changeEpitaph;
		setEpitaph(loadCookie(false));
	}
	body.onload = createEpitaph;
}