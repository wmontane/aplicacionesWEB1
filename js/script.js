const miDiv = document.getElementById('miDiv');

miDiv.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});

miDiv.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});