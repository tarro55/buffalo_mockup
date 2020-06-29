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
                            <v-text-field class="rounded-lg" color="green" v-model="search" clearable flat hide-details append-icon="mdi-magnify" label="ค้นหา" outlined single-line></v-text-field>
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <v-dialog v-model="dialog" max-width="500px">
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn outlined color="green" dark class="mb-2 rounded-lg" large v-bind="attrs" v-on="on">เพิ่มผู้ดูแล</v-btn>

                                    </template>
                                    <v-card>
                                        <v-card-title>
                                            <span class="headline">{{ formTitle }}</span>
                                        </v-card-title>

                                        <v-card-text>
                                            <v-container class="rounded-lg">
                                                <v-col cols="12">
                                                    <v-text-field class="rounded-lg" prepend-inner-icon="mdi-id-card" color="green" outlined v-model="editedItem.IDCard" label="เลขบัตรประชาชน"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined v-model="editedItem.name" label="ชื่อ"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field class="rounded-lg" prepend-inner-icon="mdi-email-outline" color="green" outlined v-model="editedItem.email" label="อีเมล์"></v-text-field>
                                                </v-col>
                                            </v-container>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="green" text @click="save"><h5>บันทึก</h5></v-btn>
                                            <v-btn color="black" text @click="close"><h5>ยกเลิก</h5></v-btn>
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
export default {
    data: () => ({

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
                text: 'อีเมล์',
                value: 'email'
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
                    IDCard: 1234567890123,
                    name: 'นายแดง แดงแดง',
                    email: 'dang@gmail.com',
                    status: 'ผู้ดูแลระบบ',
                },
                {
                    IDCard: 3123412345612,
                    name: 'นายดำ ดำดำ',
                    email: 'dum@gmail.com',
                    status: 'ผู้ดูแลข้อมูล',
                },
                {
                    IDCard: 1231241231233,
                    name: 'นายเขียว เขียวเขียว',
                    email: 'green@gmail.com',
                    status: 'ผู้ดูแลระบบ',
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

</style><style scoped>
.bg {
    background: rgba(242, 243, 244);
    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
