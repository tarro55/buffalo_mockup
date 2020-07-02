<template>
<v-container class="bg">
    <v-container>
        <h2>ข้อมูลเกษตกร</h2>
        <v-divider></v-divider>
    </v-container>
    <v-container>

        <v-card class="mx-auto rounded-lg elevation-10" max-width="434">
            <v-img height="220" src="https://images.pexels.com/photos/3145153/pexels-photo-3145153.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                <v-row align="end" class="fill-height">
                    <v-col align-self="start" class="pa-0" cols="12">
                        <v-avatar class="profile elevation-10 rounded-lg" color="grey" size="164" tile>
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

        <v-card dense class="rounded-lg pa-2">
            <v-tabs grow color="green">
                <v-tab>
                    <v-icon>mdi-account-outline</v-icon>
                    <h5>ข้อมูลเกษตกร</h5>
                </v-tab>
                <v-tab>
                    <v-icon dark>mdi-file-outline</v-icon>
                    <h5>ข้อมูลกระบือ</h5>
                </v-tab>

                <v-tab-item>
                    <v-flex xs12 row wrap>
                        <v-flex xs6>
                            <v-card-text>
                                <div class="d-flex grow flex-wrap">
                                    <h5>ข้อมูลผู้ใช้</h5>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <v-btn class="rounded-lg mr-1" color="green" outlined @click="dialog1=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                            </v-btn>

                                            <v-dialog scrollable v-model="dialog" max-width="400px">
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn outlined color="error" medium dense dark class="ml-1 rounded-lg" v-bind="attrs" v-on="on">
                                                        ตั้งค่ารหัสผ่าน<v-icon>mdi-account-key</v-icon>
                                                    </v-btn>
                                                </template>
                                                <v-card>
                                                    <v-card-title>
                                                        <span class="headline"><h4>ตั้งค่ารหัสผ่าน</h4></span>
                                                    </v-card-title>

                                                    <v-card-text>
                                                        <v-container>
                                                            <v-row dense>
                                                                <v-col cols="12">
                                                                    <v-text-field dense readonly class="rounded-lg" prepend-inner-icon="mdi-account" color="green" outlined v-model="setPass.username"  label="ชื่อผู้ใช้งาน"></v-text-field>
                                                                </v-col>
                                                                <v-col cols="12">
                                                                    <v-text-field dense readonly class="rounded-lg" prepend-inner-icon="mdi-email" color="green" outlined v-model="setPass.email" label="อีเมล"></v-text-field>
                                                                </v-col>
                                                                <v-col cols="12">
                                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" outlined v-model="setPass.pass" label="รหัสผ่านใหม่"></v-text-field>
                                                                </v-col>
                                                                <v-col cols="12">
                                                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" outlined v-model="setPass.cpass" label="ยืนยันรหัสผ่านใหม่"></v-text-field>
                                                                </v-col>
                                                            </v-row>
                                                        </v-container>
                                                    </v-card-text>

                                                    <v-card-actions>
                                                        <v-spacer></v-spacer>
                                                        <v-btn color="green" text @click="save">
                                                            <h5>บันทึก</h5>
                                                        </v-btn>
                                                        <v-btn color="black" text @click="close">
                                                            <h5>ยกเลิก</h5>
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                            
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <v-flex xs12>
                                    <div v-for="item in informationfarmer" :key="item.name">
                                        <v-text-field dense class="rounded-lg" outlined :readonly="dialog1" v-model="item.calories" name="name" :label="item.describe" :prepend-inner-icon="item.icon" color="green" id="id"></v-text-field>
                                    </div>
                                    <div>
                                        <center>
                                            <h6>ภาพถ่ายบัตรประจำตัวประชาชน</h6>
                                            <v-img class="rounded-lg elevation-5" height="200" width="350" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNf3OTIf1lugjQhtLRTP8cwuosPAJmIykTsry1UL87ArfVFx84&usqp=CAU"></v-img>
                                        </center>
                                    </div>
                                </v-flex>
                            </v-card-text>
                        </v-flex>

                        <v-flex xs6>
                            <v-card-text>
                                <div class="d-flex grow flex-wrap">
                                    <h5>ข้อมูลฟาร์ม</h5>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <v-btn class="rounded-lg " color="green" outlined @click="dialog1=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                            </v-btn>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h6>สภาพฟาร์ม</h6>
                                    <center>
                                        <v-img class="rounded-lg elevation-5" height="200" width="auto" src="https://images.pexels.com/photos/158179/lake-constance-sheep-pasture-sheep-blue-158179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                                        </v-img>
                                    </center>
                                </div>
                                <br>
                                <v-flex xs12>
                                    <div v-for="item in informationfarm1" :key="item.name">
                                        <v-text-field dense class="rounded-lg" outlined :readonly="dialog1" v-model="item.calories1" name="name" :label="item.describe1" :prepend-inner-icon="item.icon" color="green" id="id"></v-text-field>
                                    </div>

                                </v-flex>
                            </v-card-text>
                        </v-flex>
                    </v-flex>

                </v-tab-item>

                <v-tab-item>
                    <v-card flat background-color="transparent" color="basil">
                        <v-data-table dense :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-5 rounded-lg pa-2">
                            <template v-slot:top>
                                <v-toolbar flat color="white">
                                    <v-toolbar-title>ข้อมูลกระบือ</v-toolbar-title>
                                    <v-divider class="mx-4" inset vertical></v-divider>
                                    <v-toolbar-title>
                                        <!-- <v-text-field v-model="search" clearable flat solo-inverted hide-details class="" append-icon="mdi-magnify" label="Search" single-line></v-text-field> -->
                                        <v-text-field dense class="rounded-lg" color="green" v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                                    </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-dialog v-model="dialog" scrollable max-width="800px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="green" outlined medium dark class="mb-2 rounded-lg" v-bind="attrs" v-on="on">
                                                เพิ่มกระบือ<v-icon>mdi-plus</v-icon>
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="headline">{{ formTitle }}</span>
                                            </v-card-title>

                                            <v-card-text>
                                                <v-container>
                                                    <v-row dense>
                                                        <!-- <v-col cols="12" sm="6">
                                                        <v-text-field outlined v-model="editedItem.IDcardFarmer" label="หมายเลขบัตรประชาชนเกษตรกร"></v-text-field>
                                                    </v-col> -->
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined v-model="editedItem.nonb" label="ชื่อหรือหมายเลขควาย"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined v-model="editedItem.nid" label="หมายเลข NID"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined v-model="editedItem.nmi" label="หมายเลขไมโครชิป"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-calendar" color="green" outlined v-model="editedItem.birth" label="วัน/เดือน/ปี เกิด"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-gender-male-female" color="green" outlined v-model="editedItem.sex" label="เพศ"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-calendar-clock" color="green" outlined v-model="editedItem.age" label="อายุ (..ปี..เดือน)"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-invert-colors" color="green" outlined v-model="editedItem.color" label="สี"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-import" color="green" outlined v-model="editedItem.from" label="แหล่งที่มา"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined v-model="editedItem.price" label="ราคา"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-post-outline" color="green" outlined v-model="editedItem.status" label="สถานะควาย"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined v-model="editedItem.nonf" label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined v-model="editedItem.nidf" label="หมายเลข NID พ่อ"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined v-model="editedItem.nmif" label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined v-model="editedItem.nmim" label="ชื่อหรือหมายเลขแม่"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined v-model="editedItem.nidm" label="หมายเลข NID แม่"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined v-model="editedItem.mim" label="หมายเลขไมโครชิปแม่"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-weight-kilogram" color="green" outlined v-model="editedItem.weight" label="น้ำหนัก (กิโลกรัม)"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" outlined v-model="editedItem.cwidth" label="ความกว้างรอบอก (เซนติเมตร)"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" outlined v-model="editedItem.blength" label="ความยาวลำตัว (เซนติเมตร)"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-human-male-height-variant" color="green" outlined v-model="editedItem.height" label="ความสูง (เซนติเมตร)"></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-file-input dense class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined multiple label="เพิ่มภาพด้านหน้า"></v-file-input>
                                                        </v-col>
                                                        <v-col cols="12" sm="6">
                                                            <v-file-input dense class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined multiple label="เพิ่มภาพด้านข้าง"></v-file-input>
                                                        </v-col>

                                                    </v-row>
                                                </v-container>
                                            </v-card-text>

                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="green" text @click="save">
                                                    <h5>บันทึก</h5>
                                                </v-btn>
                                                <v-btn color="black" text @click="close">
                                                    <h5>ยกเลิก</h5>
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-toolbar>
                            </template>

                            <template v-slot:item.actions="{ item }">

                                <v-tooltip v-model="show" top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on">
                                            <v-icon>mdi-clipboard-text-outline</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>ใบพันธุ์ประวัติ</span>
                                </v-tooltip>

                                <v-tooltip v-model="show" top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon v-bind="attrs" v-on="on" @click="$router.push(`buffalo_detail`)">
                                            <v-icon>mdi-eye-outline</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>ดูข้อมูล</span>
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
                    </v-card>
                </v-tab-item>

            </v-tabs>
        </v-card>
    </v-container>
