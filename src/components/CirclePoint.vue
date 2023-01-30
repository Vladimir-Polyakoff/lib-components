<script>
export default {
  name: "CirclePoint",

  props: {
    point: {
      type: Number,
      required: true
    }
  }
}
</script>

<template>
  <div class="circle">
    <div class="point">{{ point }}</div>
  </div>    
</template>

<style scoped>
  .circle {   
    width: 50px;
    height: 50px;
    border: 1px solid green;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .point {
    font-size: 22px;
    font-weight: 500;
  }
</style>