var app = new Vue({
  el: '.app',
  data: {
    first: 0,
    second: 0,
    modalOpened: false,
    result: 'result here'
  },
  methods: {
    sum(a, b) {
      if (isNaN(a) || isNaN(b)) {
        return 'Введите число';
      } else {
        return parseFloat(a) + parseFloat(b);
      }
    },
    showResult () {
      this.result = this.sum(this.first, this.second)
      this.modalOpened = true;
    },
    closeResult () {
      this.modalOpened = false;
    }
  }
})
