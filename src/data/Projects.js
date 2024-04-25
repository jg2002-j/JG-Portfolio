import imgs from "../assets/projImages/projImages";

const projects = [
	{
		"id": "008",
		"featured": true,
		"title": "Nucleus",
		"synopsis": "A time management app with task tracking and minimalist design.",
		"tags": ["collaborative", "design", "development", "apis"],
		"desc": "Time management is essential when it comes to studying. Our app is based on the Pomodoro Technique, a tried-and-tested learning method that intersperses periods of concentration with set breaks. Topics of study are broken down to sessions of around 25 minutes to maximise focus, with enforced breaks between sessions to help with memory retention and decrease fatigue. It’s not just helpful for filling your mind, you can empty it too by using Nucleus as a meditation and mindfulness aid. With a minimalist UI and customisable session and break lengths, Nucleus is a simple solution for tasks that may initially seem overwhelming, helps build better study habits and sends procrastination packing.",
		"desktopImgs": [ imgs.nucleusD1, imgs.nucleusD2, imgs.nucleusD3 ],
		"mobileImgs": [ imgs.nucleusM1, imgs.nucleusM2, imgs.nucleusM3 ],
		"swatch": "133,69,77",
		"deployed": "https://nucleus-plum-zeta.vercel.app/",
		"repo": "https://github.com/calltekk/nucleus",
		"techs": ["HTML", "CSS", "JavaScript", "NPM", "Vite", "React", "React Router", "Axios", "PostCSS", "TailwindCSS", "DaisyUI", "MongoDB", "Git", "GitHub", "Vercel"]
	},
	{
		"id": "001",
		"featured": true,
		"title": "Paws Planner",
		"synopsis": "A travel planner app designed with pet owners in mind.",
		"tags": ["collaborative", "design", "development", "apis"],
		"desc": "Welcome to Paws Planner, your go-to application for planning pet-friendly adventures around the world! Whether you're a pet owner or a pet lover, Paws Planner helps you discover and plan exciting activities for you and your furry friends in any location.",
		"desktopImgs": [ imgs.pawsD1, imgs.pawsD2, imgs.pawsD3 ],
		"mobileImgs": [ imgs.pawsM1, imgs.pawsM2, imgs.pawsM3 ],
		"swatch": "114,163,203",
		"deployed": "https://anadomuta.github.io/paws-planner/",
		"repo": "https://github.com/anadomuta/paws-planner",
		"techs": ["HTML", "CSS", "JavaScript", "NPM", "Bootstrap", "GitHub", "GitHub Pages"]
	},
	{
		"id": "002",
		"featured": false,
		"title": "Web Development Notes",
		"synopsis": "A resource made to practice and learn Web Development concepts.",
		"tags": ["individual"],
		"desc": "Learning how to use languages and tools can often be challenging, especially when covering a lot of material in a short amount of time. I found the best way to retain these newfound skills was to not only note them down, but also practice using them - which I did with this site.",
		"desktopImgs": [ imgs.notesD1, imgs.notesD2, imgs.notesD3 ],
		"mobileImgs": [ imgs.notesM1, imgs.notesM2, imgs.notesM3 ],
		"swatch": "193,156,61",
		"deployed": "https://jg2002-j.github.io/webdevnotes/",
		"repo": "https://github.com/jg2002-j/webdevnotes",
		"techs": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git", "GitHub", "GitHub Pages"]
	},
	{
		"id": "003",
		"featured": true,
		"title": "Bootstrap Portfolio",
		"synopsis": "A portfolio made in HTML, CSS and Bootstrap 5.",
		"tags": ["individual", "design", "development"],
		"desc": "This challenge involved designing a web page that displayed my work to-date on a page designed with Bootstrap, HTML and CSS.",
		"desktopImgs": [ imgs.bootstrapD1, imgs.bootstrapD2, imgs.bootstrapD3 ],
		"mobileImgs": [ imgs.bootstrapM1, imgs.bootstrapM2, imgs.bootstrapM3 ],
		"swatch": "54,84,178",
		"deployed": "https://jg2002-j.github.io/bootstrap-portfolio/",
		"repo": "https://github.com/jg2002-j/bootstrap-portfolio",
		"techs": ["HTML", "CSS", "Bootstrap", "Git", "GitHub", "GitHub Pages"]
	},
	{
		"id": "004",
		"featured": false,
		"title": "Weather Dashboard",
		"synopsis": "A simple web app to find the weather forecast for a searched location.",
		"tags": ["individual", "design", "development", "apis"],
		"desc": "This challenge involved designing a web page that pulled data from a Server API (OpenWeather API) and displaying that in 2 views: one for today's weather, and one section for a 5-day forecast. The web page also has functionality of storing the user's 5 most recent searches to assist with pulling up that data quicker.",
		"desktopImgs": [ imgs.weatherD1, imgs.weatherD2, imgs.weatherD3 ],
		"mobileImgs": [],
		"swatch": "231,218,206",
		"deployed": "https://jg2002-j.github.io/weather-dashboard/",
		"repo": "https://github.com/jg2002-j/weather-dashboard",
		"techs": ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git", "GitHub", "GitHub Pages"]
	},
	{
		"id": "005",
		"featured": false,
		"title": "Team-Profile Generator",
		"synopsis": "A Node.js application to create a quick HTML for team members' contact info.",
		"tags": ["individual", "development"],
		"desc": "This project allowed me to hone my skills with npm, inquirer and node.js - and developed familiarity with test-driven development by writing code that had to pass the tests provided. By collecting user responses with inquirer, I then processed the data and accordingly wrote it to a HTML file to display the members of a team.",
		"desktopImgs": [ imgs.teamD1 ],
		"mobileImgs": [],
		"swatch": "238,238,238",
		"deployed": "",
		"repo": "https://github.com/jg2002-j/team-profile-generator",
		"techs": ["HTML", "JavaScript", "Node.js", "NPM", "Boostrap", "Jest", "Git", "GitHub"]
	},
	{
		"id": "006",
		"featured": false,
		"title": "README Generator",
		"synopsis": "A Node.js application to generate a README.md file based on user input.",
		"tags": ["individual", "development"],
		"desc": "This project helped me learn node.js by installing a third-party package (Inquirer) through npm. Using the readme docs for that package, I then created several questions, gathered the user input and implemented it via template literals into a 'write' function to a README.md document.",
		"desktopImgs": [
			"https://github.com/jg2002-j/readme-generator/blob/main/assets/deployed_application.png?raw=true"
		],
		"mobileImgs": [],
		"swatch": "76,174,105",
		"deployed": "",
		"repo": "https://github.com/jg2002-j/readme-generator",
		"techs": ["JavaScript", "Markdown", "Node.js", "NPM", "Git", "GitHub"]
	},
	{
		"id": "007",
		"featured": false,
		"title": "Password Generator",
		"synopsis": "A web application that generates a password string based on user input using simple JS.",
		"tags": ["individual", "development"],
		"desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et minus voluptatem magnam iusto temporibus reiciendis maxime? Id, praesentium quos non hic autem expedita quisquam totam laborum eligendi nisi repudiandae!",
		"desktopImgs": [
			"https://github.com/jg2002-j/password-generator/raw/main/Screenshot%202024-01-23%20174657.png"
		],
		"mobileImgs": [],
		"swatch": "175,8,8",
		"deployed": "https://jg2002-j.github.io/password-generator/",
		"repo": "https://github.com/jg2002-j/password-generator",
		"techs": ["HTML", "CSS", "JavaScript", "Git", "GitHub", "GitHub Pages"]
	}
]

export default projects;