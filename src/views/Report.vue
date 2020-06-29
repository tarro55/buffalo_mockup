<template>
<v-container class="bg">
    <v-container>
        <h2>รายงาน</h2>
        <v-divider></v-divider>
    </v-container>
    <v-container grid-list-xs>

        <v-flex xs12 row wrap>
            <v-flex xs6 class="pa-2">
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg" style="max-height: 300px; width: auto;">

                        <div class="d-flex grow flex-wrap">
                            <v-icon dark large class=" info pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-clipboard-text-outline</v-icon>
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <h4>
                                        รายงานสรุป
                                    </h4>
                                    <h4>
                                        จำนวนกระบือที่มีชีวิต
                                    </h4>
                                </div>
                            </div>
                            <v-btn  medium outlined block @click="$router.push('ReportBuffalo')" class="rounded-lg" color="green">ดูรายงาน</v-btn>
                        </div>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs6 class="pa-2">
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                        <div class="d-flex grow flex-wrap">
                            <v-icon dark large class=" indigo pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-map-marker-radius-outline</v-icon>
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <h4>
                                        รายงาน
                                    </h4>
                                    <h4>
                                        เชิงแผนที่
                                    </h4>
                                </div>
                            </div>
                            <v-btn outlined medium block @click="$router.push('ReportMap')" class="rounded-lg" color="green">ดูรายงาน</v-btn>
                        </div>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs6 class="pa-2">
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                        <div class="d-flex grow flex-wrap">
                            <v-icon dark large class=" success pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-clipboard-flow-outline</v-icon>
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <h4>
                                        รายงาน
                                    </h4>
                                    <h4>
                                        ความเคลื่อนไหวการใช้งานระบบ
                                    </h4>
                                </div>
                            </div>
                            <v-btn outlined medium block @click="$router.push('ReportSystem')" class="rounded-lg" color="green">ดูรายงาน</v-btn>
                        </div>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs6 class="pa-2">
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">

                        <div class="d-flex grow flex-wrap">
                            <v-icon dark large class=" purple pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-file-export-outline</v-icon>
                            <v-spacer></v-spacer>
                            <div class="col-ml-6 ">
                                <div class="ml-auto text-right">
                                    <h4>
                                        ข้อมูลการเจริญเติบโต
                                    </h4>
                                    <h4>
                                        ของกระบือ
                                    </h4>
                                </div>
                            </div>
                            <v-btn outlined medium block @click="$router.push('Export')" class="rounded-lg" color="green">ดูรายงาน</v-btn>
                        </div>
                    </v-card>
                </v-hover>
            </v-flex>

        </v-flex>
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
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
