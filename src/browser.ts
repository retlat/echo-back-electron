import {default as Vue, CreateElement} from 'vue';

// @ts-ignore
const app = new Vue({
  el: '#app',
  render(createElement: CreateElement) {
    return createElement('h1', 'Hello, World');
  }
});
