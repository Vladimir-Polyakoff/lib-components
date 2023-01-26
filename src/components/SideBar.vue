<script>
import PopupMessage from '@/components/PopupMessage'

export default {
  name: 'SideBar',
  components: {
    PopupMessage
  },

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

    this.$emit('collapse', this.isCollapsedMenu)

    setTimeout(() => {
      for(const tab of this.list) {
        if (this.$router.currentRoute.path === tab.path) {
          this.activeTab = tab

          document.title = tab.title

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

        document.title = title

      }
      
    },
    toggleMenu () {
      this.isCollapsedMenu = !this.isCollapsedMenu

      localStorage.setItem('isCollapsedMenu', String(Number(this.isCollapsedMenu)))

      this.$emit('collapse', this.isCollapsedMenu)
    }
  }
}
</script>

<template>
  <div class="side-bar"
    :class="isCollapsedMenu && 'collapsed-menu'"
  >
    <div class="side-bar__toggle">
      <span @click="toggleMenu">></span>
    </div>
      <div class="side-bar__item"
        v-for="({ path, title, iconClass }) in list"
        :key='path'
        :to="path"
        :class="activeTab && activeTab.path === path && 'active'"
        @click="changePage({ path, title })"
        >
        <i
          v-if="isCollapsedMenu"
          class="icon"
          :class="iconClass"
          aria-hidden="true"
          >
        </i>
        <span v-else>{{ title }}</span>
        <popup-message
          v-if="isCollapsedMenu"
          class="popup-message"
          :message="title"
        >
        </popup-message>
      </div>
  </div>
</template>

<style scoped lang="scss">
  .side-bar {
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    text-align: start;
    padding: 10px 10px 10px 0;
    border-right: 1px solid rgba(212, 209, 209, 0.8);
    box-shadow: 1px 0px 16px -10px black;
    z-index: 1111;
    &__item {
      position: relative;
      &:hover {
        .popup-message {
          display: block;
        }
      }
    }
    &__item span {
      display: inline-block;
      padding: 10px;
      cursor: pointer;
        background: rgba(122, 122, 122, 0);
        border-radius:0px 20px 20px 0px ;
        transition: .3s;
      &:hover {
        background: rgba(212, 209, 209, 0.8);
        border-radius:0px 20px 20px 0px ;
        transform: translateX(2px);
        color: white;
      }
    }
    &__toggle {
      text-align: right;
      padding-right: 10px;
      span {
        display: inline-block;
        transform: rotate(180deg);
        cursor: pointer;
        color: rgb(6, 180, 6);
      }
    }
  }
  .active {
    color: rgb(6, 180, 6);
    font-weight: 540;
  }
  .collapsed-menu {
    width: 50px;
    .side-bar__toggle span {
      transform: rotate(0deg)
    }
  }
  .icon {
    padding: 10px;
    display: inline-block;
    color: rgba(0, 0, 0, 0.8);
    width: 30px;
    height: 30px;
    margin-left: 6px;
    cursor: pointer;
    &:hover {
      color: rgb(6, 180, 6);
      font-weight: 540;
    }
  }
  .popup-message {
    display: none;
    position: absolute;
    top: 5px;
    right: -140px;
  }
</style>