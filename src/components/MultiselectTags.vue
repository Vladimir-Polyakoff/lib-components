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

<style scoped lang="scss">
  .multiselect-tags {
    min-width: 170px;
    display: inline-block;
    margin: 0 auto;
    &__list, &__title {
      border: 1px solid black;
      border-top:none;
      width: 100%;
      text-align: start;
      padding: 4px 20px;
    }
    &__title span {
      padding: 4px;
      background-color: rgba(0, 0, 255, 0.15);
      margin-right: 8px;
        span{
          background: transparent;
          transform: rotate(45deg);
          margin-left: 8px;
          margin-right: 0px;
          display: inline-block;
          &:hover {
            color: white;
          }
        }
    }
    &__list {
      max-height: 100px;
      overflow: hidden;
      overflow-y: auto;
    }
    &__item {
      cursor: pointer;
      padding-top: 4px;
      &.selected:hover{
        color: red;
      }
      &:hover {
        color: blue;
      }
    }
    &__title {
      border-top: 1px solid black;
      padding: 8px 20px;
      cursor: pointer;
      /* background: #d8e6f3; */
      font-size: 18px;
      font-weight: 700;
      border-width: 2px;
    }
  }
  .selected {
    color: green;
  }
</style>

<template>
  <div class="multiselect-tags">
    <div class="multiselect-tags__title"
    @click.stop="showList = !showList">
    <div v-if="selectedList.length">
      <span v-for="selected in selectedList"
        :key="selected[trackBy]">
        {{ selected[title] }}
        <span @click.stop="$emit('delete', selected)">+</span>
      </span>
    </div>
  </div>

    <div class="multiselect-tags__list"
    v-if="showList">
      <div class="multiselect-tags__item"
      v-for="item in list"
      :key="item[trackBy]"
      :class="{'selected': isSelected(item) }"
      @click="change(item)">
        {{ item[title] }}
      </div>
    </div>
  </div>
</template>