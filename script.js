// Car Rental Application Logic

/* --- Multilingual Support --- */
const translations = {
    en: {
        navHome: "Home",
        navFleet: "Fleet",
        navLocations: "Locations",
        navContact: "Contact",
        bookNow: "Book Now",
        heroTitle: "Premium Car Rental in <span class='highlight'>Morocco</span>",
        heroSubtitle: "Experience the freedom of the road with our diverse fleet. Best prices guaranteed.",
        vehiclesAvailable: "Vehicles Available",
        mainHub: "Main Hub",
        browseCars: "Browse Cars",
        pickupDate: "Pickup Date",
        returnDate: "Return Date",
        vehicleType: "Vehicle Type",
        allCategories: "All Categories",
        checkAvailability: "Check Availability",
        ourFleet: "Our Fleet",
        fleetDesc: "Choose from our wide range of tailored vehicles.",
        findUs: "Find Us",
        findUsDesc: "Conveniently located in the heart of Casablanca.",
        contactUs: "Contact Us",
        addressTitle: "Address",
        phoneTitle: "Phone",
        emailTitle: "Email",
        sendMessageTitle: "Send a Message",
        fullNamePlaceholder: "Full Name",
        emailPlaceholder: "Email Address",
        messagePlaceholder: "Your Message",
        sendMessageBtn: "Send Message",
        footerText: "&copy; 2026 CarQuick Rental. All rights reserved.",
        // Dynamic
        rentNow: "Rent Now",
        unavailable: "Unavailable",
        soldOut: "Sold Out",
        lowStock: "Low Stock",
        available: "Available",
        day: "/day",
        manual: "Manual",
        automatic: "Automatic",
        diesel: "Diesel",
        petrol: "Petrol",
        hybrid: "Hybrid",
        seats: "seats",
        category: "Category",
        basePrice: "Base Price",
        driverAge: "Driver Age",
        pickupLocation: "Pickup Location",
        confirmBooking: "Confirm Booking",
        duration: "Duration",
        days: "days",
        dailyRate: "Daily Rate",
        total: "Total",
        extraOptions: "Extra Options",
        gps: "GPS",
        babySeat: "Baby Seat",
        fullInsurance: "Full Insurance",
        addDriver: "Additional Driver"
    },
    fr: {
        navHome: "Accueil",
        navFleet: "Flotte",
        navLocations: "Agences",
        navContact: "Contact",
        bookNow: "Réserver",
        heroTitle: "Location de Voitures Premium au <span class='highlight'>Maroc</span>",
        heroSubtitle: "Découvrez la liberté de la route avec notre flotte diversifiée. Meilleurs prix garantis.",
        vehiclesAvailable: "Véhicules Disponibles",
        mainHub: "Agence Principale",
        browseCars: "Voir les Voitures",
        pickupDate: "Date de Départ",
        returnDate: "Date de Retour",
        vehicleType: "Type de Véhicule",
        allCategories: "Toutes Catégories",
        checkAvailability: "Vérifier Disponibilité",
        ourFleet: "Notre Flotte",
        fleetDesc: "Choisissez parmi notre large gamme de véhicules sur mesure.",
        findUs: "Nous Trouver",
        findUsDesc: "Idéalement situé au cœur de Casablanca.",
        contactUs: "Contactez-nous",
        addressTitle: "Adresse",
        phoneTitle: "Téléphone",
        emailTitle: "Email",
        sendMessageTitle: "Envoyer un Message",
        fullNamePlaceholder: "Nom Complet",
        emailPlaceholder: "Adresse Email",
        messagePlaceholder: "Votre Message",
        sendMessageBtn: "Envoyer Message",
        footerText: "&copy; 2026 CarQuick Rental. Tous droits réservés.",
        rentNow: "Louer",
        unavailable: "Indisponible",
        soldOut: "Épuisé",
        lowStock: "Stock Faible",
        available: "Disponible",
        day: "/jour",
        manual: "Manuelle",
        automatic: "Automatique",
        diesel: "Diesel",
        petrol: "Essence",
        hybrid: "Hybride",
        seats: "places",
        category: "Catégorie",
        basePrice: "Prix de Base",
        driverAge: "Âge du Conducteur",
        pickupLocation: "Lieu de Prise en Charge",
        confirmBooking: "Confirmer",
        duration: "Durée",
        days: "jours",
        dailyRate: "Tarif Journalier",
        total: "Total",
        extraOptions: "Options Supplémentaires",
        gps: "GPS",
        babySeat: "Siège Bébé",
        fullInsurance: "Assurance Tous Risques",
        addDriver: "Conducteur Adat.",
    },
    es: {
        navHome: "Inicio",
        navFleet: "Flota",
        navLocations: "Ubicaciones",
        navContact: "Contacto",
        bookNow: "Reservar",
        heroTitle: "Alquiler de Coches Premium en <span class='highlight'>Marruecos</span>",
        heroSubtitle: "Experimenta la libertad de la carretera con nuestra flota diversa. Mejores precios garantizados.",
        vehiclesAvailable: "Vehículos Disponibles",
        mainHub: "Sede Principal",
        browseCars: "Ver Coches",
        pickupDate: "Fecha de Recogida",
        returnDate: "Fecha de Devolución",
        vehicleType: "Tipo de Vehículo",
        allCategories: "Todas Categorías",
        checkAvailability: "Verificar Disponibilidad",
        ourFleet: "Nuestra Flota",
        fleetDesc: "Elija entre nuestra amplia gama de vehículos a medida.",
        findUs: "Encuéntranos",
        findUsDesc: "Convenientemente ubicado en el corazón de Casablanca.",
        contactUs: "Contáctenos",
        addressTitle: "Dirección",
        phoneTitle: "Teléfono",
        emailTitle: "Correo",
        sendMessageTitle: "Enviar Mensaje",
        fullNamePlaceholder: "Nombre Completo",
        emailPlaceholder: "Correo Electrónico",
        messagePlaceholder: "Tu Mensaje",
        sendMessageBtn: "Enviar Mensaje",
        footerText: "&copy; 2026 CarQuick Rental. Todos los derechos reservados.",
        rentNow: "Alquilar",
        unavailable: "No Disponible",
        soldOut: "Agotado",
        lowStock: "Poco Stock",
        available: "Disponible",
        day: "/día",
        manual: "Manual",
        automatic: "Automático",
        diesel: "Diésel",
        petrol: "Gasolina",
        hybrid: "Híbrido",
        seats: "asientos",
        category: "Categoría",
        basePrice: "Precio Base",
        driverAge: "Edad del Conductor",
        pickupLocation: "Lugar de Recogida",
        confirmBooking: "Confirmar Reserva",
        duration: "Duración",
        days: "días",
        dailyRate: "Tarifa Diaria",
        total: "Total",
        extraOptions: "Opciones Extra",
        gps: "GPS",
        babySeat: "Silla de Bebé",
        fullInsurance: "Seguro Todo Riesgo",
        addDriver: "Conductor Adic."
    },
    ar: {
        navHome: "الرئيسية",
        navFleet: "واسطولنا",
        navLocations: "مواقعنا",
        navContact: "اتصل بنا",
        bookNow: "احجز الآن",
        heroTitle: "تأجير سيارات فاخرة في <span class='highlight'>المغرب</span>",
        heroSubtitle: "استمتع بحرية الطريق مع أسطولنا المتميز. نضمن لك أفضل الأسعار.",
        vehiclesAvailable: "سيارة متاحة",
        mainHub: "المقر الرئيسي",
        browseCars: "تصفح السيارات",
        pickupDate: "تاريخ الاستلام",
        returnDate: "تاريخ العودة",
        vehicleType: "نوع السيارة",
        allCategories: "جميع الفئات",
        checkAvailability: "تحقق من التوفر",
        ourFleet: "أسطولنا",
        fleetDesc: "اختر من بين مجموعتنا الواسعة من السيارات المصممة خصيصًا لك.",
        findUs: "موقعنا",
        findUsDesc: "موقع متميز في قلب الدار البيضاء.",
        contactUs: "تواصل معنا",
        addressTitle: "العنوان",
        phoneTitle: "الهاتف",
        emailTitle: "البريد الإلكتروني",
        sendMessageTitle: "أرسل رسالة",
        fullNamePlaceholder: "الاسم الكامل",
        emailPlaceholder: "البريد الإلكتروني",
        messagePlaceholder: "رسالتك",
        sendMessageBtn: "إرسال الرسالة",
        footerText: "&copy; 2026 CarQuick Rental. جميع الحقوق محفوظة.",
        rentNow: "استأجر الآن",
        unavailable: "غير متوفر",
        soldOut: "نفذت الكمية",
        lowStock: "كمية محدودة",
        available: "متاح",
        day: "/يوم",
        manual: "يدوي",
        automatic: "أوتوماتيك",
        diesel: "ديزل",
        petrol: "بنزين",
        hybrid: "هجين",
        seats: "مقاعد",
        category: "الفئة",
        basePrice: "السعر الأساسي",
        driverAge: "عمر السائق",
        pickupLocation: "موقع الاستلام",
        confirmBooking: "تأكيد الحجز",
        duration: "المدة",
        days: "أيام",
        dailyRate: "السعر اليومي",
        total: "المجموع",
        extraOptions: "خيارات إضافية",
        gps: "نظام ملاحة",
        babySeat: "مقعد طفل",
        fullInsurance: "تأمين شامل",
        addDriver: "سائق إضافي"
    }
};

