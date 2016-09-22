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
            + "Made with node.js, Handlebars.js, and Python.",
        purpose: "Next Poke started out as a fun 'Wouldn't it be funny if we could run around and catch Pokemon?' project, "
            + "and turned into a Pokemon themed way to encourage freshmen and potential students to explore our dorm during "
            + "resident exploration (REX) and campus preview weekend (CPW)."
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
