(() => {
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    
    const imageWrapper = document.querySelector(".image-wrapper");

    let position = 0

    function movePhotoLeft () {
        if (position == -210) {
            
            imageWrapper.style.transform = `translateX(${position}vw)`
         
        } else {
            
            imageWrapper.style.transform = `translateX(${position - 70}vw)`
            position = position - 70
        }
        
    }

    function movePhotoRight () {
  
        if (position == 0) {                  
            
            imageWrapper.style.transform = `translateX(${position}vw)`  

        } else {
            
            imageWrapper.style.transform = `translateX(${position + 70}vw)`
            position = position + 70
        }

    }

    rightArrow.addEventListener("click", movePhotoRight);
    leftArrow.addEventListener("click", movePhotoLeft);

})();