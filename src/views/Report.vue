<template>
<v-container class="bg">
    <v-container>
        <h2>รายงาน</h2>
        <v-divider></v-divider>
    </v-container>
   
        <center>
            <v-container>
                <v-flex xs12 row wrap>
                    <v-flex xs8 row wrap>
                        <v-flex xs6 class="pa-2">
                            <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                                <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg" style="max-height: 300px; width: auto;">
                                    <div class="d-flex grow flex-wrap">
                                        <v-icon dark large class="green darken-2 pa-7 rounded-lg" style="max-height: 70px; width: auto;">mdi-clipboard-text-outline</v-icon>
                                        <v-spacer></v-spacer>
                                        <div class="col-ml-6 ">
                                            <div class="ml-auto text-right">
                                                <h5>
                                                    รายงานสรุป
                                                </h5>
                                                <h5>
                                                    จำนวนกระบือที่มีชีวิต
                                                </h5>
                                            </div>
                                        </div>
                                        <v-btn dense medium outlined block @click="$router.push('reportbuffalo')" class="rounded-lg" color="green">ดูรายงาน</v-btn>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-flex>

                        <v-flex xs6 class="pa-2">
                            <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                                <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                    <div class="d-flex grow flex-wrap">
                                        <v-icon dark large class="red darken-2 pa-7 rounded-lg" style="max-height: 70px; width: auto;">mdi-map-marker-radius-outline</v-icon>
                                        <v-spacer></v-spacer>
                                        <div class="col-ml-6 ">
                                            <div class="ml-auto text-right">
                                                <h5>
                                                    รายงาน
                                                </h5>
                                                <h5>
                                                    เชิงแผนที่
                                                </h5>
                                            </div>
                                        </div>
                                        <v-btn outlined medium block @click="$router.push('reportmap')" class="rounded-lg" color="green">ดูรายงาน</v-btn>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-flex>

                        <v-flex xs6 class="pa-2">
                            <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                                <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                    <div class="d-flex grow flex-wrap">
                                        <v-icon dark large class="yellow darken-2 pa-7 rounded-lg" style="max-height: 70px; width: auto;">mdi-clipboard-flow-outline</v-icon>
                                        <v-spacer></v-spacer>
                                        <div class="col-ml-6 ">
                                            <div class="ml-auto text-right">
                                                <h5>
                                                    รายงานความเคลื่อนไหว
                                                </h5>
                                                <h5>
                                                    การใช้งานระบบ
                                                </h5> 
                                            </div>
                                        </div>
                                        <v-btn outlined medium block @click="$router.push('reportsystem')" class="rounded-lg" color="green">ดูรายงาน</v-btn>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-flex>

                        <v-flex xs6 class="pa-2">
                            <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                                <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">

                                    <div class="d-flex grow flex-wrap">
                                        <v-icon dark large class="indigo darken-2 pa-7 rounded-lg" style="max-height: 70px; width: auto;">mdi-file-export-outline</v-icon>
                                        <v-spacer></v-spacer>
                                        <div class="col-ml-6 ">
                                            <div class="ml-auto text-right">
                                                <h5>
                                                    ส่งออกข้อมูล
                                                </h5>
                                                <h5>
                                                    การเจริญเติบโตของกระบือ
                                                </h5>
                                            </div>
                                        </div>
                                        <!-- <div class="mt-2 ml-auto text-right"> -->
                                        <v-btn outlined medium block @click="$router.push('export')" class="rounded-lg" color="green">ดูรายงาน</v-btn>
                                        <!-- </div> -->
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-flex>

                    </v-flex>

                    <v-flex xs4 class="pa-2">
                         
                            <img class="rounded-lg pl-1" style="max-height: 307px; width: auto;" src="https://images.pexels.com/photos/46188/bison-buffalo-american-animal-46188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                         
                    </v-flex>

                </v-flex>
            </v-container>
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

<style scoped>
.bg {
    background: rgba(242, 243, 244);
    /* Full height */
    height: 100%;

    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
