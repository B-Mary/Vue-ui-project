<template>
    <h1 class="heading-1">Progress</h1>
    <h2 class="heading-2">Progress Bar</h2>
    <div class="line line_block">
        <ProgressBar :percent="percentBar" color="danger"/>
        <Button label="Add 10%" @click="addPercentBar"/> 
        <Button label="Minus 10%" @click="minusPercentBar"/> 
    </div>
    <br>
    <br>
    <h2 class="heading-2">Progress Circle Bar </h2>
    <div class="line line_block">
        <ProgressCircle :percent="percentCircle" color="success" />
        <Button label="Add 10%" @click="addPercentCircleBar"/> 
        <Button label="Minus 10%" @click="minusPercentCircleBar"/> 
    </div>
    
</template>

<script setup>
import {ref} from 'vue'
import Button from '@/components/Button.vue'
import ProgressBar from '@/components/Progress/ProgressBar.vue'
import ProgressCircle from '@/components/Progress/ProgressCircle.vue'

const percentBar = ref(40)
const percentCircle = ref(60)

const addPercentBar = () => {
    percentBar.value +=10
    if (percentBar.value > 100){
        percentBar.value = 100 
    }
}
const minusPercentBar = () => {
    percentBar.value -=10
    if (percentBar.value < 0){
        percentBar.value = 0 
    }
}
const addPercentCircleBar = () => {
    percentCircle.value +=10
    if (percentCircle.value > 100){
        percentCircle.value = 100 
    }
}
const minusPercentCircleBar = () => {
    percentCircle.value -=10
    if (percentCircle.value < 0){
        percentCircle.value = 0 
    }
}

</script>

<style lang="sss" scoped>

</style>