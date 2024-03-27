// FADE TRANSITION
const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    })
})

const hidEl = document.querySelectorAll('.hidden');
hidEl.forEach((el) => obs.observe(el));

// MAKE THE DROPDOWN CLOSE WHEN YOU CLICK ON THE OUTSIDE
document.addEventListener('click', e =>{
    const isDropdownButton = e.target.matches('[data-dropdown-button]')
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

// MAKE THE NAVBAR SMALL WHEN SCROLLS
const header = document.querySelector('header')
window.addEventListener ('scroll', function() {
    header.classList.toggle ('sticky', window.scrollY > 100);
})


// READ MORE & READ LESS
$(document).ready(function() {
    $(".invisible-content").hide();
    $(document).on('click', "#btn", function() {
        var moreLessButton=$(".invisible-content").is(":visible")?'Read More':'Read Less';
        $(this).text(moreLessButton);
        $(this).parent(".dean-msg").find(".invisible-content").toggle();
        $(this).parent(".dean-msg").find(".visible-content").toggle();
    })
})