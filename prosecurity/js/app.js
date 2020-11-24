var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    adaptiveMenu: "adaptive-menu",
    activeMenu: false
  },
  methods: {
    moveDown: function () {
      window.scrollTo({
        top: 5000,
        behavior: "smooth"
      });
      console.log("Test")
    },

    showHideMenu: function () {
      this.activeMenu == false ? (this.adaptiveMenu = "adaptive-menu adaptive-menu-show", this.activeMenu = true) : (this.adaptiveMenu = "adaptive-menu adaptive-menu-hide", this.activeMenu = false)
    }
  }
})


  // const scrollToTop = () => {
  //   const c = document.documentElement.scrollTop || document.body.scrollTop;
  //   if (c > 0) {
  //     window.requestAnimationFrame(scrollToTop);
  //     window.scrollTo(0, c - c / 8);
  //   }
  // };

  // // Example
  // scrollToTop();