import Vue from 'vue'
import allApi from './allApi'
import base from './base'

let axios = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      base.get(allApi[url], {params}).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
        console.log(err)
      })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      base.post(allApi[url],params).then(res => {
        resolve(res.data)
      }).catch(err => {
        console.log(err)
        reject(err)
    })
    })
    }   
}

Vue.prototype.$axios = axios;
