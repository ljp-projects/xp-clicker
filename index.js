let rebirths = 0
let level = 1
let xp = 0
let xpUntilLevel = Math.ceil(100 * Math.log(10)) - 100
let xpUntilRebirth = Math.ceil(100000 * Math.log(10000))

const update = () => {
	const xpElement = document.querySelector("#xp")
	const levelElement = document.querySelector("#lvl")
	const rebirthsElement = document.querySelector("#rbths")
	const xpUntilLevelElement = document.querySelector("#xpulvl")
	const xpUntilRebirthElement = document.querySelector("#xpurbth")

	xpElement.textContent = xp.toFixed(4)
	levelElement.textContent = level
	rebirthsElement.textContent = rebirths
	xpUntilLevelElement.textContent = xpUntilLevel
	xpUntilRebirthElement.textContent = xpUntilRebirth
}

const addListeners = () => {
	const xpUpButton = document.querySelector("#xpup")

	xpUpButton.onclick = function () {
		xp += level * 1.45 + (rebirths * 10)

		if (xp >= xpUntilLevel && document.getElementById("LVL-UP") == null) {
			const lvlUp = document.createElement("button")

			lvlUp.innerHTML = '<img src="./level+.svg" width="100" height="100">'
			lvlUp.setAttribute("id", "LVL-UP")

			lvlUp.onclick = function () {
				xp -= xpUntilLevel
				level++

				xpUntilLevel = Math.ceil(xpUntilLevel * Math.log(xpUntilLevel / 10))

				update()

				this.remove()
			}

			document.body.appendChild(lvlUp)
		} else if (xp >= xpUntilRebirth && document.getElementById("REBIRTH") == null) {
			const rebirthUp = document.createElement("button")

			lvlUp.innerHTML = '<img src="./rebirth.svg" width="100" height="100">'
			lvlUp.setAttribute("id", "REBIRTH")

			lvlup.onclick = function () {
				xp -= xpUntilRebirth
				rebirths++

				xpUntilRebirth = Math.ceil(xpUntilRebirth * Math.log(xpUntilRebirth))

				update()

				this.remove()
			}
		}

		update()
	}
}

const start = () => {
	addListeners()
	update()
}

start()