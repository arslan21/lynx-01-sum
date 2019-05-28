var app = new Vue({
  el: '.app',
  data: {
    modalOpened: false,
    result: 'result here'
  },
  methods: {
    sum(a, b) {
      return a + b;
    },
    showResult () {
      this.result = this.sum(2, 3)
      this.modalOpened = true;
    },
    closeResult () {
      this.modalOpened = false;
    }
  }
})
