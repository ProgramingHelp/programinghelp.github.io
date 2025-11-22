let light = localStorage.getItem("light")
const theme = document.getElementById("themes")

const enableLightMode = () => {
	document.body.classList.add("light")
	document.getElementById("logo").src = "images/Dark_logo.png"
	localStorage.setItem("light", "enabled")
}

const disableLightMode = () => {
	document.body.classList.remove("light")
	document.getElementById("logo").src = "images/White_logo.png"
	localStorage.setItem("light", null)
}

if(light === "enabled") enableLightMode()

theme.addEventListener("click", () => {
	light = localStorage.getItem("light")
	light !== "enabled" ? enableLightMode() : disableLightMode()
})