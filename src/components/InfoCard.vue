<template>
  <div class="card">
    <CirclePoint class="circle" :point="number"></CirclePoint>
    <div class="title" v-if="card.title" v-html="card.title"></div>
    <div class="description" v-if="card.description" >{{ card.description }}</div>
    <button v-if="card.button" :disabled="card.button.disabled">{{ card.button.title }}</button>
  </div>
</template>

<script>
import CirclePoint from "@/components/CirclePoint"

export default {
  name: 'InfoCard',

  components: {
    CirclePoint
  },

  props: {
    number: {
      type: Number,
      required: true
    },
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
  .card {
    position: relative;
    padding: 40px 24px 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin-left: 56px;
  }
  .circle {
    position: absolute;
    left: -50px;
    top: 26px;
  }
  .title {
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 30px;
    font-weight: 600;
  }
  .description {
    font-family: serif;
    margin-bottom: 8px;
    font-size: 18px;
    letter-spacing: 1px;
    text-align: left;
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.606);
  }
  button {
    position: relative;
    padding: 10px 20px 10px 40px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 16px;
    font-weight: 600;
    color: #000;
  }
  button::before {
    content: '✓';
    position: absolute;
    left: 10px;
    top: 8px;
    width: 20px;
    height: 20px;
    color: green ;
    margin-right: 6px;
    border: 1px solid green;
    border-radius: 50%;
  }
</style>