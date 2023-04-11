document.getElementById('image-1').addEventListener('pointerenter', function () {
    document.getElementById('image-1-p').classList.remove('hidden');
})
document.getElementById('image-1').addEventListener('pointerleave', function () {
    document.getElementById('image-1-p').classList.add('hidden');
})