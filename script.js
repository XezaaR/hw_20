(()=>{
    const imgDB =[
        'img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.png',
    ]

    const render = () => {
        const imgList = document.querySelector('#imgList');
        const alertContent = document.querySelector('#alertContent');
        const imgContent = document.querySelector('#imgContent');
        const alertZone = document.querySelector('#alertZone');

        // Create a close button and add it to the alertContent
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = 'Close';
        closeBtn.addEventListener('click', () => {
            alertContent.classList.add('hide');
            alertZone.classList.add('hide');
        });
        alertContent.appendChild(closeBtn);

        let currentImg = 0;
        imgContent.addEventListener('click', () => {
            currentImg = (currentImg + 1) % imgDB.length;
            imgContent.src = imgDB[currentImg];
            if (currentImg === imgDB.length - 1) {
                alertContent.classList.add('hide');
                alertZone.classList.add('hide');
            }
        });

        // Add event listeners to each image in the imgList
        imgDB.forEach((imgSrc) => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.classList.add('img_content');
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.marginRight = '20px';
            img.addEventListener('click', () => {
                currentImg = imgDB.indexOf(imgSrc);
                alertContent.classList.remove('hide');
                alertZone.classList.remove('hide');
                imgContent.src = imgSrc;
            });
            imgList.appendChild(img);
        });
    }
    render();
})();