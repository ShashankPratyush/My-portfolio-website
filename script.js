// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", function() {
    const personalInfo = {
        photoUrl: "", // Replace with the actual path to your image
        name: "Shashank Pratyush",
        bio: "Hi, I'm Shashank Pratyush, a passionate web developer with expertise in front-end technologies.",
        socialLinks: {
            twitter: "https://x.com/Shashnk__",
            linkedin: "https://www.linkedin.com/in/shashank-pratyush-105260255/",
            github: "https://github.com/ShashankPratyush",
            instagram: "https://www.instagram.com/shashank_pratyush_/",
            email: "mailto:shashankpratyush450@gmail.com"
        }
    };

    const skills = ["Updating many more.."];

    const projects = [
        {
            title: "Portfolio Website",
            description: "A dynamic portfolio website built with HTML, CSS, and JavaScript.",
            url: "https://github.com/username/portfolio",
            image: "https://via.placeholder.com/300",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
    ];

    // Display Personal Info (Photo, Name, Bio, Social Links)
    document.getElementById("personal-info").innerHTML = `
        <img id="profile-photo" src="${personalInfo.photoUrl}" alt="Profile Photo">
        <h2>${personalInfo.name}</h2>
        <p id="bio">${personalInfo.bio}</p>
        <div id="social-links">
            <a href="${personalInfo.socialLinks.twitter}" target="_blank" class="social-icon"><i class="fab fa-twitter"></i> Twitter</a>
            <a href="${personalInfo.socialLinks.linkedin}" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i> LinkedIn</a>
            <a href="${personalInfo.socialLinks.github}" target="_blank" class="social-icon"><i class="fab fa-github"></i> GitHub</a>
            <a href="${personalInfo.socialLinks.instagram}" target="_blank" class="social-icon"><i class="fab fa-instagram"></i> Instagram</a>
            <a href="${personalInfo.socialLinks.email}" class="social-icon"><i class="fas fa-envelope"></i> Email</a>
        </div>
    `;

    // Render Skills List
    const skillsList = document.getElementById("skills-list");
    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    // Render Projects
    const projectsContainer = document.getElementById("projects-container");
    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");

        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p><strong>Technologies:</strong> ${project.technologies.join(", ")}</p>
            <a href="${project.url}" target="_blank">View Project</a>
        `;

        projectsContainer.appendChild(projectDiv);
    });

    // Dark mode toggle (optional feature)
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.bottom = '10px';
    darkModeToggle.style.right = '10px';
    darkModeToggle.style.padding = '10px 15px';
    darkModeToggle.style.backgroundColor = '#333';
    darkModeToggle.style.color = '#fff';
    darkModeToggle.style.border = 'none';
    darkModeToggle.style.cursor = 'pointer';

    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Apply dark mode styles if the class is active
    if (!document.styleSheets[0].rules.some(rule => rule.selectorText === '.dark-mode')) {
        const darkModeStyles = `
            .dark-mode {
                background-color: #333;
                color: #fff;
            }
            .dark-mode nav {
                background-color: #1c1c1c;
            }
            .dark-mode footer {
                background-color: #1c1c1c;
            }
            .dark-mode .skills-list li {
                background-color: #444;
                border-color: #555;
            }
            .dark-mode a {
                color: #4ca1ff;
            }
        `;
        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = darkModeStyles;
        document.head.appendChild(styleSheet);
    }
});