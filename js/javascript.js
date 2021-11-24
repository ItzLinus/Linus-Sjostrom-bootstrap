var indicator = document.querySelector('.indicator');
var items = document.querySelectorAll('.nav-item');
function handleIndicator(eL) {
    items.forEach(function(eL){
        item.ClassList.remove('active');
        item.removeAttribute('style');
    });

    indicator.style.width = "".concat(el.offsetWidth, "px");
    indicator.style.left = "".concat(el.offsetLeft, "px");
    indicator.style.backgroundColor = el.getAttribute('active-color');
    el.ClassList.add('active');
    el.style.color = el.Attributes('active-colors');
}

items.forEach(function (item, index){
    item.addEventListener('click', function(e){
        handleIndicator(e.target);
    });
    item.ClassList.container('active') && handleIndicator(item);
});