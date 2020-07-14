<template>
<v-container class="bg">

    <v-container>
        <h2>แดชบอร์ด</h2>
        <v-divider></v-divider>
    </v-container>

    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-img style="height:160px" src="https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
                            <!-- <v-row class="pa-2">  -->
                                <center>
                                <v-avatar class="rounded-lg pt-3 elevation-5" size="120">
                                    <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                                </v-avatar> 
                                    <v-list-item-title class="title body-3 white--text font-weight-light" ><h5>นายแดง สุขใจ (ผู้ดูแลระบบ)</h5></v-list-item-title>
                             
                                </center> 
                        </v-img>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-row class="pa-2">
                            <v-icon dark large class="icondash info pa-7 rounded-lg">mdi-account-multiple</v-icon>
                            <div class="ml-auto text-right">
                                <div class="body-3 grey--text font-weight-light">
                                    เกษตกร
                                </div>
                                <div class="body-3 grey--text font-weight-light">
                                    ทั้งหมด
                                </div>
                                <h2>
                                    300 คน
                                </h2>
                            </div>
                            <v-btn class="rounded-lg" outlined block @click="$router.push('farmer')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-row class="pa-2">
                            <v-icon dark large class="icondash indigo pa-7 rounded-lg">mdi-account-clock</v-icon>
                            <div class="ml-auto text-right">
                                <div class="body-3 grey--text font-weight-light">
                                    สมัครสมาชิกใหม่
                                </div>
                                <div class="body-3 grey--text font-weight-light">
                                    ในเดือนนี้
                                </div>
                                <h2>
                                    120 คน
                                </h2>
                            </div>
                            <v-btn class="rounded-lg" outlined block @click="$router.push('reportsystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-img style="height:160px" src="https://images.pexels.com/photos/46188/bison-buffalo-american-animal-46188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></v-img>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-row class="pa-2">
                            <v-icon dark large class="icondash light-blue pa-7 rounded-lg">mdi-cow</v-icon>
                            <div class="ml-auto text-right">
                                <div class="body-3 grey--text font-weight-light">
                                    จำนวนกระบือ
                                </div>
                                <div class="body-3 grey--text font-weight-light">
                                    ทั้งหมด
                                </div>
                                <h2>
                                    500 ตัว
                                </h2>
                            </div>
                            <v-btn class="rounded-lg" outlined block @click="$router.push('reportsystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-flex>

            <v-flex xs12 md4>
                <v-hover v-slot:default="{ hover }" close-delay="200">
                    <v-card class="pa-3 rounded-lg ma-2" flat :elevation="hover ? 16 : 2  ">
                        <v-row class="pa-2">
                            <v-icon dark large class="icondash purple pa-7 rounded-lg">mdi-home-group</v-icon>
                            <div class="ml-auto text-right">
                                <div class="body-3 grey--text font-weight-light">
                                    จำนวนฟาร์ม
                                </div>
                                <div class="body-3 grey--text font-weight-light">
                                    ทั้งหมด
                                </div>
                                <h2>
                                    50 แห่ง
                                </h2>
                            </div>
                            <v-btn class="rounded-lg" outlined block @click="$router.push('reportsystem')" color="green">ดูรายละเอียดเพิ่มเติม</v-btn>
                        </v-row>
                    </v-card>
                </v-hover>
            </v-flex>
            <!-- <v-flex xs12 md4 >
                <v-date-picker v-model="picker" elevation="5" class="rounded-lg ma-3"></v-date-picker>
            </v-flex> -->
        </v-layout>
    </v-container>

    <v-divider></v-divider>
    <v-container grid-list-xs>
        <v-layout row wrap>
            <v-flex xs12 md6>
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2" class="rounded-lg ma-2 mr-4 pa-4">
                        <h4 class="text-center">
                            จำนวนผู้ใช้งานในแต่ละเดือน
                        </h4>
                        <column-chart :colors="['#3CB371']" :data="chartData"></column-chart>
                        <center>
                            <v-btn @click="$router.push('reportsystem')" block text class="rounded-lg mt-2 mb-3" color="green">ดูข้อมูลเพิ่มเติม</v-btn>
                        </center>
                    </v-card>
                </v-hover>
            </v-flex>
            <v-flex xs12 md6>
                <v-hover v-slot:default="{ hover }" close-delay="200" class="lg4 sm6 xs12">
                    <v-card :elevation="hover ? 16 : 2" class="rounded-lg ma-2 ml-4 pa-4">
                        <h4 class="text-center">
                            จำนวนกระบือที่อยู่ในระบบทั้งหมด
                        </h4>
                        <area-chart :colors="['#1E90FF']" :data="chartData"></area-chart>
                        <center>
                            <v-btn @click="$router.push('reportbuffalo')" block text class="rounded-lg mt-2 mb-3" color="green">ดูข้อมูลเพิ่มเติม</v-btn>
                        </center>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
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
    background: rgba(242, 243, 244);
    height: 100%;
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}

.icondash {
    max-height: 80px;
    width: auto;
}
</style>
