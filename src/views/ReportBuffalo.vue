<template>
<div style="padding:20px;">
<v-container>
    <div>
        <h3>รายงานสรุปจำนวนกระบือที่มีชีวิต</h3>
    </div>
    <br>
    <v-divider></v-divider>

    <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat color="white">
                
                <v-toolbar-title>
                    <v-text-field v-model="search" clearable flat solo-inverted hide-details append-icon="mdi-magnify" label="Search" single-line></v-text-field>
                </v-toolbar-title>
                <v-spacer></v-spacer>

                <v-overflow-btn :items="province"  label="กรุณาเลือกจังหวัด" hide-details class="pa-0"></v-overflow-btn>
                <v-overflow-btn :items="district" label="กรุณาเลือกอำเภอ" hide-details class="pa-0"></v-overflow-btn>
                <v-overflow-btn :items="place" label="กรุณาเลือกตำบล" hide-details class="pa-0"></v-overflow-btn>
                <v-overflow-btn :items="farm" label="กรุณาเลือกฟาร์ม" hide-details class="pa-0"></v-overflow-btn>

                
            </v-toolbar>
        </template>
        
        <template v-slot:no-data>
            <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
    </v-data-table>

</v-container>
</div>
</template>

<script>
export default {
    data: () => ({ 
            province: [{
                    text: 'พะเยา'
                },
                {
                    text: 'เชียงราย'
                },
                {
                    text: 'แพร่'
                },
                {
                    text: 'น่าน'
                },
            ],
            district: [{
                    text: 'พะเยา'
                },
                {
                    text: 'เชียงราย'
                },
                {
                    text: 'แพร่'
                },
                {
                    text: 'น่าน'
                },
            ],
            place: [{
                    text: 'ปัว'
                },
                {
                    text: 'แงง'
                },
                {
                    text: 'สถาน'
                },
                {
                    text: 'ศิลาแลง'
                },
                {
                    text: 'ศิลาเพชร'
                },
                {
                    text: 'อวน'
                },
                {
                    text: 'ไชยวัฒนา'
                },
                {
                    text: 'เจดีย์ชัย'
                },
                {
                    text: 'ภูคา'
                },
                {
                    text: 'สกาด'
                },
                {
                    text: 'ป่ากลาง'
                },
                {
                    text: '	วรนคร'
                },
            ],
            farm: [{
                    text: 'เชียงกลาง'
                },
                {
                    text: 'ท่าวังผา'
                },
                {
                    text: 'ทุ่งช้าง'
                },
                {
                    text: 'นาน้อย'
                },
                {
                    text: 'บ่อเกลือ'
                },
                {
                    text: 'นาน้อย'
                },
                {
                    text: 'บ้านหลวง'
                },
                {
                    text: 'ปัว'
                },
                {
                    text: 'ภูเพียง'
                },
                {
                    text: 'แม่จริม'
                },
                {
                    text: 'เมืองน่าน'
                },
                {
                    text: 'เวียงสา'
                },
                {
                    text: 'สองแคว'
                },
                {
                    text: 'สันติสุข'
                },
            ],
         
        search: '',
        dialog: false,
        headers: [{
                text: 'ชื่อหรือหมายเลขกระบือ',
                value: 'id'
            },
            {
                text: 'เพศ',
                value: 'sex'
            },
            {
                text: 'อายุ',
                value: 'age'
            },
            {
                text: 'ชื่อฟาร์ม',
                value: 'farm'
            },
            {
                text: 'กลุ่มผู้ใช้',
                value: 'group',
                sortable: false
            },
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            id: '',
            sex: '',
            age: '',
            farm:'',
            group: '',
        },
        defaultItem: {
            id: '',
            sex: '',
            age: '',
            farm:'',
            group: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'เพิ่ม' : 'แก้ไข'
        },
    },

    watch: {
        dialog(val) {
            val || this.close()
        },
    },

    created() {
        this.initialize()
    },

    methods: {
        initialize() {
            this.desserts = [{
                    id: 'ลูกมะลิ1',
                    sex: 'เมีย',
                    age: '4 ปี 2 เดือน',
                    farm:'สวัสดิ์ฟาร์ม',
                    group: 'กลุ่มแม่ใจ',
                },
                {
                    id: 'ลูกมะลิ2',
                    sex: 'ผู้',
                    age: '2 ปี 2 เดือน',
                    farm:'สวัสดิ์ฟาร์ม',
                    group: 'กลุ่มแม่ใจ',
                },
                {
                    id: 'ชบา',
                    sex: 'เมีย',
                    age: '4 ปี 0 เดือน',
                    farm:'สวัสดิ์ฟาร์ม',
                    group: 'กลุ่มพาน',
                },
                {
                    id: 'ทองดี',
                    sex: 'ผู้',
                    age: '2 เดือน',
                    farm:'สมพจน์ฟาร์ม',
                    group: 'กลุ่มพาน',
                },
                {
                    id: 'ขวัญ',
                    sex: 'ผู้',
                    age: '3 เดือน',
                    farm:'สมพจน์ฟาร์ม',
                    group: 'กลุ่มแม่กา',
                },
                {
                    id: 'มาลี',
                    sex: 'ผู้',
                    age: '2 ปี 9 เดือน',
                    farm:'ไพรัชฟาร์ม',
                    group: 'กลุ่มแม่กา',
                },
                {
                    id: 'เปีย',
                    sex: 'เมีย',
                    age: '1 ปี 2 เดือน',
                    farm:'พิเชษฐ์ฟาร์ม',
                    group: 'กลุ่มพะเยา',
                },
                {
                    id: 'ดำ',
                    sex: 'ผู้',
                    age: '5 ปี 7 เดือน',
                    farm:'พิเชษฐ์ฟาร์ม',
                    group: 'กลุ่มพะเยา',
                },
                {
                    id: 'ทุย',
                    sex: 'เมีย',
                    age: '3 ปี 1 เดือน',
                    farm:'ฟาร์มพ่อหร่วน',
                    group: 'กลุ่มพะเยา',
                },
                {
                    id: 'แท่งทอง',
                    sex: 'เมีย',
                    age: '9 เดือน',
                    farm:'ฟาร์มพ่อหร่วน',
                    group: 'กลุ่มพะเยา',
                },

            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

        deleteItem(item) {
            const index = this.desserts.indexOf(item)
            confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem)
            } else {
                this.desserts.push(this.editedItem)
            }
            this.close()
        },
    },
}
</script>

<style  scoped>

</style>
