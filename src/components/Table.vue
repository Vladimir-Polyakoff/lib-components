<script>

export default {
  name: 'TheTable',
    props: {
      headerConfig: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    },
  data () {
    return {
    }
  }
}
</script>

<template>
  <div class="table">
    <table>
      <thead>
        <tr>
          <div v-for="({ title, key }) in headerConfig" :key="key">
            <th :style="!title && 'background: #ccc'">{{ title }}</th>
          </div>
        </tr>
      </thead>
      <tbody>
        <div v-if="data.length">
          <div v-for="(item, key) in data" :key="key">
            <tr>
              <div v-for="(cell, index) in headerConfig" :key="index">
                <td class="td">
                  <slot
                  :name="`cell-${cell.key}`"
                  :row="item">{{ item[prop] }}</slot>
                </td>
              </div>
            </tr>
          </div>
        </div>
        <tr v-else></tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .table {
    position: relative;
    width: 100%;
    height: 100%;
  }
  table {
    position: absolute;
    inset: 0;
    margin: auto;
    font-family: sans-serif;
    text-align: center;
    border-collapse:collapse;
    /* border-spacing: 5px; */
    background: rgba(204, 204, 204, 0.3);
    color: #656565;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  tr {
    display: flex;
  }
  th, td:first-child {
    background: #afcde7;
    color:white;
    padding: 20px 40px;
  }
  th ,td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color:white;
    width: 100px;
    height: 22px;
  }
  td {
    background: #d8e6f3;
  }
  th, td{
    text-transform:uppercase;
    letter-spacing: 1px;
    text-align: center;
  }

  tbody div:first-child {
    color: blue;
  }
</style>