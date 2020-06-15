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
        <v-flex xs8>
            <v-toolbar-title>รายละเอียดกระบือ <v-btn color="success">แก้ไข<v-icon @click="dialog=false">mdi-pencil</v-icon>
                </v-btn>
            </v-toolbar-title>
        </v-flex>
        <br>
        <v-flex xs6 dense row wrap>
            <div v-for="item in desserts" :key="item.name">
                <v-text-field :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
            </div>
        </v-flex>
        <v-flex xs6>
            <v-file-input label="ใบรับรองพันธุ์ประวัติแบบเป็นทางการ" prepend-icon="mdi-camera"></v-file-input>
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
                    icons: 'mdi-file-pdf-outline',
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
