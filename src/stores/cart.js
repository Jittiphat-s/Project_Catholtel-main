import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss'

import { productStore } from './product'

// cartList [product]

export const cartStore = defineStore('cartStore', () => {

    const cartList = ref([])

    const add_cart = (id, name, price, counter = 1) => {
        const data = {
            id,
            name,
            price,
            counter,
        }
        const findId = cartList.value.find(e => e.id === data.id)

        if(findId){
            cartAlert_failed()
        }else{
            cartList.value.push(data)
            saveLocalStorage()
            cartAlert_add()
        }
    }

// send-data-Product-to-orderList

    const orderList = ref([])

    const confirm_bt = (id, name, price, counter) => {
        const dataOrder = {
            id,
            name,
            price,
            counter,
        }
    
        const findIndex = orderList.value.findIndex(e => e.id === dataOrder.id)
    
        if (findIndex === -1) {
            orderList.value.push(dataOrder)
            saveLocalStorage()
            cartAlert_Confirm()
        } else {
            cartAlert_Confirm_Already()
        }
    
        console.log(orderList.value)
    }
    for (let i = 0; i < orderList.value.length; i++) {
        const item = orderList.value[i]
        confirm_bt(item.id, item.name, item.price, item.counter)
    }



    // push_data_to_ ../views/cart.vue
    const cart_show = computed(() => {
        const product_store = productStore()

        return cartList.value.map((prd, i)=>{
            const findIndexProduct = product_store.productList.findIndex(e => e.id === prd.id)

        return {
                product : product_store.productList[findIndexProduct],
                counter : cartList.value[i].counter,
                total_price : product_store.productList[findIndexProduct].price * cartList.value[i].counter
        }

        })
    })

    const cart_show_order = computed(() => {
        const product_store = productStore()

        return orderList.value.map((prd, i)=>{
            const findIndexProduct = product_store.productList.findIndex(e => e.id === prd.id)

        return {
                product : product_store.productList[findIndexProduct],
                counter : orderList.value[i].counter,
                total_price : product_store.productList[findIndexProduct].price * orderList.value[i].counter
        }

        })
    })


    const total = computed(() => {
        return cartList.value.reduce((sum, prd) => sum + prd.price * prd.counter , 0)
    })

    // data_local_storage 
    
    const saveLocalStorage = () => {
        localStorage.setItem('cartList', JSON.stringify(cartList.value))
    }

    const loadlocalStorage = () => {
        if(localStorage.getitem('cartList')){
            cartList.value = JSON.parse(localStorage.getItem('cartList'))
        }
    }


    // Alert When Product Not In Cart
    // Text = Add to Cart Complete

    const cartAlert_add = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Added to Cart Complete',
            showConfirmButton: false,
            timer: 1300
        })
    }
    // Alert When  Product Already In Cart
    // Text =  Product Added to Cart Already

    const cartAlert_failed = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Added to Cart Already',
            showConfirmButton: false,
            timer: 1300
          })
    }
    
    //Cart-Comfirm-Alert
    const cartAlert_Confirm = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Order has Confirm',
            showConfirmButton: false,
            timer: 1300
          })
    }

    const cartAlert_Confirm_Already = () => {
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'Order has Confirm Already',
            showConfirmButton: false,
            timer: 1300
          })
    }



    //Add-counter-in-Cart-Function

    const add_counter = (i) => {
        cartList.value[i].counter += 1
        saveLocalStorage()
    }

  //Remove-counter-in-Cart-Function

    const remove_counter = (i) => {
        cartList.value[i].counter -= 1
        saveLocalStorage()

        if(cartList.value[i].counter < 1) {
            cartList.value.splice(i, 1)
            saveLocalStorage()
        }
    }

  //Remove-Product-in-Cart-Function
    
  const remove_cart = (i) => {
        cartList.value.splice(i, 1)
        saveLocalStorage()
    }

  //Clear-Product-in-Cart-Function

    const clear_cart = () => {
        cartList.value = []
        saveLocalStorage()
    }

    
    return{ add_cart, loadlocalStorage, cartList, cart_show, add_counter, remove_counter, remove_cart, clear_cart, total, confirm_bt,  cartAlert_Confirm_Already, cart_show_order }
})