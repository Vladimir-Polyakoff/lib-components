<script>
import InfoCard from "@/components/InfoCard.vue"

export default {
  name: "TheWelcome",
  components: {
    InfoCard
  },

  data () {
    return {
      title: 'title',
      description: 'description',
      list: [
        {
          title: 'Подключите банк',
          description: 'Интеграция счета в банке с сервисом MPSTATS сэкономит вам время и ускорит работу с финанссми. Это бычтро и безопасно!',
          button: {
            title: 'Подключить банк',
            icon: '',
            disabled: false,
            methodName: 'add'
          }
        },
        {
          title: 'Добавьте операцию',
          description: 'Добавьте дванные о финансовых операциях вручную или импортируйте файлом и задайте правила для заполнения полей.',
          button: {
            title: 'Добавить операцию',
            icon: '',
            disabled: true,
            methodName: 'remove'
          }
        },
        {
          title: 'Настройте справочники',
          description: 'Интеграция счета в банке с сервисом MPSTATS сэкономит вам время и ускорит работу с финанссми. Это бычтро и безопасно!'
        },
        {
          title: 'Получите отчет',
          description: 'Данные о ваших финансовых показателях и движении денежных средств представлены в виде наглядных графиков и удобных таблиц'
        },
      ]
    }
  }
}
</script>

<template>
  <div class="welcome">
    <div class="title">Как работать c модулем</div>
    <div class="description">Финансовый учет - это удобный инструмент, который поможет контролировать движение средств и увеличить прибыль. Вся статистика по финансовым операцияи отражена в виде нагядных отчетов</div>
    <div class="list">
      <InfoCard
        v-for="(item, index) in list"
        :key="index"
        :number="index + 1"
        :card="item"
      />
    </div>
  </div>
</template>

<style scoped>
  .welcome {
    padding: 16px;
    max-width: 500px;
    background: rgba(204, 204, 204, 0.2);
    margin: 0 auto;
  }
  .title {
    text-align: left;
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 30px;
    font-weight: 600;
  }
  .description {
    text-align: left;
    font-family: serif;
    margin-bottom: 8px;
    font-size: 18px;
    letter-spacing: 1px;
    text-align: left;
    margin-bottom: 30px;
    color: rgba(0, 0, 0, 0.606);
  }
</style>
