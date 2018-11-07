<template>
  <v-layout class="vote-list">
    <v-flex class="main-container">
      <v-container pa-2 fluid>
        <v-card class="card-header">
          <v-layout py-2 justify-center align-center>
            <v-divider vertical></v-divider>
            <p class="link-text px-4 ma-0">{{ navigation }}</p>
            <v-divider vertical></v-divider>
          </v-layout>
        </v-card>
      </v-container>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for="item in votes" :key="item.id" class="swiper-slide">
            <VoteCard :vote="item" />
          </div>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import Swiper from 'swiper'
  import VoteCard from 'components/VoteCard'
  import settings from 'settings'

  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    components: {
      VoteCard
    },
    data: () => ({
      swiper: null,
    }),
    computed: {
      ...mapGetters('votes', ['votes' , 'pagination' ]),
      navigation(){
        return this.swiper ? `${this.swiper.activeIndex + 1} - ${this.swiper.activeIndex + settings.slidesPerView} / ${this.pagination.total}` : null
      },
    },
    updated() {
      this.swiper.update()
    },
    mounted() {
      this.swiper = new Swiper('.swiper-container', {
        slidesPerView: settings.slidesPerView,
        spaceBetween: 0,
      })

      this.swiper.on('slideChange', () => {
        if(settings.slidesPerView + this.swiper.activeIndex > this.votes.length-settings.slidesPerView)
        this.LOAD_NEXT()
      })

      this.LOAD_NEXT().then(() => this.LOAD_NEXT())

    },
    methods: {
      ...mapActions('votes', ['LOAD_NEXT']),
    }
  }
</script>

<style scoped lang="scss">
  .card-header {
    border-radius: 6px;
    box-shadow: 0 2px 12px -6px rgba(56, 54, 68, .8);
  }

  .main-container {
    margin: 0 auto;
    height: 100%;
    max-width: 1176px;
    width: 100%;
  }

  .swiper-container {
    padding: 8px 0;
    width: 100%;
  }

  .link-text {
    color: #38ad6d;
    font-size: 13.2px;
    font-weight: 600;
    line-height: 24px;
    text-decoration: none;
  }

</style>