<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'PopupMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  div {
    padding: 10px 20px;
    font-size: 14px;
    box-shadow: 0px 2px;
    box-shadow: 1px 1px 8px 2px rgb(142, 139, 139);
    border-radius: 10px 0px 10px 0px;
  }
</style>