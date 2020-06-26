var submit = document.getElementById('submit')
var display = document.getElementById('display')
var note = document.getElementById('note')


function calculate() {

    var name = document.getElementById('name').value
    var pname = document.getElementById('pname').value

    var r = Math.floor(Math.random() * 101)

    if (name === "" || pname === "") {

        alert("enter both the names")
    } else {
        if (r < 10) {
            note.innerHTML = "Go and enjoy ur life man"
            display.innerHTML = r + "%";
        } else if (r <= 50) {
            note.innerHTML = "Something is missing in your relation"
            display.innerHTML = r + "%";
        } else if (r > 50 && r <= 80) {

            note.innerHTML = "You're on the Right Path in Life "
            display.innerHTML = r + "%";
        } else if (r > 80 && r <= 95) {

            note.innerHTML = "perfect couple "
            display.innerHTML = r + "%";
        } else if (r > 95) {

            note.innerHTML = "Made For Each Other  "
            display.innerHTML = r + "%";
        }
    }

}

//heart fall

setInterval(createHeartFall, 100);


function createHeartFall() {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // between 2 - 5 seconds
    heart.style.opacity = Math.random();
    heart.style.fontSize = Math.random() * 10 + 10 + 'px';

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000)
}





// function myStopFunction() {
//     clearInterval(myVar);
// }