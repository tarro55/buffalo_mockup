<template>
<div style="padding:20px;">
    <v-container>
        <h1>รายงานแดชบอร์ด</h1>
        <v-divider></v-divider>
    </v-container>
    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
        <v-card-title>
            <v-icon large left>
                mdi-account
            </v-icon>
            <span class="title font-weight-light">สมาชิกทั้งหมด</span>
        </v-card-title>

        <v-card-text class=" font-weight-bold">
            จำนวนสมาชิกทั้งหมดในระบบ : 250 คน
        </v-card-text>

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

            txt: 'Hello World'

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
