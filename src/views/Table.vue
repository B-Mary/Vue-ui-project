<template>
    <h1 class="heading-1">Table</h1>
    <span>Sort Field: {{sortField}}</span><br>
    <span>Type Field: {{typeSort}}</span><br>
    <base-table
        :head="tableHeads"
        :columnTemplates="tableSizeColumns"
        @sorting="setSort">
        <table-row
            v-for="book in bookSprting" 
            :key="book.id"
            :columnTemplates="tableSizeColumns"
            :bgRow="book.bg">


            <table-column :columnTitle="tableHeads[0]">
                {{ book.id }}
            </table-column>
            <table-column :columnTitle="tableHeads[1]">
                {{ book.author }}
            </table-column>
            <table-column :columnTitle="tableHeads[2]">
                {{ book.title }}
            </table-column>

            <table-column :image="true" :srcImage="book.image" /> 

            <table-column>
                <Button lavel="Read Online"></Button>
            </table-column>
        </table-row>
    </base-table>
</template>

<script setup>
import { ref, computed } from 'vue'
import BaseTable from '@/components/Table/BaseTable.vue'
import TableRow from '@/components/Table/TableRow.vue'
import TableColumn from '@/components/Table/TableColumn.vue'
import Button from '@/components/Button.vue'

const tableHeads = ["Id", "Author", "Title", "Cover", ""]

const tableSizeColumns = '50px 1fr 2fr 150px 140px'

const sortField = ref('id')
 // asc- по возрастанию , desc - от большего к меньшему
const typeSort = ref('asc')

const books = ref([
  {
    id: 1,
    author: 'Dmitry Glukhovsky',
    title: 'Metro 2033',
    image: 'https://images.prom.ua/2964700401_w910_h430_knigi-metro-2033.jpg',
    bg: '#FFA26B'
  },
  {
    id: 12,
    author: 'James Clear',
    title: 'Atomic Habits: An Easy',
    image: 'https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg',
    bg: '#00C48C'
  },
  {
    id: 2,
    author: 'J. K. Rowling',
    title: 'Harry Potter and the Order of the Phoenix',
    image: 'https://m.media-amazon.com/images/I/818FB6bF4aL._SL1500_.jpg',
    bg: '#00C48C'
  }
])

const bookSprting = computed (() => {
  return books.value.sort((a, b) => {
    let modifier = 1
    if (typeSort.value === 'desc') modifier = -1
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier
    return 0
  })
})

const setSort = (name) => {
  if (sortField.value === name) {
    if (typeSort.value === 'asc') {
      typeSort.value = 'desc'
    } else {
      typeSort.value = 'asc'
    }
  } else {
    sortField.value = name
  }
}
</script>