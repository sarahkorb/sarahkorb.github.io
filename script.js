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
}

// Load page content dynamically
async function loadPageContent(pageId) {
    try {
        const response = await fetch(`pages/${pageId}.html`);
        const content = await response.text();
        document.getElementById(pageId).innerHTML = content;
    } catch (error) {
        console.error('Error loading page:', error);
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
