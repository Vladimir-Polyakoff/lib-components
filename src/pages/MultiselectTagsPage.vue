<template>
  <div>
    <div class="header">
      <pre>{{ selectedList }}</pre>
      <div class="multiselect-tags">
        <!-- 1 прокидывем сам массив объектов. 2 объект selected. 3 уникальный ID. 4 уникальный title (справа эти значения и подставляем) -->
        <MultiselectTags
          ref="MultiselectTags"
          :list="list"
          :selectedList="selectedList"
          trackBy="id"
          title='title'
          @change="updatedList => selectedList = updatedList"
          @delete="deleteSelected"
        />
      </div>
    </div>
    <!-- <div class="body">
      <pre>{{ selected2 }}</pre>
      <div class="dropdown">
        <dropdown
          ref="dropdown2"
          :list="list2"
          :selected="selected2"
          @change="value => selected2 = value"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
import MultiselectTags from '@/components/MultiselectTags'

export default {
  name: 'MultiselectTagsPage',
  components: {
    MultiselectTags
  },
  data () {
    return {

      selectedList: [],
      list: [
        {
          id: 1,
          title: 'Name'
        },
        {
          id: 2,
          title: 'Username'
        },
        {
          id: 3,
          title: 'Email'
        }
      ],
      list2: ['all', 'Name', 'Username', 'Email'],
      selected2: '',
    }
  },
  methods: {
    deleteSelected (selected) {
      this.selectedList = this.selectedList.filter(({ id }) => id !== selected.id)
    }
  }
}
</script>

<style scoped>
  .multiselect-tags {
    margin:0 auto;
  }
</style>
