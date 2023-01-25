<template>
  <div class="side-bar"
  :class="isCollapsedMenu && 'collapsed-menu'"
  >
    <div class="side-bar__toggle">
      <span @click="toggleMenu">></span>
    </div>
    <div class="side-bar__item"
      v-for="({ path, title }) in list"
      :key='path'
      :to="path"
      :class="activeTab && activeTab.path === path && 'active'"
      @click="changePage({ path, title })"
      >
      {{ isCollapsedMenu && title.substr(0, 3) || title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  props: {
    list: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      activeTab: null,
      isCollapsedMenu: true
    }
  },

  mounted () {
    this.isCollapsedMenu = Boolean(Number(localStorage.getItem('isCollapsedMenu')))

    setTimeout(() => {
      for(const tab of this.list) {
        console.log(this.$router.currentRoute)
        if (this.$router.currentRoute.path === tab.path) {
          this.activeTab = tab

          return
        }
      }
    }, 40)

  },

  methods: {
    changePage ({ path, title }) {
      this.activeTab = { path, title }

      if (path !== this.$router.currentRoute.path) {
        this.$router.push(path)
      }
      
    },
    toggleMenu () {
      this.isCollapsedMenu = !this.isCollapsedMenu

      localStorage.setItem('isCollapsedMenu', String(Number(this.isCollapsedMenu)))
    }
  }
}
</script>

<style scoped lang="scss">
  .side-bar {
    height:100%;
    text-align: left;
    padding: 10px 10px 10px 0;
    border-right: 1px solid #000;
    &__item {
      padding: 10px;
      cursor: pointer;
      &:hover {
        background: rgba(122, 122, 122, 0.504);
      }
    }
    &__toggle {
      text-align: right;
      padding-right: 10px;
      span {
        display: inline-block;
        transform: rotate(180deg);
        cursor: pointer;
      }
    }
  }
  .active {
    color: green;
  }
  .collapsed-menu {
    width: 50px;
    .side-bar__toggle span {
      transform: rotate(0deg)
    }
  }
</style>