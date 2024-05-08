let elements=['paper', 'scissors', 'rock']
let winnerText = document.getElementById("winner-text")
let userImg = document.getElementById("user-choice")
let botImg = document.getElementById("bot-choice")


let clickimg=function(element){
    let random = Math.floor(Math.random() * elements.length);
    userImg.src = element + '.png'
    botImg.src = elements[random] + '.png'

    if(element=="rock"&&elements[random]=="paper"){

        winnerText.innerHTML = 'Бот виграв'
    }
    else if (element=="rock"&&elements[random]=="rock"){

        winnerText.innerHTML = 'Нічия'
    }
    else if (element=="rock"&&elements[random]=="scissors"){

        winnerText.innerHTML = 'Гравець виграв'
    }
        else if (element=="paper"&&elements[random]=="rock"){

            winnerText.innerHTML = 'Гравець виграв'
        }
        else if (element=="paper"&&elements[random]=="scissors"){

                winnerText.innerHTML = 'Бот виграв'
    }
        else if (element=="paper"&&elements[random]=="paper"){

                winnerText.innerHTML = 'Нічия'
    }    
        else if (element=="scissors"&&elements[random]=="paper"){

            winnerText.innerHTML = 'Гравець виграв'
    }
        else if (element=="scissors"&&elements[random]=="rock"){

            winnerText.innerHTML = 'Бот виграв'
    }
        else if (element=="scissors"&&elements[random]=="scissors"){

            winnerText.innerHTML = 'Нічия'
        }    
            
    }