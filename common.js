function hamburgerFunction() {
    var x = document.getElementById("navigation_bottom");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.getElementById('new_item1').remove();
        document.getElementById('new_item2').remove();
        document.getElementById('darken').removeEventListener('click', hamburgerFunction);
        document.getElementById('darken').remove();
        document.getElementById('sticky_nav').classList.remove('animate-slide-down');
    } else {
        x.style.display = "block";
        var contactUs = document.createElement('li');
        contactUs.setAttribute('class', 'navbar_item');
        contactUs.setAttribute('id', 'new_item1');
        var a1 = document.createElement('a');
        a1.innerText = "Contact Us";
        a1.setAttribute('href', "contactform.html");
        document.getElementById('navbar_bottom').appendChild(contactUs);
        document.getElementById('new_item1').appendChild(a1);
        var BookAStay = document.createElement('li');
        BookAStay.setAttribute('class', 'navbar_item');
        BookAStay.setAttribute('id', 'new_item2');
        var a2 = document.createElement('a');
        a2.innerText = "Book a Stay";
        a2.setAttribute('href', "roombooking.html");
        document.getElementById('navbar_bottom').appendChild(BookAStay);
        document.getElementById('new_item2').appendChild(a2);
        var overlay = document.createElement('div');
        overlay.setAttribute('id', 'darken');
        document.body.appendChild(overlay);
        overlay.addEventListener('click', hamburgerFunction);
        document.getElementById('sticky_nav').classList.add('animate-slide-down');
    }
}

function handleResize() {
    var y = document.getElementById("navigation_bottom");
    if (window.innerWidth >= 768) {
        y.style.display = "flex";
    }
    else {
        y.style.display = "none";
        var i = document.getElementById("new_item1");
        if (i != null) {
            i.remove();
        }
        var j = document.getElementById("new_item2");
        if (j != null) {
            j.remove();
        }
        var k = document.getElementById('darken');
        if (k != null) {
            k.removeEventListener('click', hamburgerFunction);
            k.remove();
        }
        document.getElementById('sticky_nav').classList.remove('animate-slide-down');
    }
}

window.addEventListener('resize', handleResize);