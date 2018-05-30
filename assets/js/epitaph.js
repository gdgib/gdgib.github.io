epitaphs = [ {
	before : "Before"
}, "after", "more", {
	"before" : "1",
	"after" : "<a href=\"http://google.com/\">google</a>"
} ]

function loadEpitaph(getElement) {
	var seconds = 60 * 10; // Unless the user clicks, we'll show a new epitaph to them ever 10min, no matter how often they load the page
	var element = null;
	var marginTop = null, marginBottom = null;
	// Load or create (if forced or not present) a cookie which is keyed on
	// the "seconds" and "epitaphs.length" inputs. Return value is a random
	// number in the range [0,seconds*epitaphs.lenth). This will be used to
	// determine both an offset into the array, and which second of the time
	// block this browser should update epitaphs
	function loadCookie(force) {
		var prefix = "epitaph=";
		var product = epitaphs.length * seconds;

		if (!force) {
			var array = decodeURIComponent(document.cookie).split(';');
			for (var i = 0; i < array.length; i++) {
				var cookie = array[i];
				while (cookie.charAt(0) == ' ')
					cookie = cookie.substring(1);
				if (cookie.indexOf(prefix) == 0) {
					var components = cookie.substring(prefix.length,
							cookie.length).split('_');
					if ((components.length == 2)
							&& (parseInt(components[0]) == product)) {
						return parseInt(components[1]);
					}
				}
			}
		}

		var value = Math.floor(Math.random() * product);
		document.cookie = prefix + product + "_" + value + ";path=/";
		return value;
	}
	// Remove any prior epitaph element. Add in the epitaph element using
	// innerHTML to allow formatting. Set the state flags.
	function epitaphBefore(epitaph) {
		var created = document.createElement("div");
		created.innerHTML = epitaph;
		element.parentNode.insertBefore(created, element);
		marginTop = element.style.marginTop;
		element.style.marginTop = "0px";
	}
	function epitaphAfter(epitaph) {
		var created = document.createElement("div");
		created.innerHTML = epitaph;
		element.parentNode.insertBefore(created, element.nextSibling);
		marginBottom = element.style.marginBottom;
		element.style.marginBottom = "0px";
	}
	// Use the cookie and current time (divide by seconds) to index into the
	// array.
	function setEpitaph(cookie) {
		if (element == null) {
			return;
		}

		if (marginTop != null) {
			element.style.marginTop = marginTop;
			element.parentNode.removeChild(element.previousSibling);
			marginTop = null;
		}
		if (marginBottom != null) {
			element.style.marginBottom = marginBottom;
			element.parentNode.removeChild(element.nextSibling);
			marginBottom = null;
		}

		var timeInSeconds = new Date().getTime() / 1000;
		var timeOffset = cookie % seconds;
		var timeIndex = Math.floor((timeInSeconds + timeOffset) / seconds);
		var cookieIndex = Math.floor(cookie / seconds);
		var index = (timeIndex + cookieIndex) % epitaphs.length;
		var epitaph = epitaphs[index];

		if (typeof epitaph === 'object') {
			if ('before' in epitaph) {
				epitaphBefore(epitaph['before']);
			}
			if ('after' in epitaph) {
				epitaphAfter(epitaph['after']);
			}
		} else if (typeof epitaph === 'string') {
			epitaphAfter(epitaph);
		}
	}
	function changeEpitaph() {
		setEpitaph(loadCookie(true));
	}
	function createEpitaph() {
		element = getElement();
		element.addEventListener("click", changeEpitaph, false);
		setEpitaph(loadCookie(false));
	}
	return createEpitaph;
}
