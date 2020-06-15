<template>
    <div style="padding:20px;">
        <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="8">
                    <v-card class="elevation-12">
                        <v-card-text class="text-center">
                            <h1 >รายงานสรุปจำนวนกระบือที่มีชีวิต</h1><br>
                            <v-icon size="100">mdi-clipboard-text-outline</v-icon>
                        </v-card-text> 
                        <v-card-actions>
                            <v-btn style="width:100%" @click="$router.push('ReportBuffalo')" color="primary">ดูรายงาน</v-btn>
                        </v-card-actions>
                        
                    </v-card>
                </v-col>
            </v-row>

            <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="8">
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
                </v-col>
            </v-row>

            <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="8">
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
                </v-col>
            </v-row>

            <v-row align="center" justify="center">
                <v-col cols="12" sm="12" md="8">
                    <v-card class="elevation-12">
                        <v-card-text class="text-center">
                            <h1>ส่งออกรายงาน</h1><br>
                            <v-icon size="100">mdi-file-export-outline</v-icon>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn style="width:100%" @click="$router.push('Export')" color="primary">ดูรายงาน</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
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
