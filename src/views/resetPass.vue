<template>
<div class="bg">
    <v-container grid-list-xs>

        <v-container>
            <h2>คำร้องขอลืมรหัสผ่านสำหรับเกษตกร</h2>
            <v-divider></v-divider>
        </v-container>

        <v-container grid-list-xs>
            <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-5 rounded-lg pa-2">
                <template v-slot:top>
                    <v-flex xs12 class="pa-2">
                        <div class="d-flex grow flex-wrap">
                            <v-text-field dense class="rounded-lg pa-2" color="green" v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <v-spacer></v-spacer>

                        </div>
                    </v-flex>

                </template>

                <template v-slot:item.actions="{  }">

                    <!-- <v-tooltip v-model="show" top> -->
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on" @click="$router.push(`farmerdetail`)">
                                <v-icon>mdi-eye-outline</v-icon>
                            </v-btn>
                        </template>
                        <span>ดูข้อมูล</span>
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
import Swal from 'sweetalert2';
export default {
    data: () => ({

        search: '',
        dialog: false,
        headers: [
            // {
            //     text: 'เลขบัตรประจำตัวประชาชน',
            //     value: 'IDCard'
            // },
            // {
            //     text: 'ชื่อจริงนามสกุล',
            //     value: 'name'
            // },
            // {
            //     text: 'นามสกุล',
            //     value: 'lastname'
            // }, 
            {
                text: 'ชื่อผู้ใช้งาน',
                value: 'username'
            },
            {
                text: 'เบอร์โทรศัพท์',
                value: 'phoneNumber'
            },
            {
                text: 'ว/ด/ป',
                value: 'date'
            },
            {
                text: 'การจัดการ',
                value: 'actions',
                sortable: false
            },
        ],
        show4: false,

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
                    // IDCard: '1231231231231',
                    // name: 'นาย',
                    // lastname:'แดง',
                    username: 'username1',
                    phoneNumber: '0123123123',
                    date: '29/6/2020'
                    // email: 'dang1@gmail.com', 
                },
                {
                    // IDCard: '1231231231231',
                    // name: 'นาย',
                    // lastname:'แดง',
                    username: 'username2',
                    phoneNumber: '0123123123',
                    date: '29/6/2020'
                    // email: 'dang1@gmail.com', 
                },
                {
                    // IDCard: '1231231231231',
                    // name: 'นาย',
                    // lastname:'แดง',
                    username: 'username13',
                    phoneNumber: '0123123123',
                    date: '29/6/2020'
                    // email: 'dang1@gmail.com', 
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

<style  scoped>

</style><style scoped>
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
