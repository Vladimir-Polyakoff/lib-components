<script>

export default {
  name: 'TheTable',

  props: {
    headerConfig: { type: Array, required: true },
    data: { type: Array, required: true }
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
                    :row="item"
                  >
                  </slot>
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
  }
  table {
    margin-top: 300px;
    font-family: sans-serif;
    text-align: center;
    border-collapse:collapse;
    border-spacing: 5px;
    background: rgba(204, 204, 204, 0.3);
    color: #656565;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #afcde7;
  }
  tr {
    display: flex;
    justify-content: flex-start;
    background: #afcde7;
  }
  th, td {
    background: #afcde7;
    color:white;
    padding: 20px 40px;
  }
  th ,td {
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color:white;
    height: 22px;
    width: 50px;
    align-self: flex-start;
  }
  td {
    background: #d8e6f3;
  }
  th, td{
    text-transform:uppercase;
    letter-spacing: 1px;
    text-align: center;
  }

  /* tbody div:first-child {
    color: blue;
  } */
</style>