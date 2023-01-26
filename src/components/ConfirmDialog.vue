<script>
export default {
  name: 'ConfirmDialog',
  props: {
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: true
    }
  },

  data () {
    return {
      showDialog: true
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
      this.showDialog = false
    },

    show () {
      this.$nextTick(() => this.showDialog = true)
    }
  }
}
</script>

<template>
  <div>
    <div class="wrapper" v-if="showDialog">
      <div class="dialog">
        <h1 class="dialog__title" v-if="title">{{ title }}</h1>
        <p class="dialog__description">{{ description }}</p>
        <div class="actions">
          <button @click="$emit('confirm', false)">disagree</button>
          <button @click="$emit('confirm', true)">agree</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// если без Wrapper
  // .dialog {
  //   position: fixed;
  //   z-index: 1;
  //   top:50%;
  //   left:50%;
  //   transform: translate(-50%, -50%);
  //   border: 1px solid #ccc;
  //   width: 400px;
  // }

  .wrapper {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1111;
    width: 100vw;
    height: 100vh;
    background: #2626262b;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    .dialog {
      width: 220px;
      height: 180px;
      background: #fff;
      text-align: left;
      padding: 12px;
      border-radius: 6px;
      &__title {
        font-size: 20px;
      }
      &__description {
        font-size: 12px;
        color: rgb(131, 130, 130);
        padding-right: 10px;
      }
    }
    .actions {
      margin-top: 30px;
      text-align: end;
      button {
        font-size: 12px;
        text-transform: uppercase;
        color: green;
        font-weight: 500;
        border: none;
        background: transparent;
        cursor: pointer;
      }
    }
  }

</style>