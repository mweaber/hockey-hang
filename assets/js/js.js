function toggleGame() {
    var x = document.getElementById("gameBoard");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var y = document.getElementById('intro');
    if (y.style.display === 'flex') {
        y.style.display = 'none'
    } else {
        y.style.display = 'flex'
    }

    var z = document.getElementById('homebtn');
    if (z.style.display === "none") {
        z.style.display = "block";
    } else {
        z.style.display = "none";
    }
}

function toggleHome() {
    var x = document.getElementById("gameBoard");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    var y = document.getElementById('intro');
    if (y.style.display === 'none') {
        y.style.display = 'flex'
    } else {
        y.style.display = 'none'
    }

    var z = document.getElementById('homebtn');
    if (z.style.display === "block") {
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
}

function changeLogo() {
  document.getElementById("mainlogo").addEventListener("mouseover", picSwap);
  document.getElementById("mainlogo").addEventListener("onmouseout", mainLogo);  
}


function picSwap() {
    let newImg = document.getElementById('mainlogo');
    newImg.src= `/assets/img/${event.target.id}.png`
    console.log(event.target.id);
}

function mainLogo() {
    let newImg = document.getElementById('mainlogo');
    newImg.src='/assets/img/nhl.png'
}




toggleHome()
toggleGame()
changeLogo()
