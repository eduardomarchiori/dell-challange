<template>
<div>
  <div>
    <div class="bg-gray-100 border-0 rounded-md p-5 text-left mb-5">      
      <div class="flex justify-between">
        <span>Filter Results</span>
        <span @click="cleanFilter" class="text-blue-400 cursor-pointer">Clear All</span>
      </div>
      <div class="flex justify-center p-5">
        <div class="grid grid-cols-2 gap-2 w-full">
          <div 
          v-for="(size, idx) in sizes" 
          :key="idx"
          class="bg-blue-400 border-0 rounded-full text-center">
            <span class="mr-3">
              {{size}}
            </span>
            <span @click="removeSize(size)" >
              <i class="fas fa-times text-white cursor-pointer"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="bg-gray-100 border-0 rounded-md p-5 text-left">
      <div class="flex justify-between w-full">
        <div>
          <span>Screen Size</span>
        </div>

        <div @click="handleSizes">
          <i class="fas fa-angle-up"></i>
        </div>
      </div>
      <div v-if="showSizes">
        <div>
          <input type="checkbox" id="17" value="17" v-model="sizes">
          <label for="17">17 inch</label>
        </div>
        <div>
          <input type="checkbox" id="15" value="15" v-model="sizes">
          <label for="15">15 inch</label>
        </div>
        <div>
          <input type="checkbox" id="14" value="14" v-model="sizes">
          <label for="14">14 inch</label>
        </div>
        <div>          
          <input type="checkbox" id="13" value="13" v-model="sizes">
          <label for="13">13 inch</label>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'FilterProducts',
  watch:{
    sizes(){
      this.$emit('filter-changed', this.sizes)
    }
  },
  data(){
    return{
      sizes: [],
      showSizes: true
    }
  },
  methods:{
    cleanFilter(){
      this.sizes = [];
    },
    removeSize(size){
      this.sizes = this.sizes.filter(value => value != size);
    },
    handleSizes(){
      this.showSizes = !this.showSizes;
    }
  }
}
</script>
