<template>
    <div v-for="option in options" :key="option.id">
        <checkbox 
            :label="option.name"
            :id="option.id"
            :name="name"
            :value="option.name"
            :checked="value.includes(option.id)"
            group
            @updateCheckboxGroup="check"
        />
    </div> 
</template>


<script setup>
import Checkbox from '@/components/Checkbox/checkbox.vue'

const emits = defineEmits(['update:value'])

const props = defineProps ({
    value: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
     options: {        
         type: Array,
         required: true,
         validator: (value) => {
             const hasNameKey = value.every((options) => Object.keys(options).includes('name'))
             const hasIdKey = value.every((options) => Object.keys(options).includes('id'))
             return hasNameKey && hasIdKey
         }
     }
})

const check = (params) => {
    let updateValue = [...props.value]
    if(params.checked){
        updateValue.push(params.optionId)
    } else{
        updateValue.splice(updateValue.indexOf(params.optionId), 1) 
    }
    emits('update:value', updateValue)
}


</script>