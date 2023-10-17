<script setup>
import { computed } from 'vue'

import { cartStore } from '../stores/cart';
const cart_store = cartStore()
const cartItem = computed(() => cart_store.cart_show)



</script>

<template>
<RouterLink to="/" class="btn-back">Back</RouterLink>
<h1 style="margin-top: 20px;">Your Cart</h1>
<div style="display: flex;">
<button class="remove-bt" style="margin: 15px 15px;" @click="cart_store.clear_cart()">Clear Cart !!!</button>
<h5 style="margin: 20px 20px; font-weight: bold;" >Totol price = {{ cart_store.total }} Baht.</h5>
</div>
  <table class="table">
      <thead>
          <tr>
              <th>Product</th>
              <th>Price/room</th>
              <th></th>
              <th>Price</th>
              <th></th>
              <th></th>
          </tr>
      </thead>
      <tbody v-for="(cart, index) in cartItem" :key="index">
          <tr>
              <td>
                  <img :src="cart.product.img" class="img-thumbnail" width="150" > &nbsp;
                  {{ cart.product.name }}
              </td>
              <td class="txt">{{ cart.product.price }} Baht.</td>
              <td>
                  <button class="ct-bt" @click="cart_store.remove_counter(index)">-</button>
                  <span class="mx-2">{{ cart.counter }}</span>
                  <button class="ct-bt" @click="cart_store.add_counter(index)">+</button>
              </td>
              <td>{{ cart.total_price }} Baht.</td>
              <td>
                  <button class="remove-bt" @click="cart_store.remove_cart(index)">delete</button>
              </td>
              <td>
                <button class="pay-bt" @click="cart_store.confirm_bt(cart.product.id, cart.product.name, cart.product.price, cart.counter)">Confirm</button>
              </td>
          </tr>
      </tbody>
  </table>
  <div style="margin-bottom: 20%;"></div>
</template>

<style>

.table{
  margin-top: 10px;
}
/* counter-product-bt */
.ct-bt {
  font-family: monospace;
  font-size: 1.5rem;
  color: #FAFAFA;
  text-transform: uppercase;
  padding: 0px 12px;
  border-radius: 20px;
  background: #4b3d1081;
  box-shadow: 2px 3px #b8b8b8;
  cursor: pointer;
  margin: 0px 0;
}

.ct-bt:active {
  box-shadow: none;
  transform: translate(3px, 3px);
}
/* remove-product-bt */
.remove-bt {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.3em 1em;
  border: 3px solid #FF0072;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #FF0072;
  text-decoration: none;
  transition: 0.25s ease all;
  z-index: 1;
}

.remove-bt:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: #FF0072;
  z-index: -1;
}

.remove-bt:hover, .remove-bt:focus {
  color: white;
}

.remove-bt:hover:before, .remove-bt:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

.remove-bt:active {
  transform: scale(0.9);
}

/* pay-bt */

.pay-bt {
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: inline-block;
  text-align: center;
  font-weight: bold;
  padding: 0.3em 1em;
  border: 3px solid #00a81c;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #000000;
  text-decoration: none;
  transition: 0.25s ease all;
  z-index: 1;
}

.pay-bt:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: '';
  background-color: #00a81c;
  z-index: -1;
}

.pay-bt:hover, .pay-bt:focus {
  color: white;
}

.pay-bt:hover:before, .pay-bt:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

.pay-bt:active {
  transform: scale(0.9);
}
</style>