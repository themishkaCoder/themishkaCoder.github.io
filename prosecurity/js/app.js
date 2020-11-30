var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      adaptiveMenu: "mobile-menu",
      activeMenu: false
    },
    methods: {
      showHideMenu: function () {
        this.activeMenu == false ? (this.adaptiveMenu = "mobile-menu mobile-menu-show", this.activeMenu = true) : (this.adaptiveMenu = "mobile-menu mobile-menu-hide", this.activeMenu = false)
      },
      hideMenu: function () {
        this.activeMenu == true ? (this.adaptiveMenu = "mobile-menu mobile-menu-hide", this.activeMenu = false) : (this.adaptiveMenu = "mobile-menu mobile-menu-show", this.activeMenu = true)
      }
    }
  })