<script>
import Field from "@/components/Field"

export default {
  name: 'TheFields',
  components: {
    Field
  },

  data () {
    return {
      inputValue: '',
      inputs: [
        {
        id: 1,
        value: '',
        label: 'INPUTid1'
        },
        {
        id: 2,
        value: 'vtoroy',
        label: 'INPUTid2'
        }
      ]
    }
  },
  mounted () {
    this.$refs.Field.fieldFocus()
  },

  methods: {
    setFieldValue (value, index) {
      // для inputValue : this.$set(this, 'inputValue', value)  если одна вложеность
      //(где) обьект в котором менял знач, (что)потом СТРОЧКОЙ поле которое хочу поменять, (на что) меняю значение
      this.$set(this.inputs[index], 'value', value)
    },

    addInput () {
      this.inputs.push({
        id: this.inputs.length + 1,
        value: '',
        label: 'INPUTid' + (this.inputs.length + 1)
      })
    }
  }
}
</script>

<template>
  <div id="fields">
    <div class="input-value">{{ inputValue }}</div>
    <Field
      ref="Field"
      v-model="inputValue"
      :additionalStyles="['color:blue;', 'font-size: 20px;']"
      placeholder="placeholder"
      id="Id"
      label="label"
    />
    <hr>
    <Field
      v-for="(input, index) in inputs" :key="input.id"
      :id="input.id"
      :label="input.label"
      :value="input.value"
      @input="value => setFieldValue(value, index)"
    />
    <button @click="addInput">Добавит input</button>
  </div>
</template>

<style>
#fields {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.input-value {
  font-size: 24px;
  color: green;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
  color: white;
  background: green;
  border-radius: 10px;
  border: none;
}
</style>