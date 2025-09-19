function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected page
    document.getElementById(pageId).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
    
    // Load content if it's not already loaded
    const pageElement = document.getElementById(pageId);
    if (pageElement.innerHTML.trim() === '') {
        loadPageContent(pageId);
    }
}

// Load page content dynamically
async function loadPageContent(pageId) {
    try {
        const response = await fetch(`pages/${pageId}.html`);
        const content = await response.text();
        document.getElementById(pageId).innerHTML = content;
    } catch (error) {
        console.error('Error loading page:', error);
        // Fallback content if file doesn't exist
        const fallbackContent = getFallbackContent(pageId);
        document.getElementById(pageId).innerHTML = fallbackContent;
    }
}

// Fallback content for pages
function getFallbackContent(pageId) {
    switch(pageId) {
        case 'resume':
            return `
                <div class="resume-content">
                    <h1 class="page-title">My Resume</h1>
                    <p class="resume-text">
                        This is where your resume content will go. You can add your work experience, education, skills, and more.
                    </p>
                </div>
            `;
        case 'projects':
            return `
                <div class="projects-content">
                    <h1 class="page-title">Projects</h1>
                    <div class="projects-grid">
                        <div class="project-tile" onclick="showProject('project1')">
                            <h3 class="project-title">Project 1</h3>
                            <p class="project-description">Click to view details</p>
                        </div>
                    </div>
                </div>
            `;
        default:
            return '<p>Content not found</p>';
    }
}

// Show project detail page
function showProject(projectId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => page.classList.remove('active'));
    
    // Remove active class from all tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Load and show project detail
    loadProjectDetail(projectId);
}

// Load project detail content
async function loadProjectDetail(projectId) {
    try {
        const response = await fetch(`pages/projects/${projectId}.html`);
        const content = await response.text();
        
        // Create a temporary container for the project detail
        let projectContainer = document.getElementById('project-detail');
        if (!projectContainer) {
            projectContainer = document.createElement('div');
            projectContainer.id = 'project-detail';
            projectContainer.className = 'page-content active';
            document.querySelector('.container').appendChild(projectContainer);
        }
        
        projectContainer.innerHTML = content;
        projectContainer.classList.add('active');
    } catch (error) {
        console.error('Error loading project:', error);
        // Fallback project content
        const fallbackContent = `
            <div class="project-detail-content">
                <button class="back-button" onclick="goBackToProjects()">
                    ← Back to Projects
                </button>
                <h1 class="project-detail-title">${projectId}</h1>
                <div class="project-detail-body">
                    <p class="project-detail-text">
                        This is the detailed view for ${projectId}. You can add descriptions, images, 
                        technologies used, links, and any other details about your project here.
                    </p>
                </div>
            </div>
        `;
        
        let projectContainer = document.getElementById('project-detail');
        if (!projectContainer) {
            projectContainer = document.createElement('div');
            projectContainer.id = 'project-detail';
            projectContainer.className = 'page-content active';
            document.querySelector('.container').appendChild(projectContainer);
        }
        
        projectContainer.innerHTML = fallbackContent;
        projectContainer.classList.add('active');
    }
}

// Go back to projects page
function goBackToProjects() {
    // Hide project detail
    const projectDetail = document.getElementById('project-detail');
    if (projectDetail) {
        projectDetail.classList.remove('active');
    }
    
    // Show projects page
    document.getElementById('projects').classList.add('active');
    
    // Activate projects tab
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[3].classList.add('active'); // Projects is the 4th tab (index 3)
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load initial content for all main pages
    loadPageContent('home');
    loadPageContent('about');
    loadPageContent('resume');
    loadPageContent('projects');
});
