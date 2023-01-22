<template>
  <div id="app">
    <div class="menu">
      <router-link v-for="({ path, title }) in pagesList"
      :key='path'
      :to="path">{{ title }}</router-link>
    </div>

    <router-view/>
  </div>
</template>


<script>

export default {
  data () {
    return {
      pagesList: [
        {
          title: 'Главная',
          path: '/'
        },
        {
          title: 'Выпадашка',
          path: '/dropdown-page'
        },
        {
          title: 'Приветствие',
          path: '/welcome'
        },
        {
          title: 'Инпуты',
          path: '/fields'
        },
        {
          title: 'Таблица',
          path: '/table-page'
        }
      ]
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 200px;
}
</style>
