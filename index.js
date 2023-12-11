let level = 1
let xp = 0
let xpUntilLevel = Math.ceil(100 * Math.log(10)) - 100

const update = () => {
	const xpElement = document.querySelector("#xp")
  const levelElement = document.querySelector("#lvl")
  const xpUntilLevelElement = document.querySelector("#xpulvl")
  
  xpElement.textContent = xp
  levelElement.textContent = level
  xpUntilLevelElement.textContent = xpUntilLevel
}

const addListeners = () => {
	const xpUpButton = document.querySelector("#xpup")
  
  xpUpButton.onclick = function() {
  	xp += level
    
    if (xp >= xpUntilLevel && document.getElementById("LVL-UP") == null) {
    	const lvlUp = document.createElement("button")
      
      lvlUp.innerHTML = '<img src="./level+.svg" width="100" height="100">'
      lvlUp.setAttribute("id", "LVL-UP")
      
      lvlUp.onclick = function() {
      	xp -= xpUntilLevel
        level++
        
        xpUntilLevel = Math.ceil(xpUntilLevel * Math.log(xpUntilLevel / 10))
        
        update()
        
        lvlUp.remove()
      }
      
      document.body.appendChild(lvlUp)
    }
    
    update()
  }
}

const start = () => {
	addListeners()
  update()
}

start()