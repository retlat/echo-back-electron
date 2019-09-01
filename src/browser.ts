import {default as Vue, CreateElement, VNode} from 'vue';
import {ipcRenderer} from 'electron';
import {Channel} from './channel';

const app = new Vue({
  el: '#app',
  data: {
    input: '',
    response: ''
  },
  methods: {
    submit: function () {
      ipcRenderer.send(Channel.ECHO, this.input);
    }
  },
  render(createElement: CreateElement): VNode {
    const self = this;

    return createElement('div', [
      createElement('label', {
        attrs: { for: 'input' },
        style: { display: 'block' }
      }, 'Input'),
      createElement('div', [
        createElement('input', {
          attrs: { id: 'input' },
          domProps: { value: self.input },
          on: {
            input: function (event: InputEvent) {
              if (event.target === null) return;
              if (event.target instanceof HTMLInputElement) {
                self.input = event.target.value;
              }
            }
          }
        }),
        createElement('button', {
          attrs: { type: 'button' },
          on: { click: self.submit }
        }, 'Submit')
      ]),
      createElement('div', 'Response'),
      createElement('div', self.response)
    ]);
  }
});

ipcRenderer.on(Channel.ECHO_BACK, (_event, data) => {
  app.response = data;
});
