<script>
import ConfirmDialog from '@/components/ConfirmDialog'

export default {
  name: 'ConfirmDialogPage',
  components: {
    'confirm-dialog': ConfirmDialog
  },

  data () {
    return {
      title: 'Use Googles location service?',
      description: "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."
    }
  },

  methods: {
    confirmSuccess (v) {
      console.log('confirm', v)

      this.$refs.ConfirmDialog.hide()
    }
  }
}
</script>

<template>
  <div>
    <confirm-dialog
      ref="ConfirmDialog"
      :title="title"
      :description="description"
      @confirm="v => v ? confirmSuccess(v) : $refs.ConfirmDialog.hide()"
    ></confirm-dialog>

    <button @click="$refs.ConfirmDialog.show()">open dialog</button>
  </div>
</template>

<style scoped>
  button {
    position: relative;
    top: 316px;
    z-index: 121212;
    background: rgba(28, 28, 225, 0.585);
    color: white;
    text-transform: uppercase;
    border: none;
    padding: 8px 14px;
    border-radius: 4px;
    user-select: none;
    cursor: pointer;
    transition: .3s;
  }
</style>
