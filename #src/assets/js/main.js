document.addEventListener('DOMContentLoaded', function () {

   const menuLinksData = document.querySelectorAll('.menu__link[data-goto]')
   const iconMenu = document.querySelector('.menu__icon')
   const menuBody = document.querySelector('.menu__body')
   const menuLinks = document.querySelectorAll('.menu__link')

   // CHECK THE DEVICE
   const isMobile = {
      Android: function () {
         return navigator.userAgent.match(/Android/i)
      },
      BlackBerry: function () {
         return navigator.userAgent.match(/BlackBerry/i)
      },
      IOS: function () {
         return navigator.userAgent.match(/iPhone|iPad|iPod/i)
      },
      Opera: function () {
         return navigator.userAgent.match(/Opera Mini/i)
      },
      Windows: function () {
         return navigator.userAgent.match(/IEMobile/i)
      },
      any: function () {
         return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
      }
   }

   if (isMobile.any()) {
      document.body.classList.add('_touch')
      let menuArrows = document.querySelectorAll('.menu__arrow')
      if (menuArrows.length > 0) {
         for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.onclick = (() => {
               menuArrow.parentElement.classList.toggle('_active')
            })

         }
      }
   } else {
      document.body.classList.add('_pc')
   }

   // SCROLL
   if (menuLinksData) {
      menuLinksData.forEach(menuLink => {
         menuLink.addEventListener('click', onMenuLinkClick)
      })
      function onMenuLinkClick(e) {
         const menuLink = e.target
         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight
            window.scrollTo({
               top: gotoBlockValue,
               behavior: 'smooth'
            })
            e.preventDefault()
         }
      }
   }

   // BURGER
   if (iconMenu) {
      iconMenu.onclick = (() => {
         iconMenu.classList.toggle('_active')
         menuBody.classList.toggle('_active')
         document.body.classList.toggle('_lock')
      })
   }

   // CLOSE MENU WHEN CLICK ON LINK
   for (const link of menuLinks) {
      link.onclick = (() => {
         document.body.classList.remove('_lock')
         iconMenu.classList.remove('_active')
         menuBody.classList.remove('_active')
      })
   }
   // IBG METHOD
   // function ibg() {
   //    let ibg = document.querySelectorAll(".ibg");
   //    for (var i = 0; i < ibg.length; i++) {
   //       if (ibg[i].querySelector('img')) {
   //          ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
   //       }
   //    }
   // }
   // ibg();
});

// PRELOADER
// let load = document.querySelector('.loading');
// window.onload = (function () {
//   load.classList.add('none');
// });
//  DYNAMIC ADAPTIVE
// data - da="WHERE TO MOVE (CLASS), WHICH ACCOUNT, AT WHAT SCREEN SIZE"
// (function () {
//   var index;
//   var daBreakpoint;
//   var daType;
//   var customAdapt, daArray, daBreakpoint, daDestination, daElement, daElements, daElementsArray, daMatchMedia, daMove, daPlace, daType, dynamicAdapt, dynamicAdaptBack, dynamicAdaptSort, el, index, indexInParent, indexOfElements, number, originalPositions;
//   originalPositions = [];
//   daElements = document.querySelectorAll('[data-da]');
//   daElementsArray = [];
//   daMatchMedia = [];
//   dynamicAdapt = function (e) {
//     var actualIndex, daBreakpoint, daClassname, daDestination, daElement, daPlace, el, index;
//     index = 0;
//     while (index < daElementsArray.length) {
//       el = daElementsArray[index];
//       daElement = el.element;
//       daDestination = el.destination;
//       daPlace = el.place;
//       daBreakpoint = el.breakpoint;
//       daClassname = '_dynamic_adapt_' + daBreakpoint;
//       if (daMatchMedia[index].matches) {
//         if (!daElement.classList.contains(daClassname)) {
//           actualIndex = indexOfElements(daDestination)[daPlace];
//           if (daPlace === 'first') {
//             actualIndex = indexOfElements(daDestination)[0];
//           } else if (daPlace === 'last') {
//             actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
//           }
//           daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
//           daElement.classList.add(daClassname);
//         } else {

//         }
//       }
//       if (daElement.classList.contains(daClassname)) {
//         dynamicAdaptBack(daElement);
//         daElement.classList.remove(daClassname);
//       }
//       index++;
//     }
//     customAdapt();
//   };
//   dynamicAdaptBack = function (el) {
//     var actualIndex, daIndex, indexPlace, originalPlace, parentPlace;
//     daIndex = el.getAttribute('data-da-index');
//     originalPlace = originalPositions[daIndex];
//     parentPlace = originalPlace['parent'];
//     indexPlace = originalPlace['index'];
//     actualIndex = indexOfElements(parentPlace, true)[indexPlace];
//     parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
//   };
//   indexInParent = function (el) {
//     var children;
//     children = Array.prototype.slice.call(el.parentNode.children);
//     return children.indexOf(el);
//   };
//   indexOfElements = function (parent, back) {
//     var children, childrenArray, childrenElement, i;
//     children = parent.children;
//     childrenArray = [];
//     i = 0;
//     while (i < children.length) {
//       childrenElement = children[i];
//       if (back) {
//         childrenArray.push(i);
//       } else {

//       }
//       if (childrenElement.getAttribute('data-da') === null) {
//         childrenArray.push(i);
//       }
//       i++;
//     }
//     return childrenArray;
//   };
//   dynamicAdaptSort = function (arr) {
//     arr.sort(function (a, b) {
//       if (a.breakpoint > b.breakpoint) {
//         return -1;
//       } else {
//         return 1;
//       }
//     });
//     arr.sort(function (a, b) {
//       if (a.place > b.place) {
//         return 1;
//       } else {
//         return -1;
//       }
//     });
//   };
//   customAdapt = function () {
//     var viewport_width;
//     viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
//   };
//   if (daElements.length > 0) {
//     number = 0;
//     index = 0;
//     while (index < daElements.length) {
//       daElement = daElements[index];
//       daMove = daElement.getAttribute('data-da');
//       if (daMove !== '') {
//         daArray = daMove.split(',');
//         daPlace = daArray[1] ? daArray[1].trim() : 'last';
//         daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
//         daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
//         daDestination = document.querySelector('.' + daArray[0].trim());
//       }
//       if (daArray.length > 0 && daDestination) {
//         daElement.setAttribute('data-da-index', number);
//         originalPositions[number] = {
//           'parent': daElement.parentNode,
//           'index': indexInParent(daElement)
//         };
//         daElementsArray[number] = {
//           'element': daElement,
//           'destination': document.querySelector('.' + daArray[0].trim()),
//           'place': daPlace,
//           'breakpoint': daBreakpoint,
//           'type': daType
//         };
//         number++;
//       }
//       index++;
//     }
//     dynamicAdaptSort(daElementsArray);
//     index = 0;
//     while (index < daElementsArray.length) {
//       el = daElementsArray[index];
//       daBreakpoint = el.breakpoint;
//       daType = el.type;
//       daMatchMedia.push(window.matchMedia('(' + daType + '-width: ' + daBreakpoint + 'px)'));
//       daMatchMedia[index].addListener(dynamicAdapt);
//       index++;
//     }
//   }
//   dynamicAdapt();
// })();
