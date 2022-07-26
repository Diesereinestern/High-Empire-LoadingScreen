

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/he.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "High Empire";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/pic1.jpg",
	"backgrounds/images/pic2.jpg",
	"backgrounds/images/pic3.jpg",
	"backgrounds/images/pic4.jpg",
	"backgrounds/images/pic5.jpg",
	"backgrounds/images/pic6.jpg",
	"backgrounds/images/pic7.jpg",
	"backgrounds/images/pic8.jpg",
	"backgrounds/images/pic9.jpg",
	"backgrounds/images/pic10.jpg",
	"backgrounds/images/pic11.jpg",
	"backgrounds/images/pic12.jpg",
	"backgrounds/images/pic13.jpg",
	"backgrounds/images/pic14.jpg",
	"backgrounds/images/pic15.jpg",
	"backgrounds/images/pic16.jpg",
	"backgrounds/images/pic17.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 8000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 1000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{ogg: "songs/Star Wars Imperial March (1 hour).ogg", name: "Imperial March"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 95;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"<span class='yeet2'>Wir wünschen dir viel Spaß auf dem Server!</span>",
"<span class='yeet2'>Ein paar Star Wars Fun-Facts wurden im Ladebildschirm eingebaut um dir die Wartezeit zu verschönern ^^</span>",
"<span class='yeet2'>Fun-Fact #1: Mark Hamill erhielt für die Rolle des Luke Skywalker 1000 Dollar pro Woche.</span>",
"<span class='yeet2'>Fun-Fact #2: Das ursprüngliche Konzeptmodell des Millennium-Falken war lang und <br><br> zylindrisch, ganz im Gegensatz zu dem flachen Design, das wir heute kennen. </span>",
"<span class='yeet2'>Fun-Fact #3: Die meisten amerikanischen Kinos scheuten sich anfangs, Star Wars zu zeigen.</span>",
"<span class='yeet2'>Fun-Fact #4: George Lucas finanzierte <em>'Das Imperium schlägt zurück'</em> zunächst selbst.</span>",
"<span class='yeet2'>Fun-Fact #5: In frühen Entwürfen des Drehbuchs hieß Yoda eigentlich 'Buffy', was in späteren Entwürfen<br><br> vollständig in den vollen Namen 'Minch Yoda' geändert und dann auf Yoda verkürzt wurde.</span>",
"<span class='yeet2'>Fun-Fact #6: Im echten Leben würde Darth Vaders Anzug etwa 18,3 Millionen Dollar kosten.</span>",
"<span class='yeet2'>Fun-Fact #7: Beim ersten Treffen von R2-D2-Erfinder Tony Dyson mit George Lucas ging es um Hamburger und Flugzeuge.</span>",
"<span class='yeet2'>Fun-Fact #8: George Lucas dachte an eine Abwandlung von Invasor('Invader'), als er sich den Namen Vader ausdachte.</span>",
"<span class='yeet2'>Fun-Fact #9: Das wohl berühmteste Zitat im Star Wars Universum ist auch das am meisten falsch zitierte.</span>",
"<span class='yeet2'>Fun-Fact #10: Es waren bis zu sieben verschiedene Puppenspieler nötig, um Jabba den Hutten darzustellen.</span>",
"<span class='yeet2'>Fun-Fact #11: Die Verfolgungsjagd zwischen Luke, Leia und einer Gruppe von Scout Troopers auf Endor,<br><br> wurde im Redwood State Park in der Nähe von Eureka, Kalifornien, gedreht, der kurz vor der Abholzung stand.</span>",
"<span class='yeet2'>Fun-Fact #12: Qui-Gon Jinns Kommunikator ist eigentlich ein Damenrasierer.</span>",
"<span class='yeet2'>Fun-Fact #13: Weder für Angriff der Klonkrieger noch für die übrigen Vorgängerfilme wurden<br><br> physische Klontruppen-Kostüme angefertigt, jedes einzelne ist eine digital gerenderte CGI-Kreation.</span>",
"<span class='yeet2'>Fun-Fact #14: Peter Mayhews Größe half ihm bei der Besetzung der Rolle des Chewbacca.</span>",
"<span class='yeet2'>Fun-Fact #15: Das Erwachen der Macht ist gespickt mit prominenten Gastauftritten, die ihr wahrscheinlich nicht bemerkt haben.</span>",
"<span class='yeet'>Kennst du schon unseren Discord? Nein?? <br><br>Unseren Discord findest du hier: <strong><a class='cyan' href='https://discord.gg/ZTYZVYTt'>https://discord.gg/ZTYZVYTt</a></strong></span>"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 8000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
