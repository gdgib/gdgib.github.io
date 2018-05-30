epitaphs = [
	"A Delaware S-corporation",
	"Does not play well with others",
	"The fun will now commence",
	{ "before": "Neither new nor improved" },
	{ "after": "More thing for your thing", "aftertip": "AT&T marketing did not think this slogan through..." },
	"Guaranteed not to turn pink in the can",
	"An outside joke",
	"A fragile bloom",
	"Do not use if seal is broken",
	"A trackless mind",
	"A wonderful part of life&apos;s rich pageant",
	{ "after": "Handsome in an ugly sort of way", "aftertip": "Tom Lehrer is a genius" },
	"An action packed thrill ride",
	"Transmitido en Espanol en SAP",
	{ "after": "Beaten to death with his own lecture slides", "aftertip": "The joys of teaching EECS150 to 100 eager students all fueled by hatred and caffeine."},
	"A Tour de Farce",
	"Don&apos;t look directly at him",
	"The last pasty white nerd",
	"Both sly and fly",
	{ "after": "I rock the cowgirl blues", "aftertip": "Motion City Soundtrack - The Future Freaks Me Out"},
	{ "after": "I rock the Haro Sport", "aftertip": "Motion City Soundtrack - The Future Freaks Me Out"},
	{ "after": "What&apos;s up with Will and Grace?", "aftertip": "Motion City Soundtrack - The Future Freaks Me Out"},
	{ "after": "The 32nd flavor of ice cream", "aftertip": "Eat your heart out Baskin Robbins" },
	"Addicted to dihydrogen monoxide",
	"Depriving students of sleep since &apos;03",
	"Master of squirrels",
	"Delicious with chocolate sprinkles",
	"You know you want a slice",
	"The TA formerly known as &quot;Amy&quot;",
	{ "after": "My duck appears to be crooked", "aftertip": "With apologies to Nicole B. wherever she's gone in the world" },
	"Silence of the clams",
	{ "after": "Llama Whippin&apos; Good", "aftertip": "Remember WinAMP? Anyone? No? I'm really that old, huh?" },
	"Fruity yet tangy",
	"You can&apos;t live without him",
	"Your night in a shining armoire",
	{ "before": "And now for something completely inappropriate" },
	"A toilet brush in his next life",
	"Proud monger of the world&apos;s supply of stupid",
	"A theater of cruelty",
	{ "after": "A regular guest star on blossom", "aftertip": "Less funny now that Mayim Bialik is on Big Bang Theory." },
	{ "after": "Synthesized from 100% natural Verilog", "aftertip": "Just kidding there's nothing natural about Verilog." },
	"Cute and fluffy",
	{ "after": "Neither a llama, nor a tuna", "aftertip": "With apologies to Nicole and Arlo wherever they are" },
	"Sexy in a tiara",
	{ "after": "Not a pygmy marmoset", "aftertip": "This may be the only true epitaph on here." },
	"The third Wondertwin",
	"Just a test of the emergency stupid system",
	{ "after": "Irresistable in a tangerine speedo", "aftertip": "Caviar - Tangerine Speedo" },
	{ "after": "Proud spokesman for Sporkle", "aftertip": "Nibbler? Leela? Futurama? Nothing? Okay, you people have to remember TV, right?" },
	"Enjoying insanity",
	"A pop diva",
	"Phoney like baloney",
	{ "after": "Just don&apos;t ask", "aftertip": "Seriously, we told you not to ask." },
	"Smooth as gravel",
	{ "after": "The other other white meat", "aftertip": "On the list of white meats, I might actually be 6 or 7 down, somewhere after squid." },
	"The almost cheese but not quite",
	"A special kind of stupid",
	"Herding pink elephants",
	"You know you want some",
	{ "after": "The t*** fairy", "aftertip": "With thanks to Nicole B." },
	"A beer swilling tube jockey",
	"Checkmate, suckers",
	"Cultured, like a petri dish",
	"15 minutes of shame",
	"The zit on your forehead",
	"Just a love machine",
	"A universal constant",
	"A witty rejoinder",
	"Winners don&apos;t wear rugs",
	{ "after": "Buggering hedgehogs since &apos;79", "aftertip": "c.f. Nanny Ogg in any Terry Pratchett book, and if you don't get the reference, I don't want to know you anymore. You used to be cool." },
	"A disco inferno",
	"A swift kick in the a**",
	"Deep fried to perfection",
	"Your blind date",
	"A two leaf clover",
	"Died the way he was born: naked and screaming",
	"Just a henchmen",
	"Your biggest fan",
	"Circling the drain",
	"Your sidekick",
	"Shave the whales",
	"Occam&apos;s shaving cream",
	"Invading your brain",
	{ "after": "Made from 100% Real Beef&trade;", "aftertip": "Am I the only one who gets a little worried when normal expressions have capitalization and trademarks? Is that just because of Sable's food company in Good Omens?" },
	"Sharp as a pillow",
	"A mouthful",
	"Gettin the party started",
	"An optional evil",
	"Delivered fresh daily",
	"Best hot dog in the known universe",
	"The rhythm already got him",
	"Serving steaming fresh pages",
	"&lt;INSERT HILARIOUS EPITAPH HERE&gt;",
	"Relax this will only hurt a little...",
	"An ethical conundrum",
	"Armageddon in a delicious 5&apos;11&quot; package",
	"Save the drama for yo mama",
	"Verilog ninja",
]
// { "after": 
// "aftertip": "" },

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
				while (cookie.charAt(0) == ' ') cookie = cookie.substring(1);
				if (cookie.indexOf(prefix) == 0) {
					var components = cookie.substring(prefix.length, cookie.length).split('_');
					if ((components.length == 2) && (parseInt(components[0]) == product)) return parseInt(components[1]);
				}
			}
		}

		var value = Math.floor(Math.random() * product);
		document.cookie = prefix + product + "_" + value + ";path=/";
		return value;
	}
	// Remove any prior epitaph element. Add in the epitaph element using
	// innerHTML to allow formatting. Set the state flags.
	function epitaphBefore(epitaph, tip) {
		var created = document.createElement("div");
		created.innerHTML = epitaph;
		if (tip != null) created.title = tip;
		element.parentNode.insertBefore(created, element);
		marginTop = element.style.marginTop;
		element.style.marginTop = "0px";
	}
	function epitaphAfter(epitaph, tip) {
		var created = document.createElement("div");
		created.innerHTML = epitaph;
		if (tip != null) created.title = tip;
		element.parentNode.insertBefore(created, element.nextSibling);
		marginBottom = element.style.marginBottom;
		element.style.marginBottom = "0px";
	}
	// Use the cookie and current time (divide by seconds) to index into the
	// array.
	function setEpitaph(cookie) {
		if (element == null) return;

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
			if ('before' in epitaph) epitaphBefore(epitaph['before'], ('beforetip' in epitaph) ? epitaph['beforetip'] : null);
			if ('after' in epitaph) epitaphAfter(epitaph['after'], ('aftertip' in epitaph) ? epitaph['aftertip'] : null);
		} else if (typeof epitaph === 'string') epitaphAfter(epitaph);
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
