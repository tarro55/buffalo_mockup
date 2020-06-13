<template>
<div style="padding:20px;">
<v-container>
    <div>
        <h3>
            จัดการผู้ดูแลระบบ
        </h3>
    </div>
    <br>
    <v-divider>จัดการผู้ดูแลระบบ</v-divider>

    <v-data-table :headers="headers" :items="desserts" :search="search" sort-by="calories" class="elevation-1">
        <template v-slot:top>
            <v-toolbar flat color="white">
                <v-toolbar-title>ผู้ดูแลระบบ</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-toolbar-title>
                    <v-text-field v-model="search" clearable flat solo-inverted hide-details append-icon="mdi-magnify" label="Search" single-line></v-text-field>
                </v-toolbar-title>
                <v-spacer></v-spacer>

            

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
                                        <!-- <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field> -->
                                        <v-text-field v-model="editedItem.IDCard" label="สถานะ"></v-text-field>
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
            <v-icon  class="mr-2" @click="editItem(item)">
                mdi-file-excel-outline
            </v-icon>
            <v-icon  class="mr-2" @click="editItem(item)">
                mdi-clipboard-file-outline
            </v-icon>
            <v-icon  class="mr-2" @click="editItem(item)">
                mdi-pencil
            </v-icon>
            <v-icon  @click="deleteItem(item)">
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
    data: () => (
        {
        search: '',
        dialog: false,
        headers: [{
                text: 'สถานะ',
                value: 'status'
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
            return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
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
                    status: 'ผู้ดูแลระบบ',
                },
                {
                    status: 'ผู้ดูแลข้อมูล',
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
