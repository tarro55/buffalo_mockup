<template>
<v-container class="bg">
    <v-container>
        <h2>เกษตกร</h2>
        <v-divider></v-divider>
    </v-container>

    <v-container grid-list-xs>
        <!-- <v-data-table dense :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-5 rounded-lg pa-2"> -->
        <v-data-table dense :headers="headers" :items="desserts" :search="search" class="elevation-5 rounded-lg pa-2">
            <template v-slot:top>
                <!-- <v-flex xs12 class="">
                    <v-container grid-list-xs> -->
                <div class="d-flex grow flex-wrap pb-2">
                    <v-text-field dense class="rounded-lg " color="green" v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                    <v-spacer></v-spacer>
                    <div class="pt-1">
                        <v-dialog scrollable v-model="dialog" max-width="800px">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn outlined color="green" block medium dense dark class="mr-1 rounded-lg" v-bind="attrs" v-on="on">
                                    <v-icon>mdi-plus</v-icon>เพิ่มเกษตรกร
                                </v-btn>
                            </template>
                            <v-card>
                                <v-card-title>
                                    <h4>เพิ่มเกษตกร</h4>
                                </v-card-title>

                                <v-card-text>
                                    <v-container>
                                        <v-row dense>

                                            <v-col cols="12">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-id-card" color="green" outlined v-model="editedItem.IDcardFarmer" label="หมายเลขบัตรประชาชน"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.nonb" label="คำนำหน้า "></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.nonb" label="ชื่อ "></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.nid" label="นามสกุล"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-file-input dense chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" v-model="editedItem.birth" label="ภาพถ่ายบัตรประจำตัวประชาชน"></v-file-input>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-human-male-female" color="green" outlined v-model="editedItem.sex" label="เพศ"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-account-clock-outline" color="green" outlined v-model="editedItem.age" label="อายุ"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="ตำบล"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="อำเภอ"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined label="จังหวัด"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-postage-stamp" color="green" outlined label="รหัสไปรษณีย์"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-phone" color="green" outlined v-model="editedItem.nmi" label="เบอร์โทรศัพท์"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="12">
                                                <v-divider></v-divider>
                                            </v-col>
                                            <v-col cols="12" sm="12" class="pb-4">
                                                <center>
                                                    <h4>ฟาร์ม</h4>
                                                </center>
                                            </v-col>
                                            <v-col cols="12" >
                                                <!-- <v-file-input dense chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" v-model="editedItem.from" label="ภาพถ่ายเจ้าของฟาร์ม"></v-file-input> -->
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-file-input dense chips class="rounded-lg" prepend-inner-icon="" color="green" outlined accept="image/*" v-model="editedItem.price" label="ภาพถ่ายสภาพฟาร์ม"></v-file-input>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-home-outline" color="green" outlined v-model="editedItem.status" label="ชื่อฟาร์ม"></v-text-field>
                                            </v-col>
                                            <!-- <v-col cols="12" sm="6">
                                                        <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nonf" label="บ้านเลขที่ ถนน ซอย"></v-text-field>
                                                    </v-col> --> 
                                            <v-col cols="12" sm="6">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green" outlined v-model="editedItem.mim" label="พิกัดฟาร์มตามระบบ GPS (ละติจูด)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-radius-outline" color="green" outlined v-model="editedItem.weight" label="พิกัดฟาร์มตามระบบ GPS (ลองติจูด)"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined v-model="editedItem.cwidth" label="จำนวนกระบือทั้งหมด"></v-text-field>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-account-group-outline" color="green" outlined v-model="editedItem.blength" label="กลุ่มเกษตรกร"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nidf" label="ตำบล"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nmif" label="อำเภอ"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-map-marker-multiple-outline" color="green" outlined v-model="editedItem.nmim" label="จังหวัด"></v-select>
                                            </v-col>
                                            <v-col cols="12" sm="6">
                                                <v-select dense class="rounded-lg" prepend-inner-icon="mdi-postage-stamp" color="green" outlined v-model="editedItem.nidm" label="รหัสไปรษณีย์"></v-select>
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
                <!-- </v-container>
                </v-flex> -->

                <v-layout row wrap>
                    <v-flex xs12 md3>
                        <v-select dense color="green" :items="province" label="กรุณาเลือกจังหวัด" hide-details class="rounded-lg" outlined></v-select>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-select dense color="green" :items="district" label="กรุณาเลือกอำเภอ" hide-details class="rounded-lg" outlined></v-select>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-select dense color="green" :items="place" label="กรุณาเลือกตำบล" hide-details class="rounded-lg" outlined></v-select>
                    </v-flex>
                    <v-flex xs12 md3>
                        <v-select dense color="green" :items="farm" label="กรุณาเลือกฟาร์ม" hide-details class="rounded-lg" outlined></v-select>
                    </v-flex>
                </v-layout>
                <!-- <v-toolbar flat color="white" class=""> -->
                <!-- <v-toolbar-title>
                        <v-text-field color="green" v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line class="rounded-lg pa-1"></v-text-field>
                    </v-toolbar-title>
                    <v-spacer></v-spacer> -->

                <!-- <v-select dense color="green" :items="province" label="กรุณาเลือกจังหวัด" hide-details class="rounded-lg" outlined></v-select>
                    <v-select dense color="green" :items="district" label="กรุณาเลือกอำเภอ" hide-details class="rounded-lg" outlined></v-select>
                    <v-select dense color="green" :items="place" label="กรุณาเลือกตำบล" hide-details class="rounded-lg" outlined></v-select>
                    <v-select dense color="green" :items="farm" label="กรุณาเลือกฟาร์ม" hide-details class="rounded-lg" outlined></v-select> -->
                <!-- </v-toolbar> -->
            </template>

            <template v-slot:item.actions="{ item }">
                <!-- <v-tooltip v-model="show" top> -->
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click="$router.push(`farmerdetail`)">
                            <v-icon>mdi-eye-outline</v-icon>
                        </v-btn>
                    </template>
                    <span>ดูข้อมูล</span>
                </v-tooltip>

                <!-- <v-tooltip v-model="show" top> -->
                <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on" @click="editItem(item)">
                            <v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </template>
                    <span>แก้ไข</span>
                </v-tooltip>

                <!-- <v-tooltip v-model="show" top> -->
                <v-tooltip top>
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

