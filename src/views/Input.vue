<template>
    <h1 class="heading-1">Inputs</h1>
    <h2 class="heading-2">Validation</h2>

    <form @submit.prevent="submitForm">
        <Input
            label="Your name"
            name="name"
            placeholder="Input your name"
            v-model:value="valid.nameField.$model"
            :error="valid.nameField.$errors"
        />
        <Input
            label="Your email"
            name="email"
            placeholder="Input your email"
            v-model:value="valid.emailField.$model"
            :error="valid.emailField.$errors"
        />
        <Input
            label="Your lucky number"
            name="lucky"
            placeholder="Input lucky number"
            v-model:value="valid.luckyField.$model"
            :error="valid.luckyField.$errors"
        />
        <Input
            label="Your password"
            name="password"
            placeholder="Input password"
            type="password"
            v-model:value="passwordField"
        />
         <Input
            label="Confirm password"
            name="confirm"
            placeholder="Confirm password"
            type="password"
            v-model:value="valid.confirmPasswordField.$model"
            :error="valid.confirmPasswordField.$errors"
        /> 
        <Input
            label="Frontend string"
            name="frontend"
            placeholder="Input string with frontend"
            v-model:value="valid.frontendField.$model"
            :error="valid.frontendField.$errors"
        />
        <Button label="Submit" color="primary"></Button>
    </form>
</template>

<script setup>
import {ref, computed} from 'vue'
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'
import useValidate from '@vuelidate/core'
import {helpers, minLength, maxLength, numeric, email, sameAs} from '@vuelidate/validators'

const nameField = ref('')
const emailField = ref('')
const luckyField = ref('')
const passwordField = ref('')
const confirmPasswordField = ref('')
const frontendField = ref('')

const mustBeFrontend = (value) => value.includes('frontend')

const rules = computed(() => ({
    nameField: {
        // на англ стандартная валидация не меньше 3х символов
        // minLength: minLength(3)

        // пишем свой текст на укр, типа ошибка меньше трех символов
        minLength: helpers.withMessage(`Мінімальна довжина: три символи`, minLength(3))
    },
    emailField: {
        email: helpers.withMessage(`Ви ввели неправильний email`, email)
    },
    luckyField: {
        maxLength: helpers.withMessage(`Максимальна довжина: 2 символи`, maxLength(2)),
        numeric: helpers.withMessage(`Тільки числа`, numeric)
    },
    confirmPasswordField: {
        sameAsPassword: helpers.withMessage(`Паролі не співпадають`, sameAs(passwordField.value))
    },
    frontendField: {
        frontendField: helpers.withMessage(`Повинно містити слово frontend`, mustBeFrontend)
    }
}))

const valid = useValidate(rules, {nameField, emailField, luckyField, confirmPasswordField, frontendField})

 const submitForm = () => {
    // это вызов функции valid, даже если мы ничего в полях не писали, проверка запустилась
    valid.value.$touch()
    // проверка, если поля заполнені правильно, делаем візов Alert submit, если нет - просто return
    // value.valid.$error - показывает true - если неправильно заполненые, false - все ок
    if (valid.value.$error) return
    alert('Form submitted')
}
</script>

<style lang="scss" scoped>

</style>