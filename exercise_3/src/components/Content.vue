<template>
  <div class="grid grid-cols-2 gap-2 w-full h-full">
    <div class="col-span-2 self-center" v-if="!productsFiltredSize" >
      No Result
    </div>
    <div
    v-else 
    class="bg-white border w-full h-full justify-self-center h-2/3 cursor-pointer"  
    v-for="(product, idx) in productsFiltred" :key="idx">
      <div class="flex flex-col justify-center items-center h-full">
        <span>{{product.name}} - {{product.size}} inch</span>
        <span>${{product.price}}</span>
      </div>
    </div>
  </div>
</template>

<script>

import products from '../mocks/products.json'

export default {
  name: 'Content',
  props: {
    valuesFiltred: {
      type: Array,
    }
  },
  data(){
    return{
      products
    }
  },
  computed:{
    productsFiltred(){
      let array = [];

      (this.valuesFiltred || []).forEach(value => {
        const arrayFiltred = this.products.filter(product => product.size == value)
        array = [
          ...array,
          ...arrayFiltred
          ];
      });

      return array;
    },
     productsFiltredSize(){
      return this.productsFiltred.length;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
