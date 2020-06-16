<template>
<div style="padding:20px;">
    <v-container>
        <div>
            <h3>ข้อมูลผู้ใช้งานระบบ</h3>
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

                    <v-overflow-btn :items="province" label="กรุณาเลือกจังหวัด" hide-details class="pa-0"></v-overflow-btn>
                    <v-overflow-btn :items="district" label="กรุณาเลือกอำเภอ" hide-details class="pa-0"></v-overflow-btn>
                    <v-overflow-btn :items="place" label="กรุณาเลือกตำบล" hide-details class="pa-0"></v-overflow-btn>
                    <v-overflow-btn :items="farm" label="กรุณาเลือกฟาร์ม" hide-details class="pa-0"></v-overflow-btn>

                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">เพิ่ม</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.IDCard" label="เลขบัตรประชาชน"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.name" label="ชื่อ"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.Phonenumber" label="เบอร์โทรศัพท์"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="4">
                                            <v-text-field v-model="editedItem.group" label="กลุ่มผู้ใช้"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">ยกเลิก</v-btn>
                                <v-btn color="blue darken-1" text @click="save">บันทึก</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
            </template>

            <template v-slot:item.actions="{ item }">

                <v-tooltip v-model="show" top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click="$router.push(`farmer_detail`)">
                            <v-icon>mdi-eye-outline</v-icon>
                        </v-btn>
                    </template>
                    <span>ดูข้อมูล</span>
                </v-tooltip>

                <v-tooltip v-model="show" top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click="editItem(item)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                    <span>แก้ไข</span>
                </v-tooltip>

                <v-tooltip v-model="show" top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click="deleteItem(item)">
                            <v-icon>mdi-delete</v-icon>
                        </v-btn>
                    </template>
                    <span>ลบ</span>
                </v-tooltip>
 
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
                value: 'IDCard'
            },
            {
                text: 'ชื่อ',
                value: 'name'
            },
            {
                text: 'เบอร์โทรศัพท์',
                value: 'Phonenumber'
            },
            {
                text: 'กลุ่มผู้ใช้',
                value: 'group'
            },
            {
                text: 'การจัดการ',
                value: 'actions',
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

<style  scoped>

</style>