let currentLang = 'en';

function updateLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // Update Static Elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element is an input with placeholder
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Re-render Dynamic Content
    renderFleet();

    // Update Option Checkboxes labels if possible, or just re-render modal triggering
    updateModalLabels();
}

function updateModalLabels() {
    const t = translations[currentLang];
    const labels = document.querySelectorAll('.checkbox-grid label');
    if (labels.length >= 4) {
        labels[0].childNodes[1].textContent = ` ${t.gps} (50 MAD${t.day})`;
        labels[1].childNodes[1].textContent = ` ${t.babySeat} (40 MAD${t.day})`;
        labels[2].childNodes[1].textContent = ` ${t.fullInsurance} (100 MAD${t.day})`;
        labels[3].childNodes[1].textContent = ` ${t.addDriver} (150 MAD${t.day})`;
    }

    // Update static modal labels that don't have data-i18n yet (injecting valid ones would be better but simple update works)
    // Actually, best to add data-i18n to modal too. For now, let's just leave English or try to map.
}

document.addEventListener('DOMContentLoaded', () => {
    // ... existing init ...
    const langSelector = document.getElementById('language-selector');
    if (langSelector) {
        langSelector.addEventListener('change', (e) => {
            updateLanguage(e.target.value);
        });
    }
    // Set initial language if not set
    updateLanguage('en');
});

