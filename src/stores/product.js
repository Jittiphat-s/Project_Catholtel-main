// import { ref, computed } from 'vue'
// import { defineStore } from 'pinia'

// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })


import { defineStore } from "pinia";
import { ref } from 'vue';
import { computed } from 'vue';

export const productStore = defineStore('product', () => {

    const load_product = computed(() => productList.value.length > 0 )
    
    const productList = ref([
    { 
    id: 1, name: 'A', price:189 ,
    img: "",
    type: "A",
    detail:'j.'
    },{ 
    id: 2, name: 'I',price:199,
    img: "",
    type: "R",
    detail:'i.'
    },{ 
    id: 3, name: 'H',price:159,
    img: "",
    type: "H",
    detail:'h.'
    },{ 
    id: 4, name: 'o',price:169,
    img: "",
    type: "o",
    detail:'g'
    },{ 
    id: 5, name: 'e',price:149,
    img: "",
    type: "e",
    detail:'f.'
    },{ 
    id: 6, name: 'c',price:189,
    img: "",
    type: "C",
    detail:'e.'
    },{ 
    id: 7, name: 'M',price:259,
    img: "",
    type: "G",
    detail:'d.'
    },{ 
    id: 8, name: 't',price:239,
    img: "",
    type: "T",
    detail:'c.'
    },{ 
    id: 9, name: 'S',price:299,
    img: "",
    type: "y",
    detail:'b.'
    },{ 
    id: 10, name: 'n',price:99,
    img: "",
    type: "n",
    detail:'a.'
    },
    ]);

    return {productList, load_product }

});