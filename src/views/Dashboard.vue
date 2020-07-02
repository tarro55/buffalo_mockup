<template>
<v-container class="bg">

    <v-container>
        <h2>แดชบอร์ด</h2>
        <v-divider></v-divider>
    </v-container>

    <center>
        <v-container>
            <v-flex xs12 row wrap>
                <v-flex xs8 row wrap>
                    <v-flex xs6 class="pa-2">
                        <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                            <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" info pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-account-multiple</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <div class="body-3 grey--text font-weight-light">
                                                จำนวนผู้ใช้ที่อยู่ในระบบ
                                            </div>
                                            <div class="body-3 grey--text font-weight-light">
                                                ทั้งหมด
                                            </div>
                                            <h2>
                                                300 คน
                                            </h2>
                                        </div>
                                    </div>

                                    <v-btn class="rounded-lg" outlined block @click="$router.push('farmer')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                                </div>
                                <!-- </div> -->
                            </v-card>
                        </v-hover>
                    </v-flex>

                    <v-flex xs6 class="pa-2">
                        <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                            <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" indigo pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-account-clock</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <div class="body-3 grey--text font-weight-light">
                                                ผู้ใช้งานที่สมัครสมาชิกใหม่
                                            </div>
                                            <div class="body-3 grey--text font-weight-light">
                                                ในเดือนนี้
                                            </div>
                                            <h2>
                                                120 คน
                                            </h2>
                                        </div>
                                    </div>
                                    <v-btn class="rounded-lg" outlined block @click="$router.push('ReportSystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                                </div>
                                <!-- </div> -->
                            </v-card>
                        </v-hover>
                    </v-flex>

                    <v-flex xs6 class="pa-2">
                        <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                            <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" success pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-cow</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <div class="body-3 grey--text font-weight-light">
                                                จำนวนกระบือที่อยู่ในระบบ
                                            </div>
                                            <div class="body-3 grey--text font-weight-light">
                                                ทั้งหมด
                                            </div>
                                            <h2>
                                                500 ตัว
                                            </h2>
                                        </div>
                                    </div>
                                    <v-btn class="rounded-lg" outlined block @click="$router.push('ReportBuffalo')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                                </div>
                                <!-- </div> -->
                            </v-card>
                        </v-hover>
                    </v-flex>

                    <v-flex xs6 class="pa-2">
                        <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                            <v-card :elevation="hover ? 16 : 2  " class="mx-auto pa-3 rounded-lg">
                                <!-- <div class="v-card--material pa-3 v-card--material-stats v-card v-sheet theme--light v-card--material--has-heading"> -->
                                <div class="d-flex grow flex-wrap">
                                    <v-icon dark large class=" purple pa-7 rounded-lg" style="max-height: 80px; width: auto;">mdi-cow</v-icon>
                                    <v-spacer></v-spacer>
                                    <div class="col-ml-6 ">
                                        <div class="ml-auto text-right">
                                            <div class="body-3 grey--text font-weight-light">
                                                จำนวนฟาร์มทั้งหมด
                                            </div>
                                            <div class="body-3 grey--text font-weight-light">
                                                ทั้งหมด
                                            </div>
                                            <h2>
                                                50 แห่ง
                                            </h2>
                                        </div>
                                    </div>
                                    <v-btn class="rounded-lg" outlined block @click="$router.push('ReportSystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                                </div>
                                <!-- </div> -->
                            </v-card>
                        </v-hover>
                    </v-flex>

                </v-flex>

                <v-flex xs4 pa-2 class="w3-margin-left ">
                    <v-date-picker v-model="picker" elevation="5" class="rounded-lg"></v-date-picker>
                </v-flex>

            </v-flex>
        </v-container>
    </center>

    <v-divider></v-divider>

<v-container grid-list-xs>
    <v-flex xs12 row wrap>
        <v-flex xs6>
            <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
            <v-card :elevation="hover ? 16 : 2"  class="rounded-lg ma-2">
                <h4 class="text-center">
                    จำนวนผู้ใช้งานในแต่ละเดือน
                </h4>
                <column-chart :colors="['#3CB371']" :data="chartData"></column-chart>
                <center>
                    <v-btn @click="$router.push('ReportSystem')" block text class="rounded-lg mt-2 mb-3" color="green">ดูข้อมูลเพิ่มเติม</v-btn>
                </center>
            </v-card>
            </v-hover>
        </v-flex>
        <v-flex xs6>
            <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
            <v-card :elevation="hover ? 16 : 2" class="rounded-lg ma-2">
                <h4 class="text-center">
                    จำนวนกระบือที่อยู่ในระบบทั้งหมด
                </h4>
                <area-chart :colors="['#1E90FF']" :data="chartData"></area-chart>
                <center>
                    <v-btn @click="$router.push('ReportBuffalo')" block text class="rounded-lg mt-2 mb-3" color="green">ดูข้อมูลเพิ่มเติม</v-btn>
                </center>
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

            picker: null,
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
            chartData: {
                '2020-06-20': 50,
                '2020-06-21': 40,
                '2020-06-22': 30,
                '2020-06-23': 10,
                '2020-06-24': 70,
                '2020-06-25': 45,
            },
        };

    }
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
