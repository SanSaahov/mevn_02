<template>
   <nav class="navbar">
      <h3>Online Bank</h3>

      <ul class="navbar-menu">
         <li>
            <router-link to="/">Заявки</router-link>
         </li>
         <li>
            <router-link to="/">Помощь</router-link>
         </li>
         <li>
            <router-link to="/">Сообщения</router-link>
         </li>
         <li>
            <router-link to="/">Выход</router-link>
         </li>
      </ul>
   </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data(){
    return {

    }
  }
}
</script>

<style lang="less" scoped>

</style>
















































