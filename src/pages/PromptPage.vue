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
    },
    setAnswer (answer) {
      if(answer) {
        this.result = `Ваш ответ на вопрос ${this.question} : ${ answer }`

        this.question = ''

      }
    }
  }
}
</script>

<template>
  <div>
    <prompt
      ref="Prompt"
      @responce="setAnswer"
    ></prompt>
    <div
      v-if="error"
      style="color:red"
    >
      {{ error }}
    </div>
    <div>
      <input type="text" v-model="question">
      <div
        v-if="result"
        class="result"
        > {{ result }}
      </div>
    </div>
    <button @click="send">отправить вопрос</button>
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  input {

    margin-top:360px;
  }
  button {
    margin-top:30px;
  }

  .result {
    margin-top: 10px ;
    font-size: 20px;
    font-weight: 600;
  }
</style>