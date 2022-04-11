import { reactive } from 'vue'

const debug = true
const state = reactive({
  message: 'HelloWorld'
})

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