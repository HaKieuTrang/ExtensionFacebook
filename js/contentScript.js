var classImg = ['spotlight', 'scaledImageFitWidth', 'scaledImageFitHeight'];
$('.info_class').remove();
classImg.forEach(getInfo);

function getInfo(item) {
    var x = document.getElementsByClassName(item);
    var i;
    for (i = 0; i < x.length; i++) {
        var val = x[i].getAttribute('alt');
        x[i].setAttribute('id', 'img_' + i);
        if (val !== '') {
            var str = 'Trong hình ảnh có thể có:',
                check = val.indexOf(str),
                len = str.length
            info = '';
            if (check >= 0) {
                info = val.slice(len);
                var new_element = document.createElement('p');
                var id_name = 'img_info_' + i;
                new_element.setAttribute('id', id_name);
                new_element.setAttribute('class', 'info_class');
                new_element.textContent = info;
                $('#img_' + i).after(new_element);
            }
            console.log(i + ': ' + info);
        }
    }
}

