<template>
    <div class="about">
        <h1>產品列表頁面</h1>
        <table>
            <tr v-for="item in products" :key="item.id">
                <td>{{item.title}}</td>
                <td>{{item.content}}</td>
                <router-link :to="`/product/${item.id}`">看產品</router-link>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  created () {
    const vm = this
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`
    vm.$http.get(url)
      .then(function (res) {
        console.log(res)
        vm.products = res.data.data
      })
  }
}
</script>
