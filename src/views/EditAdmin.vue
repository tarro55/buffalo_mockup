<template>
<div class="bg">
    <v-container grid-list-xs>

        <v-container>
            <h2>ผู้ดูแลระบบ</h2>
            <v-divider></v-divider>
        </v-container>

        <v-container grid-list-xs>
            <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-5 rounded-lg pa-2">
                <template v-slot:top>
                    <v-flex xs12 class="pa-2">
                        <div class="d-flex grow flex-wrap">
                            <v-text-field dense class="rounded-lg pa-2" color="green" v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <v-dialog scrollable v-model="dialog" max-width="500px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn outlined color="green" dark class="mr-1 rounded-lg" medium v-bind="attrs" v-on="on">เพิ่มผู้ดูแล<v-icon>mdi-plus</v-icon></v-btn>
                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">{{ formTitle }}</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <v-container class="rounded-lg">
                                                <v-row dense>
                                                    <v-col cols="12 " sm="6">
                                                        <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.name" label="ชื่อจริง"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12" sm="6">
                                                        <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.lastname" label="นามสกุล"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12">
                                                        <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-account" color="green" outlined v-model="editedItem.username" label="ชื่อผู้ใช้งาน"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12">
                                                        <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" outlined v-model="editedItem.password" label="รหัสผ่าน"></v-text-field>
                                                    </v-col> 
                                                    <v-col cols="12" >
                                                        <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" outlined v-model="editedItem.password" :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.emailMatch]" :type="show4 ? 'text' : 'password'" name="input-10-2" label="ยืนยันรหัสผ่าน" hint="กรุณากรอกรหัสผ่านให้ตรงกัน" value="" error @click:append="show4 = !show4"></v-text-field>
                                                    </v-col>
                                                    <v-col cols="12">
                                                        <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-email" color="green" outlined v-model="editedItem.email" label="อีเมล"></v-text-field>
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
                    </v-flex>

                </template>

                <template v-slot:item.actions="{ item }">
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
    </v-container>
</div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
    data: () => ({

        search: '',
        dialog: false,
        headers: [
            {
                text: 'ชื่อจริง',
                value: 'name'
            },
            {
                text: 'นามสกุล',
                value: 'lastname'
            },
            {
                text: 'ชื่อผู้ใช้งาน',
                value: 'username'
            },
             
            {
                text: 'อีเมล์',
                value: 'email'
            },
            {
                text: 'การจัดการ',
                value: 'actions',
                sortable: false
            },
        ],
        show4: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'กรุณากรอกรหัสผ่านให้ตรงกัน.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('กรุณากรอกรหัสผ่านให้ตรงกัน'),
        },
        desserts: [],
        editedIndex: -1,
        editedItem: {
            IDCard: '',
            name: '',
            email: '',
            status: '',
        },
        defaultItem: {
            IDCard: '',
            name: '',
            email: '',
            status: '',
        },
    }),

    computed: {
        formTitle() {
            return this.editedIndex === -1 ? ' เพิ่มผู้ดูแล ' : 'แก้ไขข้อมูล'
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
                    name: 'นายแดง',
                    lastname: 'สวัสดี',
                    username:'dang123',
                    password: '123456',
                    email: 'dang1@gmail.com',
                    status: 'ผู้ดูแลระบบ',
                },
                {
                    name: 'นายแดง1',
                    lastname: 'สวัสดี1',
                    username:'dang1234',
                    password: '123123',
                    email: 'dan1g@gmail.com',
                    status: 'ผู้ดูแลระบบ',
                },
                {
                    name: 'นายแดง2',
                    lastname: 'สวัสดี2',
                    username:'dang1232',
                    password: '111111',
                    email: 'dang1@gmail.com',
                    status: 'ผู้ดูแลระบบ',
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
    background: rgba(242, 243, 244);
    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
