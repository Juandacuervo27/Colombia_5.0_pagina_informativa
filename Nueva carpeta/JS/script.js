// ==========================================
    // 3. INFORMACIÓN DEL HERO
    // ==========================================

    const heroData = {

        home: {
            title: "Colombia 5.0",
            text: "The national strategy and the most important digital innovation ecosystem event promoted by the Ministry of ICT",
            image: "https://visitbogota.co/sites/default/files/2026-04/FOTO%201%20CORFERIAS_2.jpg"
        },

        about: {
            title: "About the Project",
            text: "Learn about the purpose and scope of Colombia 5.0.",
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
        },

        conferences: {
            title: "Conferences",
            text: "Explore the event's talks and workshops.",
            image: "https://laud.udistrital.edu.co/sites/default/files/imagen-galeria/2022-06/1A0A4610%20-%20copia.jpg"
        },

        glosary: {
            title: "Glossary",
            text: "Consult technological concepts and terms.",
            image: "https://images.unsplash.com/photo-1455390582262-044cdead277a"
        },

        "about-us": {
            title: "About Us",
            text: "Meet the team behind the project.",
            image: "IMG/SENA CMTC.png"
        },

        // !!! ADD THIS NEW PART TO YOUR HERO DATA OBJECT !!!
        conclusion: {
            title: "Ethical Dimension",
            text: "Professional responsibility and social impact in business technology.",
            image: "https://visitbogota.co/sites/default/files/2026-02/4.Hotel%20Hilton%20%281%29_0.jpg"
        }

    };

    // ==========================================
    // 4. CAMBIO DE PESTAÑAS
    // ==========================================

    const navMenu = document.querySelector("nav ul");
    const sections = document.querySelectorAll(".tab-content");
    const hero = document.getElementById("hero");

    if (navMenu) {

        navMenu.addEventListener("click", (e) => {

            if (e.target.classList.contains("tab-link")) {

                e.preventDefault();

                const targetSectionId =
                    e.target.getAttribute("data-value");

                // Oculta todas las secciones
                sections.forEach(section => {
                    section.classList.remove("active");
                });

                // Muestra la sección seleccionada
                const activeSection =
                    document.getElementById(targetSectionId);

                if (activeSection) {
                    activeSection.classList.add("active");
                }

                // ==========================================
                // CAMBIO DEL HERO
                // ==========================================

                if (heroData[targetSectionId]) {

                    const h1 = hero.querySelector("h1");
                    // SOLUCIÓN: Buscamos específicamente la clase .hero-desc para que no se confunda con los párrafos de las tarjetas informativas
                    const p = hero.querySelector(".hero-desc"); 

                    if (h1) {
                        h1.textContent = heroData[targetSectionId].title;
                    }

                    if (p) {
                        p.textContent = heroData[targetSectionId].text;
                    }

                    hero.style.background = `
                        linear-gradient(
                            rgba(0,0,0,.65),
                            rgba(0,0,0,.65)
                        ),
                        url('${heroData[targetSectionId].image}')
                    `;

                    hero.style.backgroundSize = "cover";
                    hero.style.backgroundPosition = "center";
                    hero.style.backgroundAttachment = "fixed";
                }

            }

        });

    };

// ==========================================
// CONTROL DEL BOTÓN "EXPLORAR EVENTO"
// ==========================================
const heroBtnAction = document.getElementById("hero-btn-action");

if (heroBtnAction) {
    heroBtnAction.addEventListener("click", (e) => {
        e.preventDefault(); // Evita que la página salte bruscamente al '#'

        // Buscamos la sección que tenga la clase 'active' en este preciso momento
        const activeSection = document.querySelector(".tab-content.active");

        if (activeSection) {
            // Desplazamiento suave hacia la sección activa
            activeSection.scrollIntoView({ 
                behavior: "smooth", 
                block: "start" 
            });
        }
    });
}