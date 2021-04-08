<template>
    <div class="flex justify-center">
      <div class="w-1/2 flex flex-row">
        <div class="w-1/3 mr-5">
          <FilterProducts @filter-changed="onFilterChanged" />     
        </div>
        <div class="w-3/4">
          <Content :values-filtred="valuesFiltred"/>        
        </div>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Content from '@/components/Content.vue'
import FilterProducts from '@/components/FilterProducts.vue'

export default {
  name: 'Home',
  components: {
    Content,
    FilterProducts
  },
  data(){
    return{
      valuesFiltred: null
    }
  },
  methods:{
    onFilterChanged(value){
      this.valuesFiltred = value;
    }
  }
}
</script>
