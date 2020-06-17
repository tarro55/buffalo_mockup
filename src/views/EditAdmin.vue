<template>
<div style="padding:20px;">
    <v-container>
        <div>
            <h3>ข้อมูลผู้ใช้งานระบบ</h3>
        </div>
        <br>

        <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
            <template v-slot:top>
                <v-toolbar flat color="white">

                    <v-dialog v-model="dialog" max-width="500px">

                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="teal" dark class="mb-2" v-bind="attrs" v-on="on">เพิ่ม</v-btn>
                            <v-divider class="mx-4" inset vertical></v-divider>
                        </template>

                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container>
                                    <v-col cols="12">
                                        <v-text-field v-model="editedItem.IDCard" label="เลขบัตรประชาชน"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="editedItem.name" label="ชื่อ"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="editedItem.email" label="อีเมล์"></v-text-field>
                                    </v-col>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="close">ยกเลิก</v-btn>
                                <v-btn color="blue darken-1" text @click="save">บันทึก</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>

                    <v-toolbar-title>
                        <v-text-field v-model="search" clearable flat solo-inverted hide-details append-icon="mdi-magnify" label="Search" single-line></v-text-field>
                    </v-toolbar-title>
                    <v-spacer></v-spacer>

                </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">

                <v-icon class="mr-2" @click="editItem(item)">
                    mdi-pencil
                </v-icon>
                <v-icon @click="deleteItem(item)">
                    mdi-delete
                </v-icon>
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

</style>
