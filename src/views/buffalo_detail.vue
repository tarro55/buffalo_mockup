<template>
<v-container grid-list-xs>
    <center>
        <v-flex xs12 row wrap>
            <v-flex xs6 pa-3>
                <v-card class="elevation-5 rounded-lg">
                    <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                    <v-list two-line>
                        <center>
                            <h5>ภาพด้านข้าง</h5>
                        </center>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs6 pa-3>
                <v-card class="elevation-5 rounded-lg ">
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
                <v-card class="elevation-5 rounded-lg pa-2">
                    <br>
                    <v-toolbar-title>รายละเอียดกระบือ <v-btn outlined color="teal" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                        </v-btn>
                    </v-toolbar-title>
                    <br>
                    <v-flex row wrap xs12 offset-xs1>
                        <div v-for="item in desserts" :key="item.name">
                            <v-text-field rounded-lg outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                        </div>
                    </v-flex>
                </v-card>
            </v-flex>
            <br>
        </v-container>

        <v-flex xs8 row wrap>
            <v-flex xs6 class="pa-2">
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                        <div class="d-flex grow flex-wrap">
                            <v-icon dark large class="elevation-6 error pa-4 rounded-lg" style="max-height: 80px; width: auto;">mdi-file-pdf-outline</v-icon>
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <h7>
                                        ใบพันธุ์ประวัติอ้างอิง
                                    </h7>
                                </div>
                            </div>
                        </div>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs6 class="pa-2">
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                        <div class="d-flex grow flex-wrap">
                            <v-icon dark large class="elevation-6 error rounded-lg" style="max-height: 80px; width: auto;">mdi-file-pdf-outline</v-icon>
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <h7>
                                        อัพโหลดใบพันธุ์ประวัติอย่างเป็นทางการ
                                    </h7>
                                </div>
                                <v-btn outlined block @click="$router.push('farmer')" color="teal">อัพโหลดใบพันธุ์ประวัติทางการ</v-btn>
                            </div>
                        </div>
                    </v-card>
                </v-hover>
            </v-flex>
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
