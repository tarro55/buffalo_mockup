<template>
 <div class="bg">
    <v-container>
        <h2>ข้อมูลกระบือ</h2>
        <v-breadcrumbs :items="bc" large>
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>
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
                    <v-btn block color="success">อัพโหลดภาพ</v-btn>
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
                    <v-btn block color="success">อัพโหลดภาพ</v-btn>
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
            <v-layout row wrap>
                <v-flex xs12 md8>
                    <v-card class="elevation-5 rounded-lg pa-3 ma-2">
                        <div class="d-flex grow flex-wrap pa-2">
                            <h3>รายละเอียดกระบือ</h3>
                            <v-spacer></v-spacer>
                            <v-btn class="rounded-lg" outlined color="green" @click="dialog=false">
                                <v-icon>mdi-pencil</v-icon>แก้ไข
                            </v-btn>
                        </div>
                        <div class="d-flex flex-wrap pa-2">
                            <!-- <div v-for="item in desserts" :key="item.name">
                                <v-text-field dense class="rounded-lg" :prepend-inner-icon="item.icon" color="green" outlined :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                            </div> -->

                            <v-row no-gutters class="pr-3">
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขควาย"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green"  type="number" outlined label="หมายเลข NID"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green"  type="number" outlined label="หมายเลขไมโครซิป"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="290px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-text-field outlined dense color="green" v-model="date" class="rounded-lg" label="วัน/เดือน/ปีเกิด" prepend-inner-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                                        </template>
                                        <v-date-picker :readonly="dialog" color="green" ref="picker" v-model="date" :max="new Date().toISOString().substr(0, 10)" min="1950-01-01" @change="save1"></v-date-picker>
                                    </v-menu>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-select dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-gender-male-female" color="green" outlined label="เพศ"></v-select>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-calendar-clock" color="green"  type="number" outlined label="อายุ"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-select dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-invert-colors" color="green" outlined label="สี"></v-select>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-select dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-import" color="green" outlined label="แหล่งที่มา"></v-select>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green"  type="number" outlined label="ราคา"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-select dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-post-outline" color="green" outlined label="สถานะ"></v-select>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขพ่อ"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" outlined type="number" label="หมายเลข NID พ่อ"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined type="number" label="หมายเลขไมโครชิปพ่อ"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-cow" color="green" outlined label="ชื่อหรือหมายเลขแม่"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric-10-box-multiple-outline" color="green" outlined type="number" label="หมายเลข NID แม่"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-numeric" color="green" outlined type="number" label="หมายเลขไมโครชิปแม่"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-weight-kilogram" color="green" outlined type="number" label="น้ำหนัก(กิโลกรัม)"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" outlined type="number" label="ความกว้างรอบอก(เซนติเมตร)"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-arrow-left-right" color="green" outlined type="number" label="ความยาวรอบลำตัว(เซนติเมตร)"></v-text-field>
                                </v-flex>
                                <v-flex xs12 md4>
                                    <v-text-field dense :readonly="dialog" class="rounded-lg" prepend-inner-icon="mdi-human-male-height-variant" color="green" outlined type="number" label="ความสูง(เซนติเมตร)"></v-text-field>
                                </v-flex>
                            </v-row>  
                            <v-btn class="rounded-lg" block disabled color="success">บันทึก</v-btn>
                        </div>

                    </v-card>
                </v-flex>
                <v-flex xs12 md4>
                    <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12 ma-2">
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
                                <div class="pt-3">
                                    <v-btn outlined @click="$router.push('farmer')" class="rounded-lg" color="green">อัพโหลดใบพันธุ์ประวัติอ้างอิง</v-btn>
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
                                    <v-btn outlined @click="$router.push('farmer')" class="rounded-lg" color="green">อัพโหลดใบพันธุ์ประวัติทางการ</v-btn>
                                </div>

                            </div>
                        </v-card>
                    </v-hover>
                </v-flex>
            </v-layout>
        </v-container>
        
    </center>

 </div>
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
            date: null,
            menu: false,
            dialog: true,
            bc: [
            {
                    text: 'เกษตกร',
                    disabled: false,  
                    href: '/#/farmer',
                }, 
                {
                    text: 'ข้อมูลเกษตกร',
                    disabled: false,  
                    href: '/#/farmerdetail',
                },
                {
                    text: 'ข้อมูลกระบือ',
                    disabled: false,  
                    href: '/#/buffalodetail',
                }, 
            ],
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
                // {
                //     describe: 'วัน/เดือน/ปี เกิด',
                //     calories: ' ',
                //     icon: 'mdi-calendar'
                // },
                // {
                //     describe: 'เพศ',
                //     calories: 'เมีย',
                //     icon: 'mdi-gender-male-female'
                // },
                {
                    describe: 'อายุ (..ปี..เดือน) ',
                    calories: '4ปี 0เดือน',
                    icon: 'mdi-calendar-clock'
                },
                // {
                //     describe: 'สี',
                //     calories: 'ดำ',
                //     icon: 'mdi-invert-colors'
                // },
                // {
                //     describe: 'แหล่งที่มา ',
                //     calories: 'พ่อค้าคนกลาง',
                //     icon: 'mdi-import'
                // },
                {
                    describe: 'ราคา',
                    calories: '50000',
                    icon: 'mdi-numeric'
                },
                // {
                //     describe: 'สถานะควาย',
                //     calories: 'ท้อง',
                //     icon: 'mdi-post-outline'
                // },
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
    watch: {
        menu(val) {
            val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
        },
    },
    /*-------------------------Methods------------------------------------------*/
    methods: {
        load: async function () {},
        save1(date) {
            this.$refs.menu.save(date)
        },
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
    /* background-repeat: no-repeat; */
    background-repeat: repeat;
    background-size: cover;
}
</style>
