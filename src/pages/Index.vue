<template>
  <!-- <v-layout>
    <v-flex> -->
  <v-content>
    <v-fade-transition mode="out-in">
      <router-view />
    </v-fade-transition>
  </v-content>
  <!-- </v-flex>
  </v-layout> -->
</template>

<script>
    //import { mapGetters, mapActions } from 'vuex'
    export default {
        // components: {},
        // data: () => ({}),
        // computed: {
        //     ...mapGetters('auth', ['isGuest', 'showLogin']),
        // },
        // methods: {
        //      ...mapActions('auth', ['LOGIN', 'SHOW_LOGIN_DLG']),
        // }
    }
</script>

<style scoped lang="scss">
</style>