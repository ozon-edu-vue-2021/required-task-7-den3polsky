export default class ListView {

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