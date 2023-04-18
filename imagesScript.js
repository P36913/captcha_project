function highlight(img) {
    img.classList.toggle('highlighted');
}

function check() {
    const imageContainer = document.getElementById("imageContainer");
    const images = imageContainer.querySelectorAll("img");

    var goodCounter = 0;
    var badCounter = 0;
    
    images.forEach((img) => {
        if (img.classList.contains('highlighted')) {
            if (img.alt = 'CAPY') {
                goodCounter++;
            } else {
                badCounter++;
            }
        }
    });

    if (goodCounter == 1 && badCounter == 0) {
        return 'congrats, you the capy spotter'
    } else {
        return 'watch some memes, retard'
    }
}

function reGenerate() {
    const imagesUrls = [
    "images/capy.jpg",
    "images/cat1.jpg",
    "images/cat2.jpg",
    "images/cat3.jpg",
    "images/dog1.jpg",
    "images/dog2.jpg",
    "images/dog3.jpg",
    "images/raccoon1.jpg",
    "images/raccoon2.jpg",
    "images/raccoon3.jpg",
    "images/panda1.jpg",
    "images/panda2.jpg",
    "images/panda3.jpg",
    "images/lama1.jpg",
    "images/lama2.jpg"
    ];

    const imageContainer = document.getElementById("imageContainer");
    const images = imageContainer.querySelectorAll("img");

    let usedIndexes = [];
    
    images.forEach((img) => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * imagesUrls.length);
        } while (usedIndexes.includes(randomIndex));
        
        const randomImage = imagesUrls[randomIndex];
        img.src = randomImage;
        //img.alt = `Image ${randomIndex + 1}`;
        if (randomImage == 'images/capy.jpg') {
            img.alt = 'CAPY';
        } else {
            img.alt = `Image ${randomIndex + 1}`;
        }

        if (img.classList.contains('highlighted')) {
            img.classList.toggle('highlighted');
        }
        
        usedIndexes.push(randomIndex);
    });
}