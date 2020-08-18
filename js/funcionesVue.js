var app1 = new Vue({
  el: '#app1',
  data: {
    mostrar: true
  },
  methods: {
    mostrarFormasDeLogin: function () {
      this.mostrar = !this.mostrar;
      console.log(this.mostrar);
    }
  }
})