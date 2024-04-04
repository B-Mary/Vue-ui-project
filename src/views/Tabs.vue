<template>
    <h1 class="heading-1">Tabs</h1>
    <Tabs
        :names="tabs"
        :selectedTab="selectedTab"
        @changeTab="changeTab">
    
        <div v-if="selectedTab === 'About'">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptatum nihil fugiat voz
        </div>
        <div v-if="selectedTab === 'React'">
            Lorem ipsum disicing elit. Veritatis voluptatum nihil fugiat voz
        </div>
        <div v-if="selectedTab === 'Vue'">
            Lorem ipsum disicing elit. Veritatis voluptatum nihsddddddddddddddddddddddddddddddl fugiat voz
        </div>
        <div v-if="selectedTab === 'Angular'"> 
            Lorem ipsum dolor sit amet.
        </div>
    </Tabs>
    
</template>

<script setup>
import { ref } from 'vue'
import Tabs from '@/components/Tabs.vue'

const tabs = [
    {name: 'About', label: 'О проекте'},
    {name: 'React', label: 'О React'},
    {name: 'Vue', label: 'О Vue'},
    {name: 'Angular', label: 'О Angular'}
]

const selectedTab = ref('Vue')

const changeTab = (tabName) => {
    selectedTab.value = tabName
}
</script>