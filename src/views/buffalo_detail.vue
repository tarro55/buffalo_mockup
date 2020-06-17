<template>
<v-container grid-list-xs>
    <center>
        <v-flex xs12 row wrap>
            <v-flex xs6 pa-3>
                <v-card elevation="10">
                    <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                    <v-list two-line>
                        <center>
                            <h5>ภาพด้านข้าง</h5>
                        </center>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs6 pa-3>
                <v-card elevation="10">
                    <v-img src="https://images.pexels.com/photos/2261770/pexels-photo-2261770.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                    <v-list two-line>
                        <center>
                            <h5>ภาพด้านหลัง</h5>
                        </center>
                    </v-list>
                </v-card>
            </v-flex>
        </v-flex>
    </center>
    <br>

    <center>
        <v-container>
            <v-flex xs8>
                <v-card elevation="5">
                    <br>
                    <v-toolbar-title>รายละเอียดกระบือ <v-btn color="success" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </v-toolbar-title>
                    <br>
                    <v-flex xs12 offset-xs2 row wrap>
                        <div v-for="item in desserts" :key="item.name">
                            <v-text-field :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                        </div>
                    </v-flex>
                </v-card>
            </v-flex>
            <br>
        </v-container>

        <v-flex xs8 row wrap>
            <v-card elevation="5" outlined  height="150" width="150">
                <v-card-text class="text-center">
                    <h6>ใบพันธุ์ประวัติอ้างอิง</h6>
                    <v-icon size="40">mdi-file-pdf-outline</v-icon>
                </v-card-text>
                <center>

                </center>
            </v-card>
            <br>
            <v-card elevation="5" outlined height="200" width="200">
                <v-card-text class="text-center">
                    <h6>ใบพันธุ์ประวัติทางการ</h6><br>
                    <v-icon size="40">mdi-file-pdf-outline</v-icon>
                </v-card-text>
                <center> 
                    <v-btn style="width:90%" color="success"><h7>อัพโหลดใบพันธุ์ประวัติทางการ</h7></v-btn>
                </center>
                <br>
            </v-card>

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
            dialog: true, 
            desserts: [{
                    describe: 'หมายเลขบัตรประชาชนเกษตรกร',
                    calories: '3560700337836',
                },
                {
                    describe: 'ชื่อหรือหมายเลขควาย',
                    calories: 'เปีย',
                },
                {
                    describe: 'หมายเลข NID',
                    calories: ' ',
                },
                {
                    describe: 'หมายเลขไมโครชิป',
                    calories: ' ',
                },
                {
                    describe: 'วัน/เดือน/ปี เกิด',
                    calories: ' ',
                },
                {
                    describe: 'เพศ',
                    calories: 'เมีย',
                },
                {
                    describe: 'อายุ (..ปี..เดือน) ',
                    calories: '4ปี 0เดือน',
                },
                {
                    describe: 'สี',
                    calories: 'ดำ',
                },
                {
                    describe: 'แหล่งที่มา ',
                    calories: 'พ่อค้าคนกลาง',
                },
                {
                    describe: 'ราคา',
                    calories: '50000',
                },
                {
                    describe: 'สถานะควาย',
                    calories: 'ท้อง',
                },
                {
                    describe: 'ชื่อหรือหมายเลขพ่อ',
                    calories: ' ',
                },
                {
                    describe: 'หมายเลข NID พ่อ',
                    calories: ' ',
                },
                {
                    describe: 'หมายเลขไมโครชิปพ่อ',
                    calories: ' ',
                },
                {
                    describe: 'ชื่อหรือหมายเลขแม่',
                    calories: ' ',
                },
                {
                    describe: 'หมายเลข NID แม่',
                    calories: ' ',
                },
                {
                    describe: 'หมายเลขไมโครชิปแม่',
                    calories: ' ',
                },
                {
                    describe: 'น้ำหนัก (กิโลกรัม)',
                    calories: '400',
                },
                {
                    describe: 'ความกว้างรอบอก (เซนติเมตร)',
                    calories: '224',
                },
                {
                    describe: 'ความยาวลำตัว (เซนติเมตร)',
                    calories: '128',
                },
                {
                    describe: 'ความสูง (เซนติเมตร)',
                    calories: '132',
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
