/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"Петя","friends":[10,2,6]},{"id":2,"name":"Вася","friends":[5,1,3]},{"id":3,"name":"Оля","friends":[9,4,3]},{"id":4,"name":"Максим","friends":[11,12,2]},{"id":5,"name":"Елена","friends":[7,8,4]},{"id":6,"name":"Иван","friends":[6,1,12]},{"id":7,"name":"Никита","friends":[1,8,5]},{"id":8,"name":"Марат","friends":[11,12,10]},{"id":9,"name":"Анатолий","friends":[1,2,3]},{"id":10,"name":"Наташа","friends":[8,4,2]},{"id":11,"name":"Марина","friends":[1,5,8]},{"id":12,"name":"Кирилл","friends":[5,2,12]}]');

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ListView)
/* harmony export */ });
class ListView {

     // Список пользователей будет хранится в map, 
     // где свойство friends у объектов это список ссылок на соответствующие элементы
     items = new Map()

     LIST_SIZE = 3

     selected = null
     
     constructor(items_from_json, detail_id) {

          this.makeMap(items_from_json)         
          this.initSelectors()
          this.initEventListners()

          if (Number.isInteger(detail_id)) {
               this.selected = this.items.get(detail_id)
          }        
     }

     makeMap(items_from_json) {
          
          items_from_json.forEach(people => this.items.set(people.id, {name: people.name, countFriend: 0, friends: []}) )

          items_from_json.forEach(people => {
               
                    people.friends.forEach(id => {

                         const friend = this.items.get(id);
                         this.items.get(people.id).friends.push(friend)                         
                         friend.countFriend++
                    }) 
          } )
     }

     initSelectors() {

          this.back = document.querySelector('.back')
          this.detailUserName = document.querySelector('.details-view__user-name')
          this.detailView = document.querySelector('.details-view')         
          this.contactList = document.querySelector('.contacts-list')
          this.friendsList = document.querySelector('.friends-list')
          this.notFriendsList = document.querySelector('.not-friends-list')
          this.popularList = document.querySelector('.popular-list')                             
     }

     initEventListners() {

          this.back.addEventListener('click', () => {
               this.selected = null
               window.location.hash = ''
               this.detailView.style.display =  this.selected ?  'block' : 'none'
               this.render()               
          })                
          
     }

     getFriends = (listSize) => this.selected?.friends.slice(0, listSize) || []

     getNotFriends = (listSize) =>  
                         [...this.items.values()]
                         .filter(people => this.selected !== people && this.selected.friends.every(friend => friend !== people))                                             
                         .sort((a, b) => 0.5 - Math.random())
                         .slice(0, listSize)
                              
     getPopular = (listSize) => [...this.items.values()]                        
                                .sort((a,b) =>  {
                                        const diff = b.countFriend - a.countFriend
                                        return diff !== 0 ? diff : a.name < b.name ? -1 : 1
                                })
                                .slice(0, listSize)
     render() {

         this.selected ?  this.renderDetail() :  this.renderContacsList()
 
     }

     renderContacsList() {
   
          this.clearList(this.contactList)

          this.items.forEach((people, key) => {

               const li = document.createElement('li')
               li.innerHTML = `<strong>${people.name}</strong>`
               this.contactList.appendChild(li)

               li.addEventListener('click', () => {

                    window.location.hash = 'detail-' + key
                    this.selected = people
                    this.renderDetail()
               })
          })
     }


     renderDetail() {

          this.detailView.style.display =  this.selected ?  'block' : 'none'
          this.detailUserName.textContent = this.selected ? this.selected.name : ''

          this.renderFriendsList(this.friendsList, this.getFriends(this.LIST_SIZE))
          this.renderFriendsList(this.notFriendsList, this.getNotFriends(this.LIST_SIZE))
          this.renderFriendsList(this.popularList, this.getPopular(this.LIST_SIZE))
 
     }

     clearList(list) {

          while (list?.firstChild)
           list.removeChild(list.firstChild)
     }

     renderFriendsList(listNode, items) {
         
          this.clearList(listNode)
         
          items.forEach(friend => {
               const li = document.createElement('li')
               li.innerHTML = `<i class="fa fa-male"></i><span>${friend.name}</span>`
               listNode.appendChild(li)
          })

     }
}

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _ListVeiw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);






const hash = window.location.hash
const [_,id] = hash.split('-')

const List = new _ListVeiw__WEBPACK_IMPORTED_MODULE_1__["default"](_data_json__WEBPACK_IMPORTED_MODULE_0__, Number(id))

List.render()

})();

/******/ })()
;