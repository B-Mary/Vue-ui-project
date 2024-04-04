<template>
    <h1 class="heading-1">Checkbox</h1>
    <h2 class="heading-2">Checkbox Active</h2>
    {{ checkboxActive }}
    <div class="line">
        <checkbox 
            label="Checkbox Active"
            id="checkboxActive"
            name="checkboxActive"
            value="i try do it"
            v-model:checked="checkboxActive"
        />
    </div>

    <h2 class="heading-2">Checkbox Disabled</h2>
    <div class="line">
        <checkbox 
            label="Checkbox Disabled"
            id="checkboxDisabled"
            name="checkboxDisabled"
            value="i try do it"
            :disabled="checkboxDisabled"
            v-model:checked="checkboxDisabledChecked"
        />
    </div>
    <h2 class="heading-2">Checkbox Group</h2>
    <div class="line line_block">
        <p>Selected Heroes: {{selectedHeroes}}</p>
        
        <checkbox-group v-model:value="selectedHeroes" name="heroes" :options="listOfHeroes"/>
    </div>
    <h2 class="heading-2">Switch</h2>
    <div class="line line_block">
        <p>Switch : {{switchProffesional}}</p>
        <checkbox 
            label="I'am a Professional"
            id="switch"
            name="switch"
            value="I'am a Professional"
            type="switch"
            v-model:checked="switchProffesional"  
        />
    </div>
</template>

<script setup>
import {ref} from 'vue'
import Checkbox from '@/components/Checkbox/checkbox.vue'
import CheckboxGroup from '@/components/Checkbox/checkboxGroup.vue'


const checkboxActive = ref(true)
const checkboxDisabled = ref(true)
const checkboxDisabledChecked = ref(true)
const switchProffesional = ref(false)

const listOfHeroes = ref([
    {name: 'spider man', id: 'h1'},
    {name: 'iron man', id: 'h2'},
    {name: 'tor', id: 'h3'},
    {name: 'hoyk', id: 'h4'},
    {name: 'strendzh', id: 'h5'},
])

//тут будут хранится те что мы выберем из масива
 const selectedHeroes = ref(['h1', 'h3'])

 
</script>

<style lang="scss" scoped>

</style>