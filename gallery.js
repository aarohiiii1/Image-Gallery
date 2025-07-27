function filterImages(category) {
    const images = document.querySelectorAll('.image');

    images.forEach(img => {
        // Check class against selected category
        if (category === 'all') {
            img.style.display = 'block';
        } else {
            if (img.classList.contains(category)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        }
    });
}
