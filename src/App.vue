<script>
import SideBar from './components/SideBar.vue'

export default {
  components: { SideBar },
  data () {
    return {
      pagesList: [
        {
          title: 'Главная',
          path: '/',
          iconClass: 'fa fa-home'
        },
        {
          title: 'Выпадашка',
          path: '/dropdown-page',
          iconClass: 'fa fa-caret-square-o-down'
        },
        {
          title: 'Приветствие',
          path: '/welcome',
          iconClass: 'fa fa-hand-peace-o'
        },
        {
          title: 'Инпуты',
          path: '/fields',
          iconClass: 'fa fa-search'
        },
        {
          title: 'Таблица',
          path: '/table-page',
          iconClass: 'fa fa-table'
        },
        {
          title: 'Мультиселект Теги',
          path: '/multiselect-tags',
          iconClass: 'fa fa-music'
        },
        {
          title: 'Диалог',
          path: '/confirm-dialog-page',
          iconClass: 'fa fa-users'
        },
        {
          title: 'Промпт',
          path: '/prompt-page',
          iconClass: 'fa fa-terminal'
        }
      ],
      isSideBarCollapsed: false 
    }
  }
}
</script>

<template>
  <div id="app">
    <side-bar
    :list="pagesList"
    @collapse="value => isSideBarCollapsed = value"
    ></side-bar>

    <router-view style="text-align: center;" :style="'padding-left:' + isSideBarCollapsed ? '70px' : '180px'"/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-y:hidden ;
  box-sizing: border-box;
  width: 100%;
}
.menu {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  margin-bottom: 200px;
}
a {
  text-decoration: none;
  border-radius:4px ;
  padding: 2px 4px;
  margin: 0;
  transition: .3s;
}
a:hover{
  text-decoration: none;
  background: rgba(28, 28, 225, 0.585);
  border-radius:4px ;
  padding: 2px 4px;
  margin: 0;
  color: white;
}
</style>
