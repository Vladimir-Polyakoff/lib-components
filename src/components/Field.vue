
<script>
export default {
  name: 'TheField',
  props: {
    value: { default: '' },
    type: {
      type: String,
      required: false,
      default: 'text'
    },
    additionalStyles: {
      type: Array,
      required: false,
      default: () => ([])
    },
    placeholder: { type: String, required: false },
    id: { type: [String, Number], required: true },
    label: { type: String, required: false }
  },

  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value);
      },
    },

    styles () {
      // пришли динамические стили массивом сложить в строку
      let res = ''

      this.additionalStyles.forEach(element => {
        res += element
      })

      return res
    }
  },

  methods: {
    fieldFocus () {
      this.$refs.Field.focus()
    }
  }
}
</script>

<template>
  <div class="field">
    <label :for="id">{{ label }}</label>
    <input
      ref="Field"
      :id="id"
      :type="type"
      v-model="model"
      :style="styles"
      :placeholder="placeholder"
    >
  </div>
</template>

<style scoped>
  input {
    height: 20px;
    width: 200px;
    border: 1px solid black;
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
  }
  

</style>