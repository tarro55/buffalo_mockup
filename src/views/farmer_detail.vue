<template>
<v-container>

    <v-card class="mx-auto" max-width="434" tile>
        <v-img height="220" src="https://images.pexels.com/photos/3145153/pexels-photo-3145153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            <v-row align="end" class="fill-height">
                <v-col align-self="start" class="pa-0" cols="12">
                    <v-avatar class="profile" color="grey" size="164" tile>
                        <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                    </v-avatar>
                </v-col>
                <v-col class="py-0">
                    <v-list-item color="rgba(0, 0, 0, .4)" dark>
                        <v-list-item-content>
                            <v-list-item-title class="title">นายแดง</v-list-item-title>
                            <!-- <v-list-item-subtitle>Network Engineer</v-list-item-subtitle> -->
                        </v-list-item-content>
                    </v-list-item>
                </v-col>
            </v-row>
        </v-img>
    </v-card>
    <br>

    <v-card class="basil basil--text">
        <v-tabs grow>
            <v-tab>
                <v-icon>mdi-account-outline</v-icon>
                <h5>ข้อมูลเกษตกร</h5>
            </v-tab>
            <v-tab>
                <v-icon dark>mdi-file-outline</v-icon>
                <h5>ข้อมูลกระบือ</h5>
            </v-tab>

            <v-tab-item>
                <v-card flat>
                    <v-card-text>
                        <h6>
                            <p class="font-weight-black">ข้อมูลผู้ใช้</p>
                            <hr>
                            <p>ชื่อ-นายสกุล : นายแดง
                                <p>เลขบัตรประจำตัวประชาชน : 1234567890123</p>
                                <p>ที่อยู่ :12/11 หมู่ที่1 ตำบลแม่กา อำเภอเมือง จังหวัดพะเยา 56000</p>
                                <p>เบอร์โทรศัพท์ : 0123123123</p>
                                <hr>
                                <p class="font-weight-black">ข้อมูลฟาร์ม</p>
                                <hr>
                                <p>ชื่อฟาร์ม : ฟาร์มนายแดง</p>
                                <p>ที่อยู่ฟาร์ม : 12/11 หมู่ที่1 ตำบลแม่กา อำเภอเมือง จังหวัดพะเยา 56000</p>
                                <p>ละติจูด : </p>
                                <p>ลองจิจูด : </p>
                                <br>
                                <p>แผนที่ฟาร์ม</p>
                                <v-card class="pa-4" flat height="500px" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg">
                                    <!-- <v-btn icon>
                                        <v-icon>mdi-dots-vertical</v-icon>
                                    </v-btn> -->
                                </v-card>
                        </h6>

                    </v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card flat background-color="transparent" color="basil">
                    <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
                        <template v-slot:top>
                            <v-toolbar flat color="white">
                                <v-toolbar-title>ข้อมูลควาย</v-toolbar-title>
                                <v-divider class="mx-4" inset vertical></v-divider>
                                <v-toolbar-title>
                                    <v-text-field v-model="search" clearable flat solo-inverted hide-details append-icon="mdi-magnify" label="Search" single-line></v-text-field>
                                </v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-dialog v-model="dialog" max-width="500px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="primary" large dark class="mb-2" v-bind="attrs" v-on="on">เพิ่ม</v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">{{ formTitle }}</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <v-container>
                                                <v-row>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field v-model="editedItem.name" label="ชื่อ"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field v-model="editedItem.number" label="เบอร์หู"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field v-model="editedItem.gene" label="พันธุ์"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6" md="4">
                                                        <v-text-field v-model="editedItem.age" label="อายุ"></v-text-field>
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
                            <v-icon class="mr-2" @click="$router.push(`buffalo_detail`)">
                                mdi-eye-outline
                            </v-icon> 
                            <v-icon @click="deleteItem(item)">
                                mdi-delete
                            </v-icon>
                        </template>
                        <template v-slot:no-data>
                            <v-btn color="primary" @click="initialize">Reset</v-btn>
                        </template>
                    </v-data-table>
                </v-card>
            </v-tab-item>

        </v-tabs>
    </v-card>

</v-container>
</template>

<script>
export default {
    data: () => ({
        tab: null,
        search: '',
        dialog: true,
        items: [
            'ข้อมูลเกษตกร', 'ข้อมูลกระบือ',
        ],
        dialog: false,
        headers: [{
                text: 'ชื่อ',
                value: 'name'
            },
            {
                text: 'เบอร์หู',
                value: 'number'
            },
            {
                text: 'พันธุ์',
                value: 'gene'
            },
            {
                text: 'อายุ',
                value: 'age'
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
            name: '',
            number: '',
            gene: '',
            age: '',
        },
        defaultItem: {
            name: '',
            number: '',
            gene: '',
            age: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? 'เพิ่ม' : 'เพิ่ม'
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
                    name: 'กระบือ1',
                    number: '3',
                    gene: 'thai',
                    age: '4ปี0เดือน',
                },
                {
                    name: 'กระบือ2',
                    number: '2',
                    gene: 'thai',
                    age: '2ปี1เดือน',
                },
                {
                    name: 'กระบือ3',
                    number: '9',
                    gene: 'thai',
                    age: '6ปี2เดือน',
                },
                {
                    name: 'กระบือ4',
                    number: '7',
                    gene: 'thai',
                    age: '1ปี',
                },
                {
                    name: 'กระบือ5',
                    number: '1',
                    gene: 'thai',
                    age: '2ปี',
                },
                {
                    name: 'กระบือ6',
                    number: '2',
                    gene: 'thai',
                    age: '3ปี',
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
.basil {
    background-color: #FFFBE6 !important;
}

.basil--text {
    color: #356859 !important;
}
</style>
