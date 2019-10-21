import Vue from 'vue'
import App from './App.vue'
import {createRouter} from './router'

export function createApp(){
  const app = new Vue({
    render:h=>h(app)
  })
  return { app }
}