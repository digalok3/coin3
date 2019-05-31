export const imagesArray = (imagesQuantity) => {
    let photoArray =  [];
    for (let index = 1; index <= imagesQuantity; index++) {
        photoArray.push(`assets/unsplashImages/${index}.jpg`);
    }
    return photoArray;
}


