<template>
   <component :is="layout" v-if="layout"></component>
</template>

<script>
import { computed } from 'vue'
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import { useRoute } from 'vue-router'

export default {
   name: 'App',
   setup () {
      const route = useRoute ()

      return {
         layout: computed ( () => route.meta.layout )
      }
   },
   components: { MainLayout, AuthLayout }
}
</script>

<style lang="less" scoped>

</style>
















































