epitaphs = [
        "before:Before",
        "after"
]

function loadEpitaph(getElement) {
        var seconds = 60 * 10;
        var element;
        var after = null, margin = null;
        // Load or create (if forced or not present) a cookie which is keyed on the "seconds" and "epitaphs.length" inputs
        // Return value is a random number in the range [0,seconds*epitaphs.lenth)
        // Used to determine both an offset into the array, and which second of the time block this browser should update epitaphs
        function loadCookie(force) {
        }
        // Use the cookie and current time (divide by seconds) to index into the array
        // Remove any prior epitaph element
        // Add in the epitaph element using innerHTML to allow formatting
        // Set the after and margin flags
        function setEpitaph(cookie) {
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