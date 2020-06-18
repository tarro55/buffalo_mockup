<template>
<div style="padding:20px;">
    <v-container>
        <h1>แดชบอร์ด</h1>
        <v-divider></v-divider>
    </v-container>
    <v-container grid-list-xs class="w3-padding-32">
        <v-flex xs12 row wrap>
            <v-flex xs4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2  " class="mx-auto" max-width="350">
                        <v-card-title>
                            <v-icon large left>
                                mdi-account-multiple
                            </v-icon>
                            <h5>จำนวนผู้ใช้ที่อยู่ในระบบทั้งหมด</h5><br>

                        </v-card-title>

                        <v-card-text class="text-center headline font-weight-bold">
                            250 คน
                        </v-card-text>

                        <v-card-text class=" font-weight-bold" large>
                            <v-btn outlined block @click="$router.push('farmer')" color="teal">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" class="mx-auto w3-margin-left" max-width="350">
                        <v-card-title>
                            <v-icon large left>
                                mdi-cow
                            </v-icon>
                            <h5>จำนวนกระบือที่อยู่ในระบบทั้งหมด</h5><br>
                        </v-card-title>
                        <v-card-text class="text-center headline font-weight-bold">
                            750 คน
                        </v-card-text>
                        <v-card-text class=" font-weight-bold" large>
                            <v-btn outlined block @click="$router.push('ReportBuffalo')" color="teal">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card :elevation="hover ? 16 : 2" class="mx-auto w3-margin-left" max-width="350">
                        <v-card-title>
                            <v-icon large left>
                                mdi-account-clock
                            </v-icon>
                            <h5>ผู้ใช้งานที่สมัครสมาชิกใหม่ในเดือนนี้</h5><br>
                        </v-card-title>
                        <v-card-text class="text-center headline font-weight-bold">
                            150 คน
                        </v-card-text>
                        <v-card-text class=" font-weight-bold" large>
                            <v-btn outlined block @click="$router.push('Export')" color="teal">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-flex>

    </v-container>
    <v-divider></v-divider>
    <v-card class="mx-auto text-center" color="rgba(155, 205, 155)"  max-width="600">
        <v-card-text>
            <div class="display-1 font-weight-thin">จำนวนผู้ใช้ในแต่ละเดือน</div>
        </v-card-text>
        <v-card-text>
            <v-sheet class="v-sheet--offset mx-auto" color="rgba(0, 0, 0, .12)" max-width="calc(100% - 32px)">
                <v-sparkline :labels="labels" :value="value" color="white" line-width="2" padding="16"></v-sparkline>
            </v-sheet>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions class="justify-center">
            <v-btn block @click="$router.push('ReportSystem')" text>ดูข้อมูลเพิ่มเติม</v-btn>
        </v-card-actions>
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
            labels: [
                'ม.ค.',
                'ก.พ.',
                'ม.ค.',
                'เม.ย.',
                'พ.ค.',
                'มิ.ย.',
                'ก.ค.',
                'ส.ค.',
                'ก.ย..',
                'ต.ค.',
                'พ.ย.',
                'ธ.ค.',
            ],
            value: [
                100,
                109,
                93,
                101,
                87,
                108,
                99,
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
