<template>
<v-container class="bg">

    <v-container>
        <h2>ข้อมูลส่วนตัว</h2>
        <!-- <v-breadcrumbs :items="bc" large>
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs> -->
        <v-divider></v-divider>
    </v-container>
  
    <v-container grid-list-xs>
        <center>
            <v-card class="rounded-lg pa-4">
                <v-layout row wrap>
                    <v-flex xs12 md6 class="pt-6">
                        <center>
                            <v-avatar class="rounded-lg elevation-4" color="grey" size="164" >
                                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                            </v-avatar>
                        </center>
                        <br>
                        <v-btn outlined dense class="rounded-lg ma-2" color="green"><v-icon>mdi-upload</v-icon>อัพโหลดรูป
                        </v-btn>
                        <v-btn outlined dense class="rounded-lg ma-2" color="green" click="dialog1=false"><v-icon>mdi-pencil</v-icon>แก้ไข
                        </v-btn>
                        
                    </v-flex>

                    <v-flex xs12 md6>
                        <v-text-field outlined dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" label="ชื่อ-นามสกุล"></v-text-field>
                        <v-text-field outlined dense class="rounded-lg" prepend-inner-icon="mdi-account" color="green" label="ชื่อผู้ใช้งาน"></v-text-field>
                        <v-text-field outlined dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" label="รหัสผ่าน"></v-text-field>
                        <v-text-field outlined dense class="rounded-lg" prepend-inner-icon="mdi-email" color="green" label="อีเมล"></v-text-field>
                        <v-btn @click="$router.push('profile')" item-disabled large block dark class="rounded-lg" color="green">บันทึก</v-btn>
                    </v-flex>
                </v-layout>
            </v-card>
        </center>
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
            bc: [{
                    text: 'ข้อมูลส่วนตัว',
                    disabled: false, 
                    link:'true',
                    href: '/#/profile',
                }, 
            ],

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
    background-repeat: repeat;
    background-size: cover;
}
</style>
