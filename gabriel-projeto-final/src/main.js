document.addEventListener('DOMContentLoaded', () => {

    // --- Configuration ---
    // TODO: Replace with the client's actual support number
    const WHATSAPP_NUMBER = '5548991160921';

    // --- Elements ---
    const heroForm = document.getElementById('hero-form');

    // --- Handlers ---

    if (heroForm) {
        heroForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const relation = document.getElementById('relation');
            const relationText = relation.options[relation.selectedIndex].text;

            // Build message
            // "Olá, meu nome é [Name], estou interessado no dispositivo para [Relation]. Meu telefone é [Phone]."
            const text = `Olá, meu nome é ${name}. Estou interessado no dispositivo de emergência (${relationText}). Meu telefone de contato é ${phone}.`;

            const encodedText = encodeURIComponent(text);
            const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`;

            // Log for debugging/analytics (mock)
            console.log('Form submitted:', { name, phone, relation: relationText });

            // Redirect
            window.open(url, '_blank');
        });
    }

    // Smooth scrolling for anchor links is handled by CSS (scroll-behavior: smooth), 
    // but we can add interception here if needed for specific logic.

    // --- Static WhatsApp Buttons ---
    const whatsappButtons = document.querySelectorAll('.nav-cta, .btn-whatsapp, .pricing-card .btn-primary');
    whatsappButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent("Olá! Gostaria de saber mais sobre o Gabriel.")}`;
            window.open(url, '_blank');
        });
    });

    // Simple console signature
    console.log('Medical Alert Landing Page - Loaded');
});
