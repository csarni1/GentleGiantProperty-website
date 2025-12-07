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

// Project data (for portfolio page)
const projects = {
    1: {
        title: "Modern Kitchen Transformation",
        category: "Kitchen",
        description: "Complete kitchen renovation featuring custom cabinetry, granite countertops, and stainless steel appliances. This project transformed an outdated kitchen into a modern, functional space perfect for cooking and entertaining.",
        location: "Hueytown, AL",
        year: "2024",
        beforeImage: "images/kitchen1-before.JPG",
        afterImage: "images/kitchen1-after.JPG"
    },
    2: {
        title: "Luxury Bathroom Renovation",
        category: "Bathroom",
        description: "Elegant bathroom transformation with walk-in shower, modern fixtures, and custom tile work. We created a spa-like retreat with high-end finishes and thoughtful design.",
        location: "Hoover, AL",
        year: "2024",
        beforeImage: "images/bathroom1-before.JPG",
        afterImage: "images/bathroom1-after.JPG"
    },
    3: {
        title: "Complete Exterior Makeover",
        category: "Exterior",
        description: "New siding, roofing, windows, and landscaping transformed this home's curb appeal. The project included energy-efficient upgrades that improved both appearance and functionality.",
        location: "Vestavia Hills, AL",
        year: "2023",
        beforeImage: "images/exterior1-before.JPG",
        afterImage: "images/exterior1-after.JPG"
    },
    4: {
        title: "Deck Renovation",
        category: "Exterior",
        description: "Beautiful deck renovation providing extra space and natural light. This project seamlessly integrated with the existing structure while creating a bright, inviting space.",
        location: "Vestavia Hills, AL",
        year: "2023",
        beforeImage: "images/deckrenovation1-before.JPG",
        afterImage: "images/deckrenovation1-after.JPG"
    },
    5: {
        title: "Investment Property Flip",
        category: "Investment",
        description: "Complete renovation of investment property including kitchen, bathrooms, flooring, and paint. We maximized value while staying on budget and schedule.",
        location: "Bessemer, AL",
        year: "2022",
        beforeImage: "images/investment1-before.JPG",
        afterImage: "images/investment1-after.JPG"
    },
    6: {
        title: "Finished Bedroom",
        category: "Other",
        description: "Transformed small bedroom into a spacious Master. Complete with new flooring, lighting, and custom built-ins.",
        location: "Homewood, AL",
        year: "2023",
        beforeImage: "images/bedroom1-before.JPG",
        afterImage: "images/bedroom1-after.JPG"
    }
};

// Open modal with project details
function openModal(projectId) {
    const project = projects[projectId];
    if (!project) return;

    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalCategory').textContent = project.category;
    document.getElementById('modalDescription').textContent = project.description;
    document.getElementById('modalLocation').textContent = project.location;
    document.getElementById('modalYear').textContent = `Completed: ${project.year}`;
    document.getElementById('modalImage').src = project.afterImage;
    document.getElementById('beforeImage').src = project.beforeImage;
    document.getElementById('afterImage').src = project.afterImage;

    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside
const projectModal = document.getElementById('projectModal');
if (projectModal) {
    projectModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
}

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Form Submission (for contact page)
const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', function() {
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
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});