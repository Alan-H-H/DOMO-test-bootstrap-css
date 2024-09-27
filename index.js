var $d = document;

window.onload = function() {
    var items = $d.getElementsByClassName('item');

    for (var i = 0; i < items.length; i++) {
        var itemsText = items[i].textContent;
        var splitedItem = itemsText.split('');

        while (splitedItem.length < 13) {
            splitedItem.push('\u00A0'); 

        items[i].innerText = splitedItem.join('');
    }
}
};