// Update renderFleet to use translations
// (We need to modify the existing renderFleet function to use `translations[currentLang].key`)

const fleetData = [
    {
        id: 1,
        model: "Dacia Logan",
        category: "economy",
        price: 250,
        image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        seats: 5,
        transmission: "Manual",
        fuel: "Diesel",
        totalStock: 12,
        booked: 0
    },
    {
        id: 2,
        model: "Hyundai Accent",
        category: "sedan",
        price: 400,
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        seats: 5,
        transmission: "Automatic",
        fuel: "Petrol",
        totalStock: 10,
        booked: 0
    },
    {
        id: 3,
        model: "Toyota Prado",
        category: "suv",
        price: 700,
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        seats: 7,
        transmission: "Automatic",
        fuel: "Diesel",
        totalStock: 6,
        booked: 0
    },
    {
        id: 4,
        model: "Mercedes C-Class",
        category: "luxury",
        price: 1200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa4TjtmVG91l6rY8r64Aru4yBdhE0K0qt-e_B1ObRAugI6-Vnv1kkxdHzT-ggo3ee3o-XF_1YZrr19Wr1UJYzcZ9JzjGMkCBWk-wpHZT__&s=10",
        seats: 5,
        transmission: "Automatic",
        fuel: "Hybrid",
        totalStock: 3,
        booked: 0
    },
    {
        id: 5,
        model: "Renault Clio 5",
        category: "economy",
        price: 300,
        image: "https://fleet.com.pl/images/1140x760/filemanager/photos/uploads/posts/12248/Renault_Clio_V_FL-4.jpg",
        seats: 5,
        transmission: "Manual",
        fuel: "Diesel",
        totalStock: 8,
        booked: 0
    },
    {
        id: 6,
        model: "Volkswagen Passat",
        category: "sedan",
        price: 550,
        image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        seats: 5,
        transmission: "Automatic",
        fuel: "Diesel",
        totalStock: 5,
        booked: 0
    },
    {
        id: 7,
        model: "Range Rover Evoque",
        category: "luxury",
        price: 1400,
        image: "https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        seats: 5,
        transmission: "Automatic",
        fuel: "Diesel",
        totalStock: 2,
        booked: 0
    },
    {
        id: 8,
        model: "Dacia Duster",
        category: "suv",
        price: 450,
        image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        seats: 5,
        transmission: "Manual",
        fuel: "Diesel",
        totalStock: 7,
        booked: 0
    }
];

