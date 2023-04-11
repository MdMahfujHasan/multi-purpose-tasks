const displayOnPointerEnter = (div, paragraph, image) => {
    document.getElementById(div).addEventListener('pointerenter', function () {
        document.getElementById(paragraph).classList.remove('hidden');
    })
}
const hideOnPointerLeave = (div, paragraph) => {
    document.getElementById(div).addEventListener('pointerleave', function () {
        document.getElementById(paragraph).classList.add('hidden');
    })
}

displayOnPointerEnter('img-1', 'img-1-p');
hideOnPointerLeave('img-1', 'img-1-p');

displayOnPointerEnter('img-2', 'img-2-p');
hideOnPointerLeave('img-2', 'img-2-p');

displayOnPointerEnter('img-3', 'img-3-p');
hideOnPointerLeave('img-3', 'img-3-p');

displayOnPointerEnter('img-4', 'img-4-p');
hideOnPointerLeave('img-4', 'img-4-p');

displayOnPointerEnter('img-5', 'img-5-p');
hideOnPointerLeave('img-5', 'img-5-p');

displayOnPointerEnter('img-6', 'img-6-p');
hideOnPointerLeave('img-6', 'img-6-p');

displayOnPointerEnter('img-7', 'img-7-p');
hideOnPointerLeave('img-7', 'img-7-p');

displayOnPointerEnter('img-8', 'img-8-p');
hideOnPointerLeave('img-8', 'img-8-p');