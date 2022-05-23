let image_foto_new = document.querySelector('#main_photo').src;
let image_foto = image_foto_new;

document.querySelector('.images_personal').onclick = e =>{ // замещение фото по нажатию
    image_foto = e.target.src;
    e.target.src = image_foto_new;
    image_foto_new = image_foto;
    document.querySelector('#main_photo').src = image_foto;
}

document.querySelector('.button_contact_us').addEventListener('click', function() { //кнопка вызова модального окна
    document.querySelector ('.modal').style.display = "flex";
});

document.querySelector('.btn_back').addEventListener('click', function() { //закрытие формы
    document.querySelector ('.modal').style.display = "none";
    document.querySelector('.name').value = '';
    document.querySelector('.mail').value = '';
    document.querySelector('.message_error').style.display = 'none';
    document.querySelector('.message_good').style.display = 'none';

});

document.querySelector('.btn_modal').addEventListener('click', function() { // открытие модального окна
    if (document.querySelector('.name').value == '' || document.querySelector('.mail').value == '') {
        document.querySelector('.message_error').style.display = 'block';
        document.querySelector('.message_good').style.display = 'none';
    } else {
        document.querySelector('.message_error').style.display = 'none';
        document.querySelector('.message_good').style.display = 'block';
    }
});

document.querySelector('.products_galery').onclick = e =>{ // открытие фото по нажатию
    document.querySelector('.open_foto').style.display = 'flex';
    document.querySelector('.close_foto').style.display = 'block';
    document.querySelector('.open_foto_img').src = e.target.src;
    foto_nuw = e.target.alt;
}

document.querySelector('.close_foto').addEventListener('click', function() { //закрытие фото
    document.querySelector('.open_foto').style.display = 'none';
    document.querySelector('.close_foto').style.display = 'none';
});

let all_images_galery = document.querySelector('.products_galery').querySelectorAll('.galery_image');
let foto_nuw;

document.querySelector('.back').addEventListener('click', function() {
    for (let i = 0; i < all_images_galery.length+1; i++) {
        if (i+1 == foto_nuw) {
            document.querySelector('.open_foto_img').src = all_images_galery[i-1].src;
            if (foto_nuw != 0) {
                foto_nuw--;
            }       
        }
    }
});

document.querySelector('.next').addEventListener('click', function() {
    for (let i = all_images_galery.length; i > 0; i--) {
        if (i == foto_nuw) {
            document.querySelector('.open_foto_img').src = all_images_galery[i].src;
            if (foto_nuw != 8) {
                foto_nuw++;
            }    
        }
    }
});