// State
let selectedCar = null;
let currentFilter = 'all';

/* --- Initialization --- */
document.addEventListener('DOMContentLoaded', () => {
    renderFleet();
    updateTotalFleetCount();
    setupEventListeners();
    setupModalListeners();
    setupDateRestrictions();
});

/* --- Core Logic --- */

function renderFleet() {
    const grid = document.getElementById('car-grid');
    grid.innerHTML = '';
    const t = translations[currentLang];

    const filtered = fleetData.filter(car =>
        currentFilter === 'all' || car.category === currentFilter
    );

    filtered.forEach(car => {
        const available = car.totalStock - car.booked;
        const availableClass = available === 0 ? 'tag-out' : (available < 3 ? 'tag-low' : 'tag-available');

        let availableText = t.available;
        if (available === 0) availableText = t.soldOut;
        else if (available < 3) availableText = t.lowStock;

        // Map specs
        const transmissionMap = { "Manual": t.manual, "Automatic": t.automatic };
        const fuelMap = { "Diesel": t.diesel, "Petrol": t.petrol, "Hybrid": t.hybrid };

        const transmissionDisplay = transmissionMap[car.transmission] || car.transmission;
        const fuelDisplay = fuelMap[car.fuel] || car.fuel;

        const card = document.createElement('div');
        card.className = 'car-card';
        card.innerHTML = `
            <img src="${car.image}" alt="${car.model}" class="car-image">
            <div class="car-details">
                <div class="car-header">
                    <h3>${car.model}</h3>
                    <div class="car-price">
                        <span>${car.price}</span> MAD<small>${t.day}</small>
                    </div>
                </div>
                <div class="car-specs">
                    <span><i class="fas fa-cog"></i> ${transmissionDisplay}</span>
                    <span><i class="fas fa-gas-pump"></i> ${fuelDisplay}</span>
                    <span><i class="fas fa-chair"></i> ${car.seats} ${t.seats}</span>
                </div>
                <span class="availability-tag ${availableClass}">${availableText} (${available})</span>
                
                <div style="margin-top: 15px;">
                    <button class="btn btn-primary btn-block" 
                        onclick="openBookingModal(${car.id})"
                        ${available === 0 ? 'disabled' : ''}>
                        ${available === 0 ? t.unavailable : t.rentNow}
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function updateTotalFleetCount() {
    const total = fleetData.reduce((sum, car) => sum + (car.totalStock - car.booked), 0);
    document.getElementById('total-fleet-count').innerText = total;
}

function setupEventListeners() {
    // Filters
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderFleet();
        });
    });

    // Quick Check Form
    document.getElementById('quick-check-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const category = document.getElementById('quick-category').value;
        currentFilter = category;
        // Update filter UI
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.filter === category);
        });
        renderFleet();
        document.getElementById('fleet').scrollIntoView({ behavior: 'smooth' });
    });
}

/* --- Modal & Booking Logic --- */

function setupModalListeners() {
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.close-modal');

    closeBtn.onclick = () => modal.classList.remove('active');
    window.onclick = (e) => {
        if (e.target === modal) modal.classList.remove('active');
    }

    // Dynamic Price Calculation Listeners
    const inputs = ['book-pickup', 'book-return'];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('change', calculateTotal);
    });

    // Option Checkboxes
    document.querySelectorAll('.option-check').forEach(cb => {
        cb.addEventListener('change', calculateTotal);
    });

    // Booking Submission
    document.getElementById('main-booking-form').addEventListener('submit', handleBookingSubmit);
}

function setupDateRestrictions() {
    const today = new Date().toISOString().split('T')[0];
    ['quick-pickup', 'quick-return', 'book-pickup', 'book-return'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.min = today;
    });
}

// Global function to be called from HTML
window.openBookingModal = function (carId) {
    selectedCar = fleetData.find(c => c.id === carId);
    if (!selectedCar) return;

    const t = translations[currentLang];
    const modal = document.getElementById('booking-modal');

    // Populate car details with translation
    document.getElementById('modal-car-details').innerHTML = `
        <h3>Booking: ${selectedCar.model}</h3>
        <p>${t.category}: <span style="text-transform: capitalize;">${selectedCar.category}</span></p>
        <p>${t.basePrice}: ${selectedCar.price} MAD${t.day}</p>
    `;

    document.getElementById('selected-car-model').value = selectedCar.model;


    // Reset Form
    document.getElementById('main-booking-form').reset();
    document.getElementById('calc-total').innerText = '0';
    document.getElementById('calc-duration').innerText = '0';
    document.getElementById('calc-daily').innerText = selectedCar.price;

    modal.classList.add('active');
};

function calculateTotal() {
    if (!selectedCar) return;

    const startStr = document.getElementById('book-pickup').value;
    const endStr = document.getElementById('book-return').value;

    if (!startStr || !endStr) return;

    const start = new Date(startStr);
    const end = new Date(endStr);
    const diffTime = end - start;
    let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
        // Fallback or explicit 0, but validation prevents submission. 
        // Showing 1 day min price in preview might be better UX, 
        // but keeping 0 until valid dates are picked is safer.
        document.getElementById('calc-duration').innerText = '0';
        document.getElementById('calc-total').innerText = '0';
        return;
    }

    document.getElementById('calc-duration').innerText = diffDays;

    let total = diffDays * selectedCar.price;

    // Calculate Options
    let optionsDailyTotal = 0;
    document.querySelectorAll('.option-check:checked').forEach(cb => {
        optionsDailyTotal += parseInt(cb.value);
    });
    total += (optionsDailyTotal * diffDays);

    // Discount Logic (Optional based on typical specs)
    if (diffDays >= 14) {
        total = total * 0.85; // 15% off
    } else if (diffDays >= 7) {
        total = total * 0.90; // 10% off
    }

    document.getElementById('calc-total').innerText = Math.round(total);
}

function handleBookingSubmit(e) {
    e.preventDefault();

    // Validation
    const age = parseInt(document.getElementById('book-age').value);
    const startStr = document.getElementById('book-pickup').value;
    const endStr = document.getElementById('book-return').value;
    const start = new Date(startStr);
    const end = new Date(endStr);

    if (age < 21) {
        alert("Sorry, driver must be at least 21 years old.");
        return;
    }

    if (end <= start) {
        alert("Return date must be after pickup date.");
        return;
    }

    if (!selectedCar) return;

    // Simulate Booking
    selectedCar.booked += 1;

    const t = translations[currentLang];
    alert(`${t.confirmBooking}!\n\n${t.vehicleType}: ${selectedCar.model}\n${t.total}: ${document.getElementById('calc-total').innerText} MAD\n\n${t.footerText.replace('&copy; 2026 ', '')}`);

    document.getElementById('booking-modal').classList.remove('active');
    renderFleet(); // Update availability UI
    updateTotalFleetCount();
}
