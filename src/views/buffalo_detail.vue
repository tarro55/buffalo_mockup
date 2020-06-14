<template>
<v-container grid-list-xs>
    <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
    </v-carousel>
    <br>

    <center>
        <v-flex xs8>

            <template>
                <v-simple-table>
                    <template>
                        <v-toolbar-title>รายละเอียดกระบือ <v-btn color="success" @click="dialog=false">แก้ไข</v-btn>
                            <!-- <v-row justify="center"> -->
                            
                            <!-- </v-row> -->
                            <!-- <v-spacer></v-spacer>
                            <v-btn color="success">อัพโหลดใบพันธุ์ประวัติ</v-btn> -->
                        </v-toolbar-title>

                        <tbody>
                            <tr>
                                <div v-for="item in desserts" :key="item.name">
                                    <v-text-field :readonly="dialog" v-model="item.calories" name="name" :label="item.describe" id="id"></v-text-field>
                                </div>
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
