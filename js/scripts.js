function showCategory(category) {
    // Update active tab
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active-tab');
        tab.classList.add('bg-amber-100', 'text-amber-800');
    });
    
    const clickedTab = event.currentTarget;
    clickedTab.classList.remove('bg-amber-100', 'text-amber-800');
    clickedTab.classList.add('active-tab');
    
    // Show all sections if "all" is selected
    if (category === 'all') {
        const sections = document.querySelectorAll('.menu-section');
        sections.forEach(section => {
            section.style.display = 'block';
        });
        const menu = document.querySelector('.bg-white.sticky.top-0.z-10.shadow-md');
        if (menu) {
            const menuOffset = menu.offsetTop;
            window.scrollTo({ top: menuOffset, behavior: 'smooth' });
        }
        return;
    }
    
    // Hide all sections first
    const allSections = document.querySelectorAll('.menu-section');
    allSections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show only the selected category
    const selectedSections = document.querySelectorAll(`#${category}, #${category}-special`);
    selectedSections.forEach(section => {
        if (section) {
            section.style.display = 'block';
        }
    });
    
    // Special cases for combined categories
    if (category === 'desserts') {
        const dessertSections = document.querySelectorAll('#desserts, #crepes, #omelettes');
        dessertSections.forEach(section => {
            if (section) {
                section.style.display = 'block';
            }
        });
    }
    if (category === 'cocktails') {
        const cafeSections = document.querySelectorAll('#cocktails, #milkshake');
        cafeSections.forEach(section => {
            if (section) {
                section.style.display = 'block';
            }
        });
    }
if (category === 'boissons') {
        const cafeSections = document.querySelectorAll('#boissons-chaudes, #boissons-fraiches');
        cafeSections.forEach(section => {
            if (section) {
                section.style.display = 'block';
            }
        });
    }


    if (category === 'patisseries') {
        const patisserieSections = document.querySelectorAll('#patisseries');
        patisserieSections.forEach(section => {
            if (section) {
                section.style.display = 'block';
            }
        });
    }
    
    if (category === 'cafe') {
        const cafeSections = document.querySelectorAll('#cafe, #cafe-special, #croissant');
        cafeSections.forEach(section => {
            if (section) {
                section.style.display = 'block';
            }
        });
    }
    const menu = document.querySelector('.bg-white.sticky.top-0.z-10.shadow-md');
    if (menu) {
        const menuOffset = menu.offsetTop;
        window.scrollTo({ top: menuOffset, behavior: 'smooth' });
    }
}

