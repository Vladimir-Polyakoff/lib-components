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
          title: 'JavaScript'
        },
        {
          id: 2,
          title: 'Vue js'
        },
        {
          id: 3,
          title: 'html/css'
        }
      ],
      list2: ['Name', 'Username', 'Email'],
    }
  },

  methods: {
    // deleteSelected (deleted) {
    //   this.selectedList = this.selectedList.filter(({ id }) => id !== deleted.id)
    // }
    deleteSelected (deleted) {
      this.selectedList = this.selectedList.filter(item => item !== deleted)
    }
  }
}
</script>


<template>
  <div>
    <div class="header">
      <div class="pre">{{ selectedList }}</div>
      <div class="multiselect-tags">
        <MultiselectTags
          ref="MultiselectTags"
          :list="list2"
          :selectedList="selectedList"
          trackBy="id"
          title='title'
          @change="updatedList => selectedList = updatedList"
          @delete="deleteSelected"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .multiselect-tags {
    margin:0 auto;
  }
  .pre {
    padding: 10px;
    text-align: center;
    margin-left: 34px;
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
    color: rgb(127, 125, 125);
  }
</style>