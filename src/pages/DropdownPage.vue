<script>
import Dropdown from '@/components/Dropdown'

export default {
  name: 'dropdownPage',
  components: {
    Dropdown
  },
  data () {
    return {

      selected: {},
      list: [
        { id: 0, title: 'all' },
        { id: 1, title: 'Name' },
        { id: 2, title: 'Username' },
        { id: 3, title: 'Email' }
      ],
      list2: ['all', 'Name', 'Username', 'Email'],
      selected2: '',
    }
  }
}
</script>

<template>
  <div>
    <div class="header">
      <pre>{{ selected }}</pre>
      <div class="dropdown">
        <dropdown
          ref="dropdown"
          :list="list"
          :selected="selected"
          trackBy="id"
          title='title'
          @change="value => selected = value"
        />
      </div>
    </div>
    <div class="body">
      <pre>{{ selected2 }}</pre>
      <div class="dropdown">
        <dropdown
          ref="dropdown2"
          :list="list2"
          :selected="selected2"
          @change="value => selected2 = value"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .dropdown {
    margin:0 auto;
  }
</style>