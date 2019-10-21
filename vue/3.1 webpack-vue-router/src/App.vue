<template>
  <div>
    <h1>this is app</h1>
    <router-link to="/account">account</router-link>
    <router-link to="/goods">goodsList</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>

<style>
  div{
    border: 3px solid #996;
    padding: 3px;
  }
</style>