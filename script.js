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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Load initial content
    loadPageContent('home');
    loadPageContent('about');
});
