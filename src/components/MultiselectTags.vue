<template>
  <div class="multiselect">
    <div class="multiselect__title"
    @click.stop="showList = !showList">
    <div v-if="selectedList.length">
      <span v-for="selected in selectedList"
        :key="selected[trackBy]">
        {{ selected[title] }}
        <span @click.stop="$emit('delete', selected)">+</span>
      </span>
    </div>
  </div>

    <div class="multiselect__list"
    v-if="showList">
      <div class="multiselect__item"
      v-for="item in list"
      :key="item[trackBy]"
      :class="{'selected': isSelected(item) }"
      @click="change(item)">
        {{ item[title] }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MultiselectTags',
  props: {
    list: {
      type: Array,
      required: true
    },
    selectedList: {
      type: Array,
      required: true
    },
    trackBy: {
      type: String,
      required: false,
      default: 'id'
    },
    title: {
      type: String,
      required: false,
      default: 'title'
    }
  },
  data () {
    return {
      showList: false
    }
  },

  mounted () {
    document.addEventListener('click', this.bodyClick)
  },
  beforeDestroy () {
    document.removeEventListener('click', this.bodyClick)
  },

  methods: {
    change (selected) {
      this.showList = false

      let updatedList = []

      if (this.selectedList.includes(selected)) {
        updatedList = this.selectedList.filter(s => s[this.trackBy] !== selected[this.trackBy])
      } else {
        updatedList = [...this.selectedList, selected]
      }
      this.$emit('change', updatedList )
    },

    bodyClick () {
      this.showList = false
    },

    isSelected (item) {
      return this.selectedList.includes(item)
    }
  }
}
</script>

<style scoped>
  .multiselect {
    min-width: 170px;
    display: inline-block;
    margin: 0 auto;
  }
  .multiselect__list, .multiselect__title {
    border: 1px solid black;
    border-top:none;
    width: 100%;
    text-align: start;
    padding: 4px 20px;
  }
  .multiselect__title span {
    padding: 4px;
    background-color: rgba(0, 0, 255, 0.15);
    margin-right: 8px;
  }
  .multiselect__title span span{
    background: transparent;
    transform: rotate(45deg);
    margin-left: 8px;
    margin-right: 0px;
    display: inline-block;
  }
  .multiselect__title span span:hover {
    color: white;
  }

  .multiselect__list {
    max-height: 100px;
    overflow: hidden;
    overflow-y: auto;
  }
  .multiselect__item {
    cursor: pointer;
    padding-top: 4px;
  }
  .multiselect__item.selected:hover{
    color: red;
  }
  .multiselect__item:hover {
    color: blue;
  }
  .multiselect__title {
    border-top: 1px solid black;
    padding: 8px 20px;
    cursor: pointer;
    /* background: #d8e6f3; */
    font-size: 18px;
    font-weight: 700;
    border-width: 2px;
  }
  .selected {
    color: green;
  }
</style>
