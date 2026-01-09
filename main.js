let Translations = {
	"home": {
		"en": "Home",
		"bg": "Главна"
	},
	"games": {
		"en": "Games",
		"bg": "Игри"
	},
	"programs": {
		"en": "Programs",
		"bg": "Програми"
	},
	"news": {
		"en": "News",
		"bg": "Новини"
	},
	"About us Title": {
		"en": "About us",
		"bg": "За нас"
	},
	"About us Text": {
		"en": "Hello we are a small developing group that makes games, programs and more! On this site you can download our products. All of our programs are open source and absoulutely safe to use and you can manually check our code. We value our community and we are very happy when you report bugs, give us ideas and more!",
		"bg": "Здравейте, ние сме малък екип за разработка, който прави игри, програми и още! На този сайт Вие можете да изтеглите нашите продукти. Всичките ни програми са с отворен код и абсолютно безопасни за използване и Вие можете ръчно да проверите кода ни. Ние ценим нашето къмюнити и сме много щастливи, когато сигнализирате за бъгове, давате ни идеи о други!"
	},
	"About our projects Title": {
		"en": "About our projects",
		"bg": "За нашите проекти"
	},
	"About our projects Text": {
		"en": "We make high quality projects like games and programs. Our programs make life easier and solve annoying problems. Our games are interesting and advanced. ",
		"bg": "Ние правим качествени игри и програми. Нашите програми правят живота по-лесен и решавад дразнещи проблеми. Нашите игри са интересни и с много механики. "
	},
	"Team Title": {
		"en": "Team",
		"bg": "Екип"
	},
	"Team Text": {
		"en": "We have a professional team of developers.",
		"bg": "Ние имаме професионален екип от разработчици."
	},
	"Developing Title": {
		"en": "Developing",
		"bg": "Разработка"
	},
	"Developing Text": {
		"en": "Proffesional developing technics with the newest frameworks, ui and others.",
		"bg": "Професионални тактики за разработка със най-новите фреймуоркове, ui и други."
	},
	"Community Title": {
		"en": "Community",
		"bg": "Къмюнити"
	},
	"Community Text": {
		"en": "We value our community and we are happy when you report bugs, give us ideas and more.",
		"bg": "Ние ценим нашето къмюнити и сме щастливи, когато сигнализирате за бъгове, давате ни идеи и други."
	},
	"AFK holder": {
		"en": "Do you know the problem of games that require AFK and kick you after 20 minutes? This program fixes it. You can type the interval between button presses. Choose keyboard button, press start and done! The code and download: ",
		"bg": "Нали знаете проблема с игрите, които искат да сте afk и ви изхвърлят скед 20 минути? Тази програма оправя проблема. Вие можете да въведете интервала между натисканията на бутона. Избирате бутон за натискане, напискате start и готово! Кода и инсталиране: "
	},
	"translate": {
		"en": "Bulgarian",
		"bg": "English"
	},
}

let News = {
	"AFK holder": {
		"title_bg": "Нова програма - AFK holder",
		"title_en": "New program - AFK holder",

		"en": `<br>Hello community,<br><br>

				We created a program that can help you. This program can hold you afk in a game. Download and view the code at the programs tab.`,
		"bg": `<br>Здравейте къмюнити,<br><br>

					Ние създадохме програма, която може да ви помогне. Тази програма може да ви държи afk в игра. Инсталирайте и вижте кода от раздела "програми". `,
		"date": "6.5.2025"
	},

	"Site": {
		"title_bg": "Сайт",
        "title_en": "Site",

		"en": `<br>Hello community,<br><br>

				From this date we have a site! In this site you can find news about our games, programs and more. We are so happy that we now have website and this a sign we are getting better and we can make better games, programs and more!`,
        "bg": `<br>Здравейте къмюнити,<br><br>

					От днес ние имаме сайт! В този сайт Вие можете да намерите новини за нашите игри, програми и други. Ние сме радостни да ви съобщим, че вече имаме сайт и тоза е знак, че ние ставаме по-добри и ще можем да правим по-добри игри, програми и други за Вас!`,
		"date": "1.5.2025"
	}
}

let light = localStorage.getItem("light")
const theme = document.getElementById("themes")
let lang = localStorage.getItem("lang") || "en"

document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll("[data]")
		.forEach(translate);

	for (let x in News) {
        addnews(News[x])
	}

	//News.forEach(addnews)
});

function addnews(element) {
	document.getElementById("cards_wrapper").innerHTML += `
		<div class="cards cards_vertical">
				<div class="card_title justified">
					${element[`title_${lang}`]}
					<span class="date">${element["date"]}</span>
				</div>
				${element[lang]}
			</div>
			`
}

function TranslateNews() {
    document.getElementById("cards_wrapper").innerHTML = ""

	for (let x in News) {
		addnews(News[x])
	}
}

function changeLanguage() {
	if (lang === "en") {
		lang = "bg"
		localStorage.setItem("lang", "bg")
		TranslateAll()
		TranslateNews()
	} else {
		lang = "en"
		localStorage.setItem("lang", "en")
		TranslateAll()
		TranslateNews()
	}
}

function TranslateAll() {
	document
	.querySelectorAll("[data]")
	.forEach(translate);
}

function translate(element) {
	const key = element.getAttribute("data");
	const translation = Translations[key][lang];
	element.innerText = translation;
}


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