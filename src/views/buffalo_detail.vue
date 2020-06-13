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
                    <template v-slot:default>
                        <thead>
                            รายละเอียดควาย
                            <v-btn icon>
                                <v-icon class="mr-2" @click="editItem(item)">
                                    mdi-pencil
                                </v-icon>
                            </v-btn>
                        </thead>
                        <tbody>
                            <tr v-for="item in desserts" :key="item.name">
                                <td>{{ item.describe }}</td>
                                <td>{{ item.calories }}</td>
                            </tr>
                            <tr>
                                <td>
                                    ใบพันธุ์ประวัติอ้างอิง
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
                    calories: '4ปี 1เดือน',
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
                    describe: 'น้ำหนัก',
                    calories: '408 กิโลกรัม',
                },
                {
                    describe: 'ความกว้างรอบอก',
                    calories: '170 เซนติเมตร',
                },
                {
                    describe: 'ความยาวลำตัว',
                    calories: '240 เซนติเมตร',
                },
                {
                    describe: 'ความสูง',
                    calories: '100 เซนติเมตร',
                },
                
            ],
        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    methods: {
        editItem(item) {
            this.editedIndex = this.desserts.indexOf(item)
            this.editedItem = Object.assign({}, item)
            this.dialog = true
        },

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
