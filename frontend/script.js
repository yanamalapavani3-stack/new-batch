const form = document.getElementById("projectForm");
const projectList = document.getElementById("projectList");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const project = {
        title: document.getElementById("title").value,
        student: document.getElementById("student").value,
        description: document.getElementById("description").value
    };

    await fetch("http://localhost:5000/projects", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(project)
    });

    loadProjects();
    form.reset();
});

async function loadProjects() {
    const res = await fetch("http://localhost:5000/projects");
    const data = await res.json();

    projectList.innerHTML = "";

    data.forEach(project => {
        projectList.innerHTML += `
        <div class="project">
            <h3>${project.title}</h3>
            <p><strong>Student:</strong> ${project.student}</p>
            <p>${project.description}</p>
        </div>`;
    });
}

loadProjects();