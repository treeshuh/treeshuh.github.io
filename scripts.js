projects = {
    'boba4.me' : {
        status: "ACTIVE at <a href='http://boba4.me' target='_blank'>boba4.me</a>! Create a room to start collecting orders,"
        + "and direct your friends to boba4.me/&lt;room number&gt; to collect their orders.",
        tc: "Summer 2016 with <a href='https://github.com/asipser' target='_blank'>asipser</a>. Made with Meteor, Blaze, and Less.",
        purpose: "We made this app for our friends at MIT who always want boba. We used to use a group chat, but this was "
            + "really unorganized, especially since people liked to change their orders and spam about non-order related things. "
            + "This site makes it easy to collect orders and keep track of which ones have been placed."
    },
    'next poke' : {
        status: "ACTIVE at <a href='http://ketchum.mit.edu/welcome' target='_blank'>ketchum.mit.edu</a>! Or you can scan the QR code!",
        tc: "March 2014 with <a href='https://github.com/maplenormandy' target='_blank'>maplenormandy</a>, "
            + "iterated on in Spring/Summer 2015 and 2016 with maplenormandy and <a href='https://github.com/lahuang4' target='_blank'>lahuang4</a>."
            + " Made with node.js, Handlebars.js, and Python.",
        purpose: "Next Poke started out as a fun 'Wouldn't it be funny if we could run around and catch Pokemon?' project, "
            + "and turned into a Pokemon themed way to encourage freshmen and potential students to explore our dorm during "
            + "resident exploration (REX) and campus preview weekend (CPW)."
    },
    'karaoke' : {
        status: "ACTIVE. You can go to <a href='http://next-bake.mit.edu/karaoke-player.html' target='_blank'>the admin page</a> to make a new session, "
            + "then go to <a href='http://next-bake.mit.edu/karaoke.html' target='_blank'>the participant page</a> to add songs. "
            + "The host can then play the songs, and the participants can see the progress through the list.",
        tc: "March 2015. Made with Firebase, React.js, and the Youtube API",
        purpose: "What does baking have to do with karaoke? It turns out, the Next Bake Mixer, an event where we baked cupcakes and had karaoke, "
            + "was our club's most popular event of the year. The karaoke app makes it easier for people to queue their own songs, so club members "
            + "can focus more on singing."
    },
    'game web' : {
        status: "PUBLISHED. This was an intermediary project. The full exploration and paper is published in "
            + "<a href='http://press-start.gla.ac.uk/index.php/press-start/issue/view/3' target='_blank'>Press Start Vol 3</a>. ",
        tc: "Jan-July 2014 with B. Tambasco under <a href='http://cmsw.mit.edu/profile/mikael-jakobsson' target='_blank'>M. Jakobsson</a>. "
            + "Made with pattern.js",
        purpose: "Co-located games come in many varieties. This project tried to find a relationship between them by connecting games with similar "
            + "traits in an interactive web. We then used this web to identify traits that are common and traits that are underexplored. We then "
            + "took one of these underexplored mechanics, the hidden benefactor, and made a proof of concept board game."
    },
    'shine' : {
        status: "INACTIVE. Won Honorable mention in the <a href='http://6.470.scripts.mit.edu/2014/' target='_blank'> 2014 6.470 Web Programming Competition<a/>.",
        tc: "January 2014 with <a href='https://github.com/dyhwong' target='_blank'>dyhwong</a> and <a href='https://github.com/rliu42' target='_blank'>rliu42</a>. "
            + "Made with node.js, WebRTC, HTML canvas, lightboard.js",
        purpose: "My first web project, made for the 6.140 Competition. We wanted to create a game that combined the fun and interactiveness of Wii games like "
            + "Dance Central, with the portability and inexpensiveness of web cam technology. Gameplay: graphics appear on your screen, overlayed on top of a video "
            + "from your webcam. Shine a light at your screen to hit the blue dots, and avoid the red dots!"
    }
}


function scrollTo(element, to, duration) {
    if (duration <= 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 10;

    setTimeout(function() {
        element.scrollTop = element.scrollTop + perTick;
        if (element.scrollTop === to) return;
        scrollTo(element, to, duration - 10);
    }, 5);
}

function setProject(e, name) {
    var proj = projects[name];
    document.getElementsByClassName("status")[0].children[1].innerHTML = proj.status;
    document.getElementsByClassName("tc")[0].children[1].innerHTML = proj.tc;
    document.getElementsByClassName("purpose")[0].children[1].innerHTML = proj.purpose;
    if (e) {
        document.getElementsByClassName("selected-li")[0].classList.remove("selected-li");
        e.className += "selected-li";
    }
}


window.onload = function() {
	document.getElementById("projectsLink").onclick = function(e) {
		e.preventDefault();
		scrollTo(document.body, window.innerHeight, 1000);
	}

    setProject(null, 'boba4.me');
}
