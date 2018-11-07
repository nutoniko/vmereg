
import axios from 'axios'
import settings from 'settings'

const api = axios.create({
    baseURL: 'https://rest.vmeste-region.ru/api/',
  })

export default {
    namespaced: true,
        state: {
            loading: false,
            pagination: {
                currentPage: 0,
                perPage: settings.slidesPerView,
                hasMorePages: true,
                total: 0,
            },
            votes: [],
        },
        getters: {
            pagination: state => state.pagination,
            votes: state => state.votes,
        },
        mutations: {
            ADD_VOTES(state, {votes, pagination}) {
                state.votes.push(...votes)
                state.pagination.hasMorePages = pagination.hasMorePages
                state.pagination.currentPage++
                state.pagination.total = pagination.total
                state.loading = false
            },
        },
        actions: {
            LOAD_NEXT({commit, state}) {
                if(!state.pagination.hasMorePages || state.loading)
                return
                state.loading = true

                let params = {
                    page: state.pagination.currentPage+1,
                    perPage: state.pagination.perPage,
                    expired: true
                }

                return api
                .get('votes', {params})
                .then(response => {
                    commit('ADD_VOTES', { votes: response.data.data.votes, pagination: response.data.data.pagination } )
                })            
            },
    }
}