function lockedProfile() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(b => b.addEventListener('click', onClick));

    function onClick(e) {
        const profile = e.target.parentElement;
        const isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;
        if (isLocked) {
            return;
        }

        const hiddenFields = Array.from(profile.querySelectorAll('div'))
            .filter(d => d.id.includes('HiddenFields'))[0];
        const isVisible = hiddenFields.style.display === 'block';
        hiddenFields.style.display = isVisible ? 'none' : 'block';
        e.target.textContent = isVisible ? 'Show more' : 'Hide it';
    }
}