</v-container>
</template>

<script>
import Swal from 'sweetalert2'
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
        farm: [{
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

        search: '',
        dialog: false,
        headers: [{
                text: 'เลขบัตรประชาชน',
                value: 'IDCard',
                sortable: false,
            },
            {
                text: 'ชื่อ',
                value: 'name',
                sortable: false,
            },
            {
                text: 'เบอร์โทรศัพท์',
                value: 'Phonenumber',
                sortable: false,
            },
            {
                text: 'ตำบล',
                value: 'place',
                sortable: false,
            },
            {
                text: 'อำเภอ',
                value: 'district',
                sortable: false,
            },
            {
                text: 'จังหวัด',
                value: 'province',
                sortable: false,
            },
            {
                text: 'ฟาร์ม',
                value: 'farm',
                sortable: false,
            },
            {
                text: 'กลุ่มเกษตกร',
                value: 'group',
                sortable: false,
            },
            {
                text: 'การจัดการ',
                value: 'actions',
                sortable: false,
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
            return this.editedIndex === -1 ? 'เพิ่มข้อมูลเกษตรกร' : 'แก้ไขข้อมูลเกษตรกร'
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
            // this.editedIndex = this.desserts.indexOf(item)
            // this.editedItem = Object.assign({}, item)
            // this.dialog = true
            Swal.fire({
                title: 'คุณต้องการแก้ไข?',
                // text: "ใช่หรือไม่",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'ตกลง',
                cancelButtonText: 'ยกเลิก',
            }).then((result) => {
                if (result.value) {
                    this.editedIndex = this.desserts.indexOf(item)
                    this.editedItem = Object.assign({}, item)
                    this.dialog = true
                }
            })
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
