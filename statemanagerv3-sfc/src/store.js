import { reactive } from 'vue'

const state = reactive({
  message: 'HelloWorld'
})
const debug = true

function setMessage(newValue) {
  if (debug) console.log('setMessage triggered with ', newValue)

  state.message = newValue
}

export function store() {
  return {
    state,
    setMessage
  }
}