<template>
<!-- <div style="padding:20px;">
    <v-container class="fill-height" fluid>
        <v-flex>
            <v-row align="center" row wrap>
                <v-col cols="12" sm="12" md="6">
                    <v-card class="elevation-12">
                        <v-card-text class="text-center">
                            <h1>รายงานสรุปจำนวนกระบือที่มีชีวิต</h1><br>
                            <v-icon size="100">mdi-clipboard-text-outline</v-icon>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn style="width:100%" @click="$router.push('ReportBuffalo')" color="primary">ดูรายงาน</v-btn>
                        </v-card-actions>

                    </v-card>

                    <v-card class="elevation-12">
                        <v-card-text class="text-center">
                            <h1>รายงานเชิงแผนที่</h1><br>
                            <v-icon size="100">mdi-map-marker-radius-outline</v-icon>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn style="width:100%" @click="$router.push('ReportMap')" color="primary">ดูรายงาน</v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card class="elevation-12">
                        <v-card-text class="text-center">
                            <h1>รายงานความเคลื่อนไหวการใช้งานระบบ</h1><br>
                            <v-icon size="100">mdi-clipboard-flow-outline</v-icon>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn style="width:100%" @click="$router.push('ReportSystem')" color="primary">ดูรายงาน</v-btn>
                        </v-card-actions>
                    </v-card>

                    <v-card class="elevation-12">
                        <v-card-text class="text-center">
                            <h1>ข้อมูลการเจริญเติบโตของกระบือ </h1><br>
                            <v-icon size="100">mdi-file-export-outline</v-icon>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn style="width:100%" @click="$router.push('Export')" color="primary">ดูรายงาน</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
    </v-container>
    </div> --> 
<v-container grid-list-xs class="w3-margin w3-padding-32">
    <v-flex xs12 row wrap>
        <v-flex xs6> 
            <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-card :elevation="hover ? 16 : 2" class="mx-auto" max-width="520">
                    <v-card-title>
                    <v-icon large left>
                        mdi-clipboard-text-outline
                    </v-icon>
                    <h4>รายงานสรุปจำนวนกระบือที่มีชีวิต</h4><br>
                </v-card-title>
                 
                <v-card-text class=" font-weight-bold" large >
                    <v-btn outlined block  @click="$router.push('ReportBuffalo')" color="teal">ดูรายงาน</v-btn>
                </v-card-text>
                </v-card>
            </v-hover> 
        </v-flex>

        <v-flex xs6> 
            <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-card :elevation="hover ? 16 : 2" class="mx-auto" max-width="520">
                    <v-card-title>
                    <v-icon large left>
                        mdi-map-marker-radius-outline
                    </v-icon>
                    <h4>รายงานเชิงแผนที่</h4><br>
                </v-card-title>
                 
                <v-card-text class=" font-weight-bold" large >
                    <v-btn outlined block  @click="$router.push('ReportMap')" color="teal">ดูรายงาน</v-btn>
                </v-card-text>
                </v-card>
            </v-hover> 
        </v-flex> 

        <v-flex xs6> 
            <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-card :elevation="hover ? 16 : 2" class="mx-auto w3-margin-top" max-width="520">
                    <v-card-title>
                    <v-icon large left>
                        mdi-clipboard-flow-outline
                    </v-icon>
                    <h4>รายงานความเคลื่อนไหวการใช้งานระบบ</h4><br>
                </v-card-title>
                 
                <v-card-text class=" font-weight-bold" large >
                    <v-btn outlined block  @click="$router.push('ReportSystem')" color="teal">ดูรายงาน</v-btn>
                </v-card-text>
                </v-card>
            </v-hover> 
        </v-flex>  

        <v-flex xs6> 
            <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-card :elevation="hover ? 16 : 2" class="mx-auto mx-auto w3-margin-top" max-width="520">
                    <v-card-title>
                    <v-icon large left>
                        mdi-file-export-outline
                    </v-icon>
                    <h4>ข้อมูลการเจริญเติบโตของกระบือ</h4><br>
                </v-card-title>
                 
                <v-card-text class=" font-weight-bold" large >
                    <v-btn outlined block  @click="$router.push('Export')" color="teal">ดูรายงาน</v-btn>
                </v-card-text>
                </v-card>
            </v-hover> 
        </v-flex> 
        
    </v-flex>

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

<style  scoped>

</style>
