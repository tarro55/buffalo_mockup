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
            <v-icon class="mr-2" @click="editItem(item)">
                mdi-file-excel-outline
            </v-icon>
            <v-icon class="mr-2" @click="$router.push(`buffalo_detail`)">
                mdi-clipboard-file-outline
            </v-icon>
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
    <br><br>

    <v-container>
        <v-flex xs12 row wrap>
            <v-flex xs6 pa-1>
                <v-card>
                    <v-toolbar color="cyan" dark flat>
                        <v-toolbar-title>ข้อมูลผู้ใช้</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-card>
                <v-card>
                    <v-card-text class="font-weight-black">ชื่อ-นายสกุล : นายแดง</v-card-text>
                    <v-card-text class="font-weight-black">เลขบัตรประจำตัวประชาชน : 1234567890123</v-card-text>
                    <v-card-text class="font-weight-black">ที่อยู่ :12/11 หมู่ที่1 ตำบลแม่กา อำเภอเมือง จังหวัดพะเยา 56000</v-card-text>
                    <v-card-text class="font-weight-black">เบอร์โทรศัพท์ : 0123123123</v-card-text>
                </v-card>
            </v-flex>

            <v-flex xs6 pa-1>
                <v-card>
                    <v-toolbar color="cyan" dark flat>
                        <v-toolbar-title>ข้อมูลฟาร์ม</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-card>
                <v-card>
                    <v-card-text class="font-weight-black">ชื่อฟาร์ม : ฟาร์มนายแดง</v-card-text>
                    <v-card-text class="font-weight-black">ละติจูด : </v-card-text>
                    <v-card-text class="font-weight-black">ลองจิจูด : </v-card-text>
                </v-card>
            </v-flex>

        </v-flex>

        <v-flex xs12 row wrap>
            <v-flex xs6 pa-1>
                <v-card>
                    <v-toolbar color="cyan" dark flat>
                        <v-toolbar-title>แผนที่ฟาร์ม</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <!-- <v-btn icon>
                            <v-icon class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon>
                        </v-btn> -->
                    </v-toolbar>
                </v-card>
                <v-card class="pa-4" flat height="500px" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg">
                    <v-btn icon>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </v-card>
            </v-flex>

            <v-flex xs6 pa-1>
                <v-card>
                    <v-toolbar color="cyan" dark flat>
                        <v-toolbar-title>จำนวนกระบือ(ตัวผู้-ตัวเมีย)</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn icon>
                            <v-icon class="mr-2" @click="editItem(item)">
                                mdi-pencil
                            </v-icon>
                        </v-btn>
                    </v-toolbar>
                </v-card>
                <v-card class="pa-4" flat height="500px" img="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.15752-9/103827409_1121454478239871_5644132384704264031_n.png?_nc_cat=101&_nc_sid=b96e70&_nc_eui2=AeHiwwEblVQmEtJw3BASXCXxKgHge3QlrGwqAeB7dCWsbCr__5fY8Dn3yHtHWnzm-m5sG1ej5wDqOHOGuYBqLBqq&_nc_ohc=FdGy486LDjEAX89Y0Ce&_nc_ht=scontent.fbkk5-6.fna&oh=f33f0943c59af3a35fc8e18e510213f6&oe=5F09A1B2">
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-card>
            </v-flex>

        </v-flex>

    </v-container>

</v-container>
</template>

<script>
export default {
    data: () => ({
        search: '',
        dialog: false,
        headers: [{
                // text: 'Dessert (100g serving)',
                // value: 'name',
                text: 'ชื่อ',
                value: 'name'
            },
            {
                // text: 'Calories',
                // value: 'calories'
                text: 'เบอร์หู',
                value: 'number'
            },
            {
                // text: 'Fat (g)',
                // value: 'fat'
                text: 'พันธุ์',
                value: 'gene'
            },
            {
                // text: 'Carbs (g)',
                // value: 'carbs'
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
            return this.editedIndex === -1 ? 'เพิ่ม' : 'Edit Item'
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
                    age: '4ปี',
                },
                {
                    name: 'กระบือ2',
                    number: '2',
                    gene: 'thai',
                    age: '2ปี',
                },
                {
                    name: 'กระบือ3',
                    number: '9',
                    gene: 'thai',
                    age: '6ปี',
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

<style  scoped>

</style>
