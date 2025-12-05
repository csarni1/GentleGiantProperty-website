// Project Data
const projects = [
    {
        id: 1,
        title: 'Complete Home Renovation',
        category: 'Exterior',
        image: 'https://github.com/user-attachments/assets/8e751fcb-2b09-4b38-b9da-d17b51b39bc1',
        beforeImage: 'https://github.com/user-attachments/assets/23c6a896-fc6d-4e74-b12c-b0c47e7d3c6a',
        description: 'Full home renovation with new siding, metal roof, landscaping, and complete exterior makeover.',
        details: 'Complete transformation including structural updates and modern finishes | Location: Alabama'
    },
    {
        id: 2,
        title: 'Modern Kitchen Remodel',
        category: 'Interior',
        image: 'https://github.com/user-attachments/assets/3cc58f6f-1c9f-41fe-ad51-cd11e3dd9a06',
        beforeImage: 'https://github.com/user-attachments/assets/f00b9fe3-c87f-49c7-b2f7-8baa5a3d2aba',
        description: 'Complete kitchen transformation with white shaker cabinets, modern appliances, and luxury vinyl flooring.',
        details: 'New cabinetry, countertops, flooring, and lighting | Location: Alabama'
    },
    {
        id: 3,
        title: 'Interior Living Space Transformation',
        category: 'Interior',
        image: 'https://github.com/user-attachments/assets/4d40ffd7-2d69-4f50-ac78-f7acc4a5bf7e',
        description: 'Beautiful living room renovation with new flooring, fresh paint, and modern windows.',
        details: 'New luxury vinyl flooring, paint, trim work, and climate control | Location: Alabama'
    },
    {
        id: 4,
        title: 'Elegant Bathroom Renovation',
        category: 'Interior',
        image: 'https://github.com/user-attachments/assets/afebdbca-d8ab-4ee0-8c80-f26da18e0dd8',
        beforeImage: 'https://github.com/user-attachments/assets/f1e79de9-c51e-4595-9f92-bf0ca6879d56',
        description: 'Modern bathroom remodel with marble tile shower, new fixtures, and luxury vinyl flooring.',
        details: 'Complete bathroom renovation with high-end finishes | Location: Alabama'
    },
    {
        id: 5,
        title: 'Outdoor Living Space',
        category: 'Exterior',
        image: 'https://github.com/user-attachments/assets/e7e95b83-7e9a-427a-aec4-a2c8b11e1f28',
        description: 'Custom deck construction with white railings and professional landscaping.',
        details: 'New deck, railings, and landscape design | Location: Alabama'
    },
    {
        id: 6,
        title: 'Front Porch Renovation',
        category: 'Exterior',
        image: 'https://github.com/user-attachments/assets/84a69e07-9c1e-451c-b46a-a87d18e2cab6',
        description: 'Beautiful front porch with new concrete, landscaping, and professional walkway design.',
        details: 'Concrete work, landscaping, and exterior updates | Location: Alabama'
    },
    {
        id: 7,
        title: 'Sunroom Addition',
        category: 'Interior',
        image: 'https://github.com/user-attachments/assets/9f0ae78e-2f22-4c24-bb93-9fde69ffc0b9',
        description: 'Bright and spacious sunroom with large windows, French doors, and luxury vinyl flooring.',
        details: 'New construction addition with professional finishes | Location: Alabama'
    },
    {
        id: 8,
        title: 'Custom Deck with Storage',
        category: 'Exterior',
        image: 'https://github.com/user-attachments/assets/4f7e95cd-e4c1-44b1-9bfe-a68e8c4a74c5',
        description: 'Multi-level deck with under-deck storage, cedar construction, and modern mesh railings.',
        details: 'Custom cedar deck with integrated storage solution | Location: Alabama'
    }
];

// Load Projects
function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = projects.map(project => `
        <div class="project-card" onclick="openModal(${project.id})">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <span class="project-category">${project.category}</span>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="#" class="project-btn" onclick="event.preventDefault();">
                    View Details 📷
                </a>
            </div>
        </div>
    `).join('');
}

// Open Modal
function openModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    
    let beforeAfterHTML = '';
    if (project.beforeImage) {
        beforeAfterHTML = `
            <div class="before-after">
                <h3>Before & After</h3>
                <div class="before-after-grid">
                    <div class="before-after-item">
                        <p>BEFORE</p>
                        <img src="${project.beforeImage}" alt="${project.title} - Before">
                    </div>
                    <div class="before-after-item">
                        <p>AFTER</p>
                        <img src="${project.image}" alt="${project.title} - After">
                    </div>
                </div>
            </div>
        `;
    }

    modalBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="modal-image">
        <div class="modal-body">
            <span class="modal-category">${project.category}</span>
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            ${beforeAfterHTML}
            <div class="project-details-box">
                <h3>Project Details</h3>
                <p>${project.details}</p>
            </div>
            <a href="#contact" class="modal-cta" onclick="closeModal()">Request Similar Project</a>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Mobile Menu Toggle
document.getElementById('mobileMenuBtn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-mobile a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobileMenu').style.display = 'none';
    });
});

// Modal Close Button
document.getElementById('modalClose').addEventListener('click', closeModal);

// Close modal when clicking outside
document.getElementById('projectModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Form Submission
document.getElementById('submitBtn').addEventListener('click', function() {
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const projectType = document.getElementById('projectType').value;
    const budget = document.getElementById('budget').value;
    const description = document.getElementById('description').value;

    // Validate required fields
    if (!name || !email || !phone || !address || !projectType || !description) {
        alert('Please fill in all required fields');
        return;
    }

    // Create email content
    const emailSubject = encodeURIComponent(`New Estimate Request from ${name}`);
    const emailBody = encodeURIComponent(`
New Estimate Request Received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Property Address: ${address}
Project Type: ${projectType}
Budget Range: ${budget || 'Not specified'}

Project Description:
${description}

---
Submitted via Gentle Giant Property Solutions website
    `);

    // Open email client
    window.location.href = `mailto:contact@gentlegiantproperty.com?subject=${emailSubject}&body=${emailBody}`;

    // Show success message
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';

    // Reset form after 3 seconds
    setTimeout(function() {
        document.getElementById('contactForm').style.display = 'block';
        document.getElementById('successMessage').style.display = 'none';
        
        // Clear form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('address').value = '';
        document.getElementById('projectType').value = '';
        document.getElementById('budget').value = '';
        document.getElementById('description').value = '';
    }, 3000);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
});