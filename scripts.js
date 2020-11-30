/* side-menu */

function burgerClickHandler() {
    let popup = document.getElementsByClassName('menu-popup')[0];
    popup.style.display = 'block';
}

function closeSideMenu() {
    let popup = document.getElementsByClassName('menu-popup')[0];
    popup.style.display = 'none';
}

let burgerBtn = document.getElementsByClassName('burger-button')[0];
burgerBtn.addEventListener('click', burgerClickHandler)

let sideMenuCloseBtn = document.getElementsByClassName('side-burger')[0];
sideMenuCloseBtn.addEventListener('click', closeSideMenu)

let sideMenuItems = document.querySelectorAll('.side-menu-item');
sideMenuItems.forEach((item, index) => {
    item.addEventListener('click', closeSideMenu);
})

/* slider */

let Slider = (selector) => {
    let sliderElement = document.querySelector(selector);
    let sliderWrapper = sliderElement.querySelector('.slider-wrapper');
    let sliderItems = sliderElement.querySelectorAll('.slider-item');
    let sliderControlLeft = sliderElement.querySelector('.slider-control-left');
    let sliderControlRight = sliderElement.querySelector('.slider-control-right');

    let step = 100;
    let items = [];
  
    sliderItems.forEach(
      (item, index) => {
        items.push({
          item: item, 
          position: index, 
          transform: 0 
        });
    });
  
  
    let state = {
      position: 0,
      transform: 0
    }
  
    let position = {
      getItemMax: () => {
        let itemIndex = 0;
  
        items.forEach((item, index) => {
          if (item.position > items[itemIndex].position) {
            itemIndex = index;
          }
        });
        return itemIndex;
      },
  
      getMax: function () {
        return items[position.getItemMax()].position;
      },
  
      getItemMin: function () {
        var itemIndex = 0;
  
        items.forEach(function (item, index) {
          if (item.position < items[itemIndex].position) {
            itemIndex = index;
          }
        });
  
        return itemIndex;
      },
  
      getMin: () => {
        return items[position.getItemMin()].position;
      }
    }
  
    let shiftSlider = (direction) => {  
      if (direction === 'right') {
        state.position++;
        if (state.position > position.getMax()) {
          let nextItem = position.getItemMin();
          items[nextItem].position = position.getMax() + 1;
          items[nextItem].transform += items.length * 100;
          items[nextItem].item.style.transform = `translateX(${items[nextItem].transform}%)`;
        }
        state.transform -= step;
      } 
  
      if (direction === 'left') {
        state.position--;
        if (state.position < position.getMin()) {
          let nextItem = position.getItemMax();
          items[nextItem].position = position.getMin() - 1;
          items[nextItem].transform -= items.length * 100;
          items[nextItem].item.style.transform = `translateX(${items[nextItem].transform}%)`;
  
        }
        state.transform += step;
      }
  
      sliderWrapper.style.transform = `translateX(${state.transform}%)`;
    }
  
    let handleControleLeft = (ev) => shiftSlider('left');
    let handleControleRight = (ev) => shiftSlider('right');
  
    sliderControlLeft.addEventListener('click', handleControleLeft);
    sliderControlRight.addEventListener('click', handleControleRight);
}
  
let slider = Slider('.slider') 
  

/* portfolio-tabs */



function chooseRandomItem(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

function galleryImgShuffle(ev) {
    let imagesListWrapper = document.querySelector('.portfolio-gallery');
    imagesListWrapper.innerHTML = '';

    for (let i = 0; i < 12; i++) {
        let img = chooseRandomItem(images);
        let imgId = `gallery-img-${i}`;
        let imgElement = document.createElement('img');
        imgElement.id = imgId;
        imgElement.alt = imgId;
        imgElement.src = img;
        imagesListWrapper.appendChild(imgElement);
    }
}

let galleryBtns = document.querySelectorAll('.filter-list-item');
galleryBtns.forEach((item, index) => {
    item.addEventListener('click', galleryImgShuffle);
})