</v-container>
</template>

<script>
import Swal from 'sweetalert2'
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
            {
                text: 'เพศ',
                value: 'sex'
            },
            {
                text: 'การจัดการ',
                value: 'actions',
                // sortable: false
            },
        ],
        setPass:{
            username: 'dang123',
            email:'dang123@email.com',
            pass:'',
            cpass:'',
        },

        informationfarmer: [{
                describe: 'คำนำหน้า',
                calories: 'นาย',
                icon: 'mdi-human-male-female'
            },
            {
                describe: 'ชื่อ',
                calories: 'เชิดชู',
                icon: 'mdi-card-account-details-outline',
            },
            {
                describe: 'นามสกุล',
                calories: 'แก้วบุญเรือง',
                icon: 'mdi-card-account-details-outline',
            },
            {
                describe: 'หมายเลขบัตรประจำตัวประชาชน',
                calories: '3560700347135',
                icon: 'mdi-id-card',
            },
            {
                describe: 'เพศ',
                calories: 'ชาย',
                icon: 'mdi-human-male-female',
            },
            {
                describe: 'อายุ',
                calories: '58',
                icon: 'mdi-account-clock-outline',
            },
            {
                describe: 'ที่อยู่ตามทะเบียนบ้าน',
                calories: '4 หมู่ 7 ต.เจริญราษฎร์ อ.แม่ใจ จ.พะเยา 56130',
                icon: 'mdi-home-map-marker',
            },
            {
                describe: 'เบอร์โทรศัพท์',
                calories: '0861800385',
                icon: 'mdi-phone',
            },

        ],

        informationfarm1: [{
                describe1: 'ชื่อฟาร์ม',
                calories1: 'ฟาร์มพ่อหร่วน',
                icon: 'mdi-home-outline',
            },
            {
                describe1: 'บ้านเลขที่ ถนน ซอย',
                calories1: 'เชิดชู',
                icon: 'mdi-home-map-marker',
            },
            {
                describe1: 'พิกัดฟาร์มตามระบบ GPS (ละติจูด)',
                calories1: '19.391271',
                icon: 'mdi-map-marker-radius-outline',
            },
            {
                describe1: 'พิกัดฟาร์มตามระบบ GPS (ลองติจูด)',
                calories1: '99.816495',
                icon: 'mdi-map-marker-radius-outline',
            },
            {
                describe1: 'จำนวนควายทั้งหมด',
                calories1: '40',
                icon: 'mdi-cow',
            },
            {
                describe1: 'กลุ่มเกษตรกร',
                calories1: 'กลุ่มแม่ใจ',
                icon: 'mdi-account-group-outline',
            },
            {
                describe1: 'ตำบล',
                calories1: 'เจริญราษฎร์',
                icon: 'mdi-map-marker-multiple-outline',
            },
            {
                describe1: 'อำเภอ',
                calories1: 'แม่กา',
                icon: 'mdi-map-marker-multiple-outline',
            },
            {
                describe1: 'จังหวัด',
                calories1: 'พะเยา',
                icon: 'mdi-map-marker-multiple-outline',
            },
            {
                describe1: 'ไปรษณีย์',
                calories1: '56000',
                icon: 'mdi-postage-stamp',
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
            return this.editedIndex === -1 ? 'ตั้งค่ารหัสผ่านใหม่' : 'ตั้งค่ารหัสผ่านใหม่'
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
                    sex: 'เมีย'
                },
                {
                    name: 'กระบือ2',
                    number: '2',
                    gene: 'thai',
                    age: '2ปี1เดือน',
                    sex: 'ผู้'
                },
                {
                    name: 'กระบือ3',
                    number: '9',
                    gene: 'thai',
                    age: '6ปี2เดือน',
                    sex: 'ผู้'
                },
                {
                    name: 'กระบือ4',
                    number: '7',
                    gene: 'thai',
                    age: '1ปี',
                    sex: 'เมีย'
                },
                {
                    name: 'กระบือ5',
                    number: '1',
                    gene: 'thai',
                    age: '2ปี',
                    sex: 'เมีย'
                },
                {
                    name: 'กระบือ6',
                    number: '2',
                    gene: 'thai',
                    age: '3ปี',
                    sex: 'เมีย'
                },
            ]
        },

        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true

        },

        deleteItem(item) {
            // const index = this.desserts.indexOf(item)
            // confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
            Swal.fire({
                title: 'คุณต้องการลบใช่หรือไม่?',
                // text: "ใช่หรือไม่",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ตกลง',
                cancelButtonText: 'ยกเลิก',
            }).then((result) => {
                if (result.value) {
                    const index = this.desserts.indexOf(item)
                    this.desserts.splice(index, 1),
                        Swal.fire(

                            'คุณทำการลบสำเร็จ!',
                            '',
                            'success',

                        )
                }
            })
        },

        close() {
            this.dialog = false
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
            })
        },

        save() {
            // if (this.editedIndex > -1) {
            //     Object.assign(this.desserts[this.editedIndex], this.editedItem)
            // } else {
            //     this.desserts.push(this.editedItem)
            // }
            // this.close()

            Swal.fire({
                title: 'คุณต้องการบันทึก?',
                // text: "ใช่หรือไม่",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ตกลง',
                cancelButtonText: 'ยกเลิก',
            }).then((result) => {
                if (this.editedIndex > -1) {
                    Object.assign(this.desserts[this.editedIndex], this.editedItem)
                } else {
                    this.desserts.push(this.editedItem)
                }
                this.close()
                if (result.value) {
                    Swal.fire(
                        'บันทึก!',
                        'คุณทำการบันทึกสำเร็จ',
                        'success'
                    )
                }
            })
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
