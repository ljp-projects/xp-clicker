let rebirths = 0
let level = 1
let xp = 0
let xpUntilLevel = Math.ceil(100 * Math.log(2))
let xpUntilRebirth = Math.ceil(100000 * Math.log(1000))

const constants = Object.freeze({
	incremenet: 1.3
})

const immutables = {
	rebirths: 0,
	level: 1,
	xp: 0,
	xpUntilLevel: Math.ceil(100 * Math.log(2)),
	xpUntilRebirth: Math.ceil(100000 * Math.log(1000))
}

const update = () => {
	const xpElement = document.querySelector("#xp")
	const levelElement = document.querySelector("#lvl")
	const rebirthsElement = document.querySelector("#rbths")
	const xpUntilLevelElement = document.querySelector("#xpulvl")
	const xpUntilRebirthElement = document.querySelector("#xpurbth")

	xpElement.textContent = immutables.xp.toFixed(2)
	levelElement.textContent = immutables.level
	rebirthsElement.textContent = immutables.rebirths
	xpUntilLevelElement.textContent = immutables.xpUntilLevel
	xpUntilRebirthElement.textContent = immutables.xpUntilRebirth
}

const addListeners = () => {
	const xpUpButton = document.querySelector("#xpup")

	xpUpButton.onclick = function () {
		immutables.xp += immutables.level * constants.incremenet + (immutables.rebirths * 10)

		if (immutables.xp >= immutables.xpUntilLevel && document.getElementById("LVL-UP") == null) {
			const lvlUp = document.createElement("button")

			lvlUp.innerHTML = '<img src="./level+.svg" width="100" height="100">'
			lvlUp.setAttribute("id", "LVL-UP")

			lvlUp.onclick = function () {
				immutables.xp -= immutables.xpUntilLevel
				immutables.level++

				immutables.xpUntilLevel = Math.ceil(immutables.xpUntilLevel * Math.log(immutables.xpUntilLevel / 10))

				update()

				this.remove()
			}

			document.body.appendChild(lvlUp)
		} else if (immutables.xp >= immutables.xpUntilRebirth && document.getElementById("REBIRTH") == null) {
			const rebirthUp = document.createElement("button")

			rebirthUp.innerHTML = '<img src="./rebirth.svg" width="100" height="100">'
			rebirthUp.setAttribute("id", "REBIRTH")

			rebirthUp.onclick = function () {
				immutables.xp -= immutables.xpUntilRebirth
				immutables.rebirths++

				immutables.xpUntilRebirth = Math.ceil(immutables.xpUntilRebirth * Math.log(immutables.xpUntilRebirth / 100))

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