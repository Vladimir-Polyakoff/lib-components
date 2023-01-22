<script>

export default {
  name: 'TheDropdown',
  props: {
    list: {
      type: Array,
      required: true
    },
    selected: {
      type: [Object, String],
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
  computed: {
    selectedValue () {
      if (typeof this.selected === 'object') {
        return this.selected[this.title] || this.list[0][this.title]
      }
      else if (typeof this.selected === 'string') {
        return this.selected || this.list[0]
      } else {
        return 'Error type by selected'
      }
    },

    isChildeItemTypeObject () {
      return typeof this.list[0] === 'object'
    },

    dropdownList () {
      if (!this.isChildeItemTypeObject) {
        return this.list.map((title, index) => ({
          title, id: index + 1 
        }))
      }
      return this.list
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
      
      this.$emit('change', this.isChildeItemTypeObject ? selected : selected.title)
    },

    bodyClick () {
      this.showList = false
    }
  }
}
</script>

<style scoped lang="scss">
  .dropdown {
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
    &__list {
      height: 100px;
      overflow: hidden;
      overflow-y: auto;
    }
    &__item {
      padding: 4px 20px;
      cursor: pointer;
      &:hover {
        color: blue;
      }
    }
    &__title {
      border-top: 1px solid black;
      padding: 4px 20px;
      cursor: pointer;
      background: #d8e6f3;
      font-size: 18px;
      font-weight: 700;
      border-width: 2px;
    }
  }

</style>

<template>
  <div class="dropdown">
    <div class="dropdown__title"
    @click.stop="showList = !showList"
  >{{ selectedValue }}</div>

    <div class="dropdown__list"
    v-if="showList">
      <div class="dropdown__item" v-for="item in dropdownList" :key="item[trackBy]"
      @click="change(item)">
        {{ item[title] }}
      </div>
    </div>
  </div>
</template>