<template>
<v-container>

    <v-card class="mx-auto" max-width="434" tile elevation="10">
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
                        <br>
                        <h5>ข้อมูลผู้ใช้ <v-divider-vertical></v-divider-vertical>
                            <v-btn color="success" @click="dialog1=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </h5>
                        <br>
                        <v-flex xs12>
                            <div v-for="item in informationfarmer" :key="item.name">
                                <v-text-field :readonly="dialog1" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                            </div>
                            <div>
                                <h8>ภาพถ่ายบัตรประจำตัวประชาชน</h8>
                                <v-img height="200" width="350" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                            </div>
                        </v-flex>
                        <hr>

                        <br>
                        <h5>ข้อมูลฟาร์ม <v-divider-vertical></v-divider-vertical>
                            <v-btn color="success" @click="dialog1=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                            </v-btn>
                        </h5>
                        <div>
                                <h8>สภาพฟาร์ม</h8>
                                <v-img height="200" width="350" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></v-img>
                            </div>
                        <br>
                        <v-flex xs12>
                            <div v-for="item in informationfarm" :key="item.name">
                                <v-text-field :readonly="dialog1" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                            </div>
                            
                        </v-flex> 

                    </v-card-text>
                </v-card>
            </v-tab-item>

            <v-tab-item>
                <v-card flat background-color="transparent" color="basil">
                    <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
                        <template v-slot:top>
                            <v-toolbar flat color="white">
                                <v-toolbar-title>ข้อมูลกระบือ</v-toolbar-title>
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
                                                    <v-col cols="12" sm="6" >
                                                        <v-text-field v-model="editedItem.IDcardFarmer" label="หมายเลขบัตรประชาชนเกษตรกร"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.nonb" label="ชื่อหรือหมายเลขควาย"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.nid" label="หมายเลข NID"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.nmi" label="หมายเลขไมโครชิป"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.birth" label="วัน/เดือน/ปี เกิด"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.sex" label="เพศ"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.age" label="อายุ (..ปี..เดือน)"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.color" label="สี"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.from" label="แหล่งที่มา"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.price" label="ราคา"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.status" label="สถานะควาย"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.nonf" label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.nidf" label="หมายเลข NID พ่อ"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.nmif" label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.nmim" label="ชื่อหรือหมายเลขแม่"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.nidm" label="หมายเลข NID แม่"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.mim" label="หมายเลขไมโครชิปแม่"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.weight" label="น้ำหนัก (กิโลกรัม)"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.cwidth" label="ความกว้างรอบอก (เซนติเมตร)"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.blength" label="ความยาวลำตัว (เซนติเมตร)"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field v-model="editedItem.height" label="ความสูง (เซนติเมตร)"></v-text-field>
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
        dialog1: true,
        dialog: false,
        items: [
            'ข้อมูลเกษตกร', 'ข้อมูลกระบือ',
        ],
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
            // {
            //     text: 'ใบพันธุ์ประวัติ',
            //     value: 'certifacate'
            // },
            {
                text: 'การจัดการ',
                value: 'actions',
                // sortable: false
            },
        ],

        informationfarmer: [{
                describe: 'คำนำหน้า',
                calories: 'นาย',
            },
            {
                describe: 'ชื่อ',
                calories: 'เชิดชู',
            },
            {
                describe: 'นามสกุล',
                calories: 'แก้วบุญเรือง',
            },
            {
                describe: 'หมายเลขบัตรประจำตัวประชาชน',
                calories: '3560700347135',
            },
            {
                describe: 'เพศ',
                calories: 'ชาย',
            },
            {
                describe: 'อายุ',
                calories: '58',
            },
            {
                describe: 'ที่อยู่ตามทะเบียนบ้าน',
                calories: '4 หมู่ 7 ต.เจริญราษฎร์ อ.แม่ใจ จ.พะเยา 56130',
            },
            {
                describe: 'เบอร์โทรศัพท์',
                calories: '0861800385',
            },

        ],

        informationfarm: [{
                describe: 'ชื่อฟาร์ม',
                calories: 'ฟาร์มพ่อหร่วน',
            },
            {
                describe: 'บ้านเลขที่ ถนน ซอย',
                calories: 'เชิดชู',
            },
            {
                describe: 'พิกัดฟาร์มตามระบบ GPS (ละติจูด)',
                calories: '19.391271',
            },
            {
                describe: 'พิกัดฟาร์มตามระบบ GPS (ลองติจูด)',
                calories: '99.816495',
            },
            {
                describe: 'จำนวนควายทั้งหมด',
                calories: '40',
            },
            {
                describe: 'กลุ่มเกษตรกร',
                calories: 'กลุ่มแม่ใจ',
            },
            {
                describe: 'ตำบล',
                calories: 'เจริญราษฎร์',
            },
            {
                describe: 'อำเภอ',
                calories: 'แม่กา',
            },
            {
                describe: 'จังหวัด',
                calories: 'พะเยา',
            },
            {
                describe: 'ไปรษณีย์',
                calories: '56000',
            },

        ],

        desserts: [],
        editedIndex: -1,
        editedItem: {
            IDcardFarmer: '',
            nonb: '',
            nid: '',
            nmi: '',
            birth: ''
        },
        defaultItem: {
            name: '',
            number: '',
            gene: '',
            age: '',
            certifacate: ''
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
                    certifacate: ''
                },
                {
                    name: 'กระบือ2',
                    number: '2',
                    gene: 'thai',
                    age: '2ปี1เดือน',
                    certifacate: ''
                },
                {
                    name: 'กระบือ3',
                    number: '9',
                    gene: 'thai',
                    age: '6ปี2เดือน',
                    certifacate: ''
                },
                {
                    name: 'กระบือ4',
                    number: '7',
                    gene: 'thai',
                    age: '1ปี',
                    certifacate: ''
                },
                {
                    name: 'กระบือ5',
                    number: '1',
                    gene: 'thai',
                    age: '2ปี',
                    certifacate: ''
                },
                {
                    name: 'กระบือ6',
                    number: '2',
                    gene: 'thai',
                    age: '3ปี',
                    certifacate: ''
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
