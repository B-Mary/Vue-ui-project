<template>
    <h1 class="heading-1">Radiobutton</h1>
    <h2 class="heading-2">Basic</h2>
    <div class="line line_block">
        <p>Selecled Club: {{selectedClub}}</p>
        <div
          v-for="club in footballClubs"
          :key="club.id">
          <radiobutton
            :value="club.name"
            :label="club.name"
            :id="club.id"
            name="club"
            v-model:checkedValue="selectedClub"/>
        </div>
    </div>
    <h2 class="heading-2">Disabled</h2>
    <div class="line ">
        <radiobutton
        value="Radiobutton disabled"
        label="Radiobutton disabled"
        id="RadiobuttonDisabled"
        name="RadiobuttonDisabled"
        :disabled="disabledRadio"
        v-model:checkedValue="disabledRadioChecked"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Radiobutton from '@/components/Radiobutton.vue'

const footballClubs = ref([
  {name: 'Dinamo', id: 'f1'},
  {name: 'Shahter', id: 'f2'},
  {name: 'Real Madrid', id: 'f3'},
  {name: 'Milan', id: 'f4'}
])
const selectedClub = ref('')

const disabledRadio = ref(true)
const disabledRadioChecked = ref(true)
</script>

<style lang="scss" scoped>

</style>