document.getElementById("name").innerText = config.name

document.getElementById("logo").innerText = config.logo

document.getElementById("title").innerText = config.title

document.getElementById("aboutText").innerText = config.about

document.getElementById("profile").src = config.profile

document.getElementById("footerText").innerText =
"© "+config.name

const skillsContainer =
document.getElementById("skillsContainer")

config.skills.forEach(skill=>{

const span = document.createElement("span")

span.innerText = skill

skillsContainer.appendChild(span)

})

const projectsContainer =
document.getElementById("projectsContainer")

config.projects.forEach(project=>{

const div = document.createElement("div")

div.className="project"

div.innerHTML = `
<h3>${project.title}</h3>
<p>${project.desc}</p>
<a href="${project.link}" target="_blank">
View Project
</a>
`

projectsContainer.appendChild(div)

})

const socialLinks =
document.getElementById("socialLinks")

config.social.forEach(link=>{

const a = document.createElement("a")

a.href = link.link

a.innerText = link.name

a.style.margin="10px"

socialLinks.appendChild(a)

})
