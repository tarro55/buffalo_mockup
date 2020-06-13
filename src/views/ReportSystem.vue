<template>
<div style="padding:20px;">
    <h1>รายงานสรุปจำนวนกระบือที่มีชีวิต</h1>
    <div>
        <v-row>
            <v-overflow-btn :items="province" label="กรุณาเลือกจังหวัด" hide-details class="pa-0"></v-overflow-btn>
            <v-overflow-btn :items="district" label="กรุณาเลือกอำเภอ" hide-details class="pa-0"></v-overflow-btn>
            <v-overflow-btn :items="place" label="กรุณาเลือกตำบล" hide-details class="pa-0"></v-overflow-btn>
            <v-overflow-btn :items="month" label="กรุณาเลือกเดือน" hide-details class="pa-0"></v-overflow-btn>

        </v-row>
    </div><br>

    <v-card class="pa-4" flat height="500px" img="https://www.img.in.th/images/cc42d27c171e081701fe9cd825e5cc61.png">
        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-card>
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
            province: [{
                    text: 'พะเยา'
                },
                {
                    text: 'เชียงราย'
                },
                {
                    text: 'แพร่'
                },
                {
                    text: 'น่าน'
                },
            ],
            district: [{
                    text: 'พะเยา'
                },
                {
                    text: 'เชียงราย'
                },
                {
                    text: 'แพร่'
                },
                {
                    text: 'น่าน'
                },
            ],
            place: [{
                    text: 'ปัว'
                },
                {
                    text: 'แงง'
                },
                {
                    text: 'สถาน'
                },
                {
                    text: 'ศิลาแลง'
                },
                {
                    text: 'ศิลาเพชร'
                },
                {
                    text: 'อวน'
                },
                {
                    text: 'ไชยวัฒนา'
                },
                {
                    text: 'เจดีย์ชัย'
                },
                {
                    text: 'ภูคา'
                },
                {
                    text: 'สกาด'
                },
                {
                    text: 'ป่ากลาง'
                },
                {
                    text: '	วรนคร'
                },
            ],

            place: [{
                    text: 'เชียงกลาง'
                },
                {
                    text: 'ท่าวังผา'
                },
                {
                    text: 'ทุ่งช้าง'
                },
                {
                    text: 'นาน้อย'
                },
                {
                    text: 'บ่อเกลือ'
                },
                {
                    text: 'นาน้อย'
                },
                {
                    text: 'บ้านหลวง'
                },
                {
                    text: 'ปัว'
                },
                {
                    text: 'ภูเพียง'
                },
                {
                    text: 'แม่จริม'
                },
                {
                    text: 'เมืองน่าน'
                },
                {
                    text: 'เวียงสา'
                },
                {
                    text: 'สองแคว'
                },
                {
                    text: 'สันติสุข'
                },
            ],
            
            month: [{
                    text: 'มกราคม'
                },
                {
                    text: 'กุมพาพันธ์'
                },
                {
                    text: 'มีนาคม'
                },
                {
                    text: 'เมษายน'
                },
                {
                    text: 'พฤษภาคม'
                },
                {
                    text: 'มิถุนายน'
                },
                {
                    text: 'สิงหาคม'
                },
                {
                    text: 'ตุลาคม'
                },
                {
                    text: 'กันยายน'
                },
                {
                    text: 'พฤศจิกายน'
                },
                {
                    text: 'ธันวาคม'
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
