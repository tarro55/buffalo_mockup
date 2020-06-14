<template>
<v-container grid-list-xs>
    <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
    </v-carousel>
    <br>

    <center>
        <v-flex xs8>
            <!-- <v-card>
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
                    <v-card-text class="font-weight-black">ชื่อ : กระบือ1</v-card-text>
                    <v-card-text class="font-weight-black">เบอร์หู : 1</v-card-text>
                    <v-card-text class="font-weight-black">อายุ :3</v-card-text>
                    <v-card-text class="font-weight-black">เพศ : ผู้</v-card-text>
                    <v-card-text class="font-weight-black">สี : ดำ</v-card-text>
                    <v-card-text class="font-weight-black">ชื่อหรือหมายเลขพ่อพันธุ์ : 2</v-card-text>
                    <v-card-text class="font-weight-black">ชื่อหรือหมายเลขแม่พันธุ์ : 4</v-card-text>
                    <v-card-text class="font-weight-black">น้ำหนัก : 340 กก</v-card-text>
                    <v-card-text class="font-weight-black">ความกว้างรอบอก : 170 ซม.</v-card-text>
                    <v-card-text class="font-weight-black">ความยาวลำตัว : 340 ซม.</v-card-text>
                    <v-card-text class="font-weight-black">ความสูง : 100 ซม.</v-card-text> 
                </v-card> -->
            <template>
                <v-simple-table>
                    <template>
                        <v-toolbar-title>รายละเอียดกระบือ
                            <!-- <v-row justify="center"> -->
                            <v-dialog v-model="dialog" persistent max-width="600px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn icon color="primary" dark v-bind="attrs" v-on="on">
                                        <v-icon class="mr-2" @click="editItem(item)">
                                            mdi-pencil
                                        </v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="headline">ประวัติกระบือ</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="ชื่อ"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="เบอร์หู"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="อายุ"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="เพศ"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="สี"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="ชื่อหรือหมายเลขพ่อพันธุ์"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="ชื่อหรือหมายเลขแม่พันธุ์"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="ความยาวลำตัว(เซนติเมตร)"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="ความสูง(เซนติเมตร)"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-text-field label="ใบพันธุ์ประวัติอ้างอิง"></v-text-field>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="dialog = false">ยกเลิก</v-btn>
                                        <v-btn color="blue darken-1" text @click="dialog = false">บันทึก</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <!-- </v-row> -->
                            <!-- <v-spacer></v-spacer>
                            <v-btn color="success">อัพโหลดใบพันธุ์ประวัติ</v-btn> -->
                        </v-toolbar-title>

                        <tbody>
                            <tr v-for="item in desserts" :key="item.name">
                                <td>{{ item.describe }}</td>
                                <td>{{ item.calories }}<v-icon @click="">{{item.icons}}</v-icon></td>
                                
                            </tr>
                            <tr row wrap>
                                <td>
                                    
                                    <template>
                                        <v-file-input label="ใบรับรองพันธุ์ประวัติแบบเป็นทางการ" prepend-icon="mdi-camera"></v-file-input>
                                    </template>
                                </td>
                                <td>
                                    <v-btn color="blue" dark>บันทึก</v-btn>
                                </td>
                            </tr>
                        </tbody>

                    </template>
                </v-simple-table>
            </template>
        </v-flex>
    </center>

</v-container>
</template>

<script>
export default {
    name: 'Root',
    /*-------------------------ประกาศ components ---------------------------------------*/
    components: {

    },
    /*-------------------------รับค่าเมื่อเราเป็น components---------------------------------------*/
    props: {

    },
    /*-------------------------ประกาศตัวแปรที่ใช้ ผูกกับ v-model ---------------------------------------*/
    data() {
        return {
            dialog: false,
            items: [{
                    src: 'https://images.pexels.com/photos/46188/bison-buffalo-american-animal-46188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
                {
                    src: 'https://images.pexels.com/photos/360592/pexels-photo-360592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                },
            ],
            desserts: [{
                    describe: 'ชื่อ',
                    calories: 'กระบือ1',
                },
                {
                    describe: 'เบอร์หู',
                    calories: '237',
                },
                {
                    describe: 'อายุ',
                    calories: '4',
                },
                {
                    describe: 'เพศ',
                    calories: 'ผู้',
                },
                {
                    describe: 'สี',
                    calories: 'ดำ',
                },
                {
                    describe: 'ชื่อหรือหมายเลขพ่อพันธุ์',
                    calories: '375',
                },
                {
                    describe: 'ชื่อหรือหมายเลขแม่พันธุ์',
                    calories: '392',
                },
                {
                    describe: 'น้ำหนัก(กิโลกรัม)',
                    calories: '408',
                },
                {
                    describe: 'ความกว้างรอบอก(เซนติเมตร)',
                    calories: '170',
                },
                {
                    describe: 'ความยาวลำตัว(เซนติเมตร)',
                    calories: '240',
                },
                {
                    describe: 'ความสูง(เซนติเมตร)',
                    calories: '100',
                },
                {
                    describe: 'ใบพันธุ์ประวัติอ้างอิง',
                    calories: '',
                    icons:'mdi-file-pdf-outline',
                },
                {
                    describe: 'ใบรับรองพันธุ์ประวัติแบบเป็นทางการ',
                    calories: '',
                },
            ],

        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    /*------------------------- กระทำการตอน router ถูกโหลดเข้ามา------------------------------------------*/
    async beforeRouteEnter(to, from, next) {
        next()
    },
    /*-------------------------ใช้จัดการ operation  หรือ คำนวณค่าต่างๆ (คล้าย methods)------------------------------------------*/
    computed: {

    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        /******* Methods default run ******/
        load: async function () {}
    },
}
</script>

<style  scoped>

</style>
