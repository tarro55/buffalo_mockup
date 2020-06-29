<template>
<v-container class="bg">
    <v-container>
        <h2>รายงานเชิงแผนที่</h2>
        <v-divider></v-divider>
    </v-container>
    
    <v-container >
        <v-card class="rounded-lg elevation-5 pa-5">
        <v-select color="green" :items="province" label="กรุณาเลือกจังหวัด" hide-details class="rounded-lg pa-5" outlined></v-select><br>
        <!-- <v-row align="center" justify="center"> -->
            <center>
            <v-card class="pa-5" flat height="400px" width="800px" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg">
            </v-card>
            </center>
        <!-- </v-row> --> 
    </v-card>
    </v-container> 
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

        }
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
