<template>
<v-container class="bg">
    <v-container>
        <h2>ข้อมูลการเจริญเติบโตของกระบือ</h2>
        <v-divider></v-divider>
    </v-container>
    <v-container>

        <v-data-table dense :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-5 rounded-lg pa-2">
            <template v-slot:top>
                <!-- <v-flex xs12 class=""> -->
                    <!-- <v-container grid-list-xs> -->
                        <div class="d-flex grow flex-wrap">
                            <v-text-field dense class="rounded-lg pb-2" color="green" v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <v-spacer></v-spacer> 
                                <!-- <v-btn outlined color="green" medium dense dark class="mr-1 rounded-lg" v-bind="attrs" v-on="on">ส่งออกรายงาน</v-btn>  -->
                                <v-btn outlined color="green" medium dense dark class="rounded-lg">ส่งออกรายงาน</v-btn>
                           
                        </div>
                    <!-- </v-container> -->
                <!-- </v-flex> -->

                <!-- <v-toolbar flat color="white" class=""> -->
                    <v-layout row wrap>
                        <v-flex xs12 md4>
                        <v-select dense color="green" :items="province" label="กรุณาเลือกจังหวัด" hide-details class="rounded-lg pa-3 " outlined></v-select>
                    </v-flex>
                    <v-flex xs12 md4>
                        <v-select dense color="green" :items="district" label="กรุณาเลือกอำเภอ" hide-details class="rounded-lg pa-3" outlined></v-select>
                    </v-flex>
                    <v-flex xs12 md4>
                         <v-select dense color="green" :items="place" label="กรุณาเลือกตำบล" hide-details class="rounded-lg pa-3" outlined></v-select> 
                    </v-flex> 
                    </v-layout>
                <!-- </v-toolbar> -->
            </template>
            <template v-slot:no-data>
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>

    </v-container>

</v-container>
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
                text: 'เลขบัตรประชาชน',
                value: 'IDCard',
                sortable: false
            },
            {
                text: 'ชื่อ',
                value: 'name',
                sortable: false
            },
            {
                text: 'จำนวนกระบือทั้งหมด',
                value: 'Phonenumber',
                sortable: false
            },
            {
                text: 'จำนวนกระบือายุ 240 วัน',
                value: 'age240',
                sortable: false
            },
            {
                text: 'จำนวนกระบือายุ 400 วัน',
                value: 'age400',
                sortable: false
            },
            {
                text: 'จำนวนกระบือายุ 600 วัน',
                value: 'age600',
                sortable: false
            },
            {
                text: 'ตำบล',
                value: 'district',
                sortable: false
            },
            {
                text: 'อำเภอ',
                value: 'canton',
                sortable: false
            },
            {
                text: 'จังหวัด',
                value: 'province',
                sortable: false
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
            IDCard: '',
            name: '',
            Phonenumber: '',
            group: '',
        },
        defaultItem: {
            IDCard: '',
            name: '',
            Phonenumber: '',
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
                    IDCard: 1234567890123,
                    name: 'นายแดง แดงแดง',
                    Phonenumber: '0911231231',
                    group: 'กลุ่มแม่ใจ',
                },
                {
                    IDCard: 3123412345612,
                    name: 'นายดำ ดำดำ',
                    Phonenumber: '0914123412',
                    group: 'กลุ่มแม่ใจ',
                },
                {
                    IDCard: 1231241231233,
                    name: 'นายเขียว เขียวเขียว',
                    Phonenumber: '0812312312',
                    group: 'กลุ่มพาน',
                },
                {
                    IDCard: 1111111111111,
                    name: 'นายเขียว เขียวขจี',
                    Phonenumber: '0822312312',
                    group: 'กลุ่มพาน',
                },
                {
                    IDCard: 2222222222222,
                    name: 'นายเหลือง เหลืองเหลือง',
                    Phonenumber: '0833333333',
                    group: 'กลุ่มแม่กา',
                },
                {
                    IDCard: 3333333333333,
                    name: 'นายชัย',
                    Phonenumber: '0844444444',
                    group: 'กลุ่มแม่กา',
                },
                {
                    IDCard: 4444444444444,
                    name: 'นายใหญ่',
                    Phonenumber: '0855555555',
                    group: 'กลุ่มพะเยา',
                },
                {
                    IDCard: 5555555555555,
                    name: 'นายเล็ก',
                    Phonenumber: '0866666666',
                    group: 'กลุ่มพะเยา',
                },
                {
                    IDCard: 6666666666666,
                    name: 'นายคำ',
                    Phonenumber: '0877777777',
                    group: 'กลุ่มพะเยา',
                },
                {
                    IDCard: 7777777777777,
                    name: 'นายนาย',
                    Phonenumber: '0888888888',
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

<style scoped>
.bg {
    /* background: rgba(0, 128, 0, 0.1); */
    /* background: rgba(242, 243, 244);
    background-size: cover; */

    background: rgba(242, 243, 244);
    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
