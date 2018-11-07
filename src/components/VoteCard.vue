<template>
  <v-card class="vote-card-container link mx-2" @click.native="click">
    <v-img :src="vote.thumbnail.url" class="white--text" max-height="168px">
      <v-layout class="top-shadow image-overlay pt-2" fill-height>
        <v-flex style="">
          <v-layout wrap>
            <v-layout align-center pl-3>
              <v-icon color="white" size="20" v-text="'mdi-calendar-clock'" />
              <span class="pl-2">{{ period }}</span>
            </v-layout>
            <v-layout align-center justify-end pr-3>
              <v-icon color="white" size="20" v-text="'mdi-account-multiple'" />
              <span class="pl-2">{{ vote.count }}</span>
            </v-layout>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-img>
    <v-card-title>
      <h3 class="vote-title mb-3">
        {{ vote.title }}
      </h3>
      <p>{{ vote.teaser }}</p>
    </v-card-title>
  </v-card>
</template>

<script>
  import * as moment from 'moment'
  moment.locale('ru')

  export default {
    props: {
      vote: {
        type: Object,
        default: () => ({})
      },
    },
    data: () => ({}),
    computed: {
      period() {
        let begin = moment(this.vote.date).format('D MMMM')
        let end = moment(this.vote.expire).format('D MMMM')
        return 'c ' + begin + ' по ' + end
      },
    },
    methods: {
      click() {
        const url = 'https://vmeste-region.ru/votes/' + this.vote.id
        window.open(url)
      }
    }
  }
</script>

<style scoped lang="scss">
  .top-shadow {
    box-shadow: inset 0 48px 32px -16px rgba(0, 0, 0, 0.4);
  }

  .vote-title {
    font-size: 18px;
    font-weight: 600;
    max-width: 100%;
    word-wrap: break-word;
  }

  p {
    font-size: 13.2px;
    max-width: 100%;
    word-wrap: break-word;
  }

  .link {
    cursor: pointer;
  }

  .image-overlay {
    font-size: 11px;
    line-height: 1;
  }

  .vote-card-container {
    height: 480px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 2px 12px -6px rgba(56, 54, 68, .8);
  }
</style>