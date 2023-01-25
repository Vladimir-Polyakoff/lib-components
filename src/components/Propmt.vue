

<script>
  export default {
    name: 'ThePrompt',
  
    data () {
      return {
        showPro: false,
        question: '',
        answer: ''
      }
    },
  
    mounted () {
      document.addEventListener('click', this.hide)
    },
  
    beforeDestroy () {
      document.removeEventListener('click', this.hide)
    },
  
    methods: {
      hide () {
        this.showPro = false
      },
      show (question) {
        this.question = question

        setTimeout(() => {this.showPro = true}, 0)
      }
    }
  }
</script>

<template>
  <div>
    <div class="prompt" v-if="showPro">
      <p class="prompt__question">ответьте на вопрос : {{ question }}</p>
      <input @click.stop type="text" v-model="answer">
      <div class="actions">
        <button @click="hide">отмена</button>
        <button @click="$emit('responce', answer)">ответить</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// если без Wrapper
  .prompt {
    position: fixed;
    z-index: 11;
    top:0;
    left:50%;
    transform: translate(-50%);
    border: 1px solid #ccc;
    width: 400px;
    background: #fff;
      &__question {
        margin-top: 16px;
        font-size: 15px;
        font-weight: 500;
        color: rgb(59, 169, 39);
        padding-right: 10px;
        color: black;
      }
    }
    .actions {
      margin-top: 30px;
      text-align: end;
      button {
        padding: 10px;
        font-size: 12px;
        text-transform: uppercase;
        color: green;
        font-weight: 500;
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
</style>