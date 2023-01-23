<script>
import Prompt from '@/components/Propmt'

export default {
  name: 'PropmptPage',
  components: {
    Prompt
  },
  data () {
    return {
      result: '',
      question: '',
      error: ''
    }
  },
  watch: {
    question (v) {
      if (v && this.error) {
        this.error = ''
      }
    }
  },
  methods: {
    send () {
      if (!this.question) {
        this.error = 'Введите вопрос'
        
        return
      }
      this.$refs.Prompt.show(this.question)

    }
  }
}
</script>

<template>
  <div>
    <prompt
      ref="Prompt"
      @responce="responce => result = responce"
    ></prompt>
    <div
      v-if="error"
      style="color:red">
      {{ error }}
    </div>
    <div>
      <input type="text" v-model="question">
      <div>{{ result }}</div>
    </div>
    <button @click="send">отправить вопрос</button>
  </div>
</template>
