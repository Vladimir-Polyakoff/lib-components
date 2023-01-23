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
      showList: false,
      newTag: ''
    }
  },

  computed: {
    isChildTypeObject () {
      return typeof this.list[0] === 'object'
    },
  },

  watch: {
    showList (v) {
      v && this.$nextTick(() => this.$refs.addTag.focus())
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
        updatedList = this.selectedList.filter(item => this.isChildTypeObject 
          ? item[this.trackBy] !== selected[this.trackBy]
          : item !== selected
        )
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
    },

    addTag () {
      if (!this.newTag) { return }

      this.$emit('change', [...this.selectedList, this.isChildTypeObject 
        ? {
            [this.trackBy]: new Date().getTime(),
            [this.title]: this.newTag
          }
        : this.newTag]
      )

      this.newTag = ''

      this.bodyClick()
      
    }
  }
}
</script>

<template>
  <div class="multiselect-tags">
    <div class="multiselect-tags__title"
    @click.stop="showList = !showList">
      <div v-if="selectedList.length">
        <span @click.stop v-for="(selected, index) in selectedList"
        :key="index + ( selected[title] || selected)">
        {{ selected[title] || selected }}
        <span @click.stop="$emit('delete', selected)">+</span>
        </span>
      </div>
      <input
      ref="addTag"
      v-model="newTag"
      v-if="showList"
      type="text"
      placeholder="введите Tag"
      @click.stop
      @keypress.enter="addTag"
      >
    </div>

    <div class="multiselect-tags__list"
    v-if="showList">
      <div class="multiselect-tags__item"
      v-for="(item, index) in list"
      :key="index + (item[title] || item)"
      :class="{'selected': isSelected(item) }"
      @click="change(item)">
      {{ item[title] || item }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .multiselect-tags {
    min-width: 170px;
    display: inline-block;
    margin: 0 auto;
    width: 330px;
    &__list, &__title {
      border: 1px solid black;
      border-top:none;
      width: 100%;
      text-align: start;
      padding: 4px 20px;
    }
    &__title {
      min-height: 28px;
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      justify-content: center;

      div {
        display: flex;
        flex-wrap: wrap;
        user-select: none;
      }
    }
    input {
      width: 100%;
      border: none;
      padding: 0px;
      outline: none;
    }
    &__title span {
      padding:2px 4px;
      background-color: rgba(0, 0, 255, 0.15);
      margin: 4px;
      span{
        background: transparent;
        transform: rotate(45deg);
        margin-left: 8px;
        margin-right: 0px;
        display: inline-block;
        &:hover {
          color: white;
          scale: 1.1;
          animation: close 1s linear;

          @keyframes close {
            0% {
              transform: rotate(45deg);
            }
            100% {
              transform: rotate(225deg);
            }
          }
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
        font-weight: 600;
      }
      &:hover {
        color: blue;
        font-weight: 600;
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
      border-radius: 10px;
    }
  }
  .selected {
    color: green;
    font-weight: 600;
  }
</style>