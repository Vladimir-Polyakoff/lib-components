<template>
  <div>
    <Table
    :headerConfig="headerConfig"
    :data="list"
    >
      <template v-slot:cell-name="{ row: user }">
        <span class="name">{{ user.name }}</span>
      </template>
      <template v-slot:cell-html="{ row: user }">
        <span>{{ user.html ? 'да' : 'нет' }}</span>
      </template>
      <template v-slot:cell-css="{ row: user }">
        <span>{{ user.css ? 'да' : 'нет' }}</span>
      </template>
      <template v-slot:cell-js="{ row: user }">
        <span>{{ user.js ? 'да' : 'нет' }}</span>
      </template>
      <template v-slot:cell-vue="{ row: user }">
        <span>{{ user.vue ? 'да' : 'нет' }}</span>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from '@/components/Table'

export default {
  name: 'TablePage',
  components: {
    Table
  },
  data () {
    return {
      headerConfig: [
        {
          key: 'name',
          title: ''
        },
        {
          key: 'html',
          title: 'html'
        },
        {
          key: 'css',
          title: 'css'
        },
        {
          key: 'js',
          title: 'js'
        },
        {
          key: 'vue',
          title: 'vue'
        },
      ],
      list: [
        {
          name: 'Alehsa',
          html: true,
          css: true,
          js: true,
          vue: true
        },
        {
          name: 'Volodya',
          html: true,
          css: true,
          js: true,
          vue: false
        }
      ]
    }
  }
}
</script>


<style scoped>
  .name {
    display: block;
    text-align: left;
  }
</style>