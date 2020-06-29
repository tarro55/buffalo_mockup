<template>
<v-container class="bg">
    <v-container>
        <h2>ข้อมูลกระบือ</h2>
        <v-divider></v-divider>
    </v-container>

    <center>
        <v-flex xs12 row wrap>
            <v-flex xs6 pa-3>
                <v-card class="rounded-lg">
                    <v-img src="https://images.pexels.com/photos/1054650/pexels-photo-1054650.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" aspect-ratio="1.7"></v-img>
                    <v-list two-line>
                        <center>
                            <h5>ภาพด้านข้าง</h5>
                        </center>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs6 pa-3>
                <v-card class="rounded-lg ">
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

    <!-- <v-container>
        <v-flex xs12>
            <v-card class="elevation-5 rounded-lg pa-2">
                <div class="d-flex grow flex-wrap">
                    <h3>รายละเอียดกระบือ</h3>
                    <v-spacer></v-spacer>
                    <v-btn outlined color="green" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </div>
                <v-toolbar-title>รายละเอียดกระบือ
                    <v-btn outlined color="green" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                    </v-btn>
                </v-toolbar-title>
                <br>
                <v-flex row wrap xs12 offset-xs1>
                    <v-flex xs12>
                        <div v-for="item in desserts" :key="item.name">
                            <v-text-field class="rounded-lg" :prepend-inner-icon="item.icon" color="green" outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                        </div>
                    </v-flex>
            </v-card>
        </v-flex>
        <br>
    </v-container> -->

    <center>
        <v-container>
            <v-flex xs12 row wrap>
                <v-flex xs8 row wrap>
                    <v-container>
                        <v-card class="elevation-5 rounded-lg pa-2">
                            <div class="d-flex grow flex-wrap">
                                <h3>รายละเอียดกระบือ</h3>
                                <v-spacer></v-spacer>
                                <v-btn class="rounded-lg" outlined color="green" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </div>
                            <v-flex xs12 row wrap>
                                <div v-for="item in desserts" :key="item.name">
                                    <v-text-field class="rounded-lg" :prepend-inner-icon="item.icon" color="green" outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                                </div>
                            </v-flex>
                        </v-card>
                    </v-container>

                </v-flex>

                <v-flex xs4 pa-2 class="w3-margin-left ">
                    <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                        <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                            <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                            <div class="d-flex grow flex-wrap">
                                <v-icon dark large class=" error pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-file-pdf-outline</v-icon>
                                <v-spacer></v-spacer>
                                <div class="col-ml-6 ">
                                    <div class="ml-auto text-right">
                                        <h6>
                                            ใบพันธุ์ประวัติอ้างอิง
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <!-- </div> -->
                        </v-card>
                    </v-hover>

                    <v-divider></v-divider>
                    <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                        <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                            <div class="d-flex flex-wrap">
                                <v-icon dark large class=" error pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-file-pdf-outline</v-icon>
                                <v-spacer></v-spacer>
                                <div class="col-ml-6 ">
                                    <div class="ml-auto text-right">
                                        <h6>
                                            ใบพันธุ์ประวัติอย่างเป็นทางการ
                                        </h6>
                                    </div>

                                </div>
                                <div class="pt-3">
                                    <center>
                                    <v-btn outlined block @click="$router.push('farmer')" class="rounded-lg" color="green">อัพโหลดใบพันธุ์ประวัติทางการ</v-btn>
                                    </center>
                                </div>

                            </div>
                        </v-card>
                    </v-hover>
                </v-flex>

            </v-flex>
        </v-container>
    </center>

    <!-- <v-container>
        <v-card class="elevation-5 rounded-lg pa-2">
            <div class="d-flex grow flex-wrap">
                <h3>รายละเอียดกระบือ</h3>
                <v-spacer></v-spacer>
                <v-btn class="rounded-lg" outlined color="green" @click="dialog=false">แก้ไข<v-icon>mdi-pencil</v-icon>
                </v-btn>
            </div>

            <v-row>
                <v-col cols="12" sm="6">
                <div v-for="item in desserts" :key="item.name">
                    <v-text-field class="rounded-lg" :prepend-inner-icon="item.icon" color="green" outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                </div>
                </v-col>
            </v-row>
        </v-card>
    </v-container> -->

    <!-- <v-flex xs8 row wrap>
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
                        <v-icon dark large class="elevation-6 error pa-4 rounded-lg" style="max-height: 80px; width: auto;">mdi-file-pdf-outline</v-icon>
                        <v-spacer></v-spacer>
                        <div class="col-ml-6 ">
                            <div class="ml-auto text-right">
                                <h7>
                                    อัพโหลดใบพันธุ์ประวัติอย่างเป็นทางการ
                                </h7>
                            </div>
                            <v-btn outlined block @click="$router.push('farmer')" color="green">อัพโหลดใบพันธุ์ประวัติทางการ</v-btn>
                        </div>
                    </div>
                </v-card>
            </v-hover>
        </v-flex>
    </v-flex> -->

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
            desserts: [
                // {
                //     describe: 'หมายเลขบัตรประชาชนเกษตรกร',
                //     calories: '3560700337836',
                //     icon:'mdi-cow'
                // },
                {
                    describe: 'ชื่อหรือหมายเลขควาย',
                    calories: 'เปีย',
                    icon: 'mdi-cow'
                },
                {
                    describe: 'หมายเลข NID',
                    calories: ' ',
                    icon: 'mdi-numeric'
                },
                {
                    describe: 'หมายเลขไมโครชิป',
                    calories: ' ',
                    icon: 'mdi-numeric'
                },
                {
                    describe: 'วัน/เดือน/ปี เกิด',
                    calories: ' ',
                    icon: 'mdi-calendar'
                },
                {
                    describe: 'เพศ',
                    calories: 'เมีย',
                    icon: 'mdi-gender-male-female'
                },
                {
                    describe: 'อายุ (..ปี..เดือน) ',
                    calories: '4ปี 0เดือน',
                    icon: 'mdi-calendar-clock'
                },
                {
                    describe: 'สี',
                    calories: 'ดำ',
                    icon: 'mdi-invert-colors'
                },
                {
                    describe: 'แหล่งที่มา ',
                    calories: 'พ่อค้าคนกลาง',
                    icon: 'mdi-import'
                },
                {
                    describe: 'ราคา',
                    calories: '50000',
                    icon: 'mdi-numeric'
                },
                {
                    describe: 'สถานะควาย',
                    calories: 'ท้อง',
                    icon: 'mdi-post-outline'
                },
                {
                    describe: 'ชื่อหรือหมายเลขพ่อ',
                    calories: ' ',
                    icon: 'mdi-cow'
                },
                {
                    describe: 'หมายเลข NID พ่อ',
                    calories: ' ',
                    icon: 'mdi-numeric'
                },
                {
                    describe: 'หมายเลขไมโครชิปพ่อ',
                    calories: ' ',
                    icon: 'mdi-numeric'
                },
                {
                    describe: 'ชื่อหรือหมายเลขแม่',
                    calories: ' ',
                    icon: 'mdi-cow'
                },
                {
                    describe: 'หมายเลข NID แม่',
                    calories: ' ',
                    icon: 'mdi-numeric'
                },
                {
                    describe: 'หมายเลขไมโครชิปแม่',
                    calories: ' ',
                    icon: 'mdi-numeric'
                },
                {
                    describe: 'น้ำหนัก (กิโลกรัม)',
                    calories: '400',
                    icon: 'mdi-weight-kilogram'
                },
                {
                    describe: 'ความกว้างรอบอก (เซนติเมตร)',
                    calories: '224',
                    icon: 'mdi-arrow-left-right'
                },
                {
                    describe: 'ความยาวลำตัว (เซนติเมตร)',
                    calories: '128',
                    icon: 'mdi-arrow-left-right'
                },
                {
                    describe: 'ความสูง (เซนติเมตร)',
                    calories: '132',
                    icon: 'mdi-human-male-height-variant'
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
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
