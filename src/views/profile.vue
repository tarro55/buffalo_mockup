<template>
<v-container class="bg">

    <v-container>
        <h2>ข้อมูลส่วนตัว</h2>
        <v-divider></v-divider>
    </v-container>

    <v-container>
        <v-card class="rounded-lg">
            <v-flex xs12 row wrap>
                <v-flex xs4 class="mt-6">
                    <center>
                        <v-avatar outlined class="rounded-circle elevation-4" color="grey" size="164" tile>
                            <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                        </v-avatar>
                        <v-flex xs12 class="mt-4">
                            <v-btn outlined dense class="rounded-lg ma-2" color="green">อัพโหลดรูป<v-icon>mdi-upload</v-icon></v-btn>
                            <v-btn outlined dense class="rounded-lg ma-2" color="green" click="dialog1=false">แก้ไข<v-icon>mdi-pencil</v-icon></v-btn>
 
                        </v-flex>
                    </center>

                </v-flex>
                <v-divider vertical></v-divider>
                <v-flex xs7 class="mt-6">
                    <center>
                        <v-flex xs8>
                            <v-text-field outlined dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" label="ชื่อ-นามสกุล"></v-text-field>
                            <v-text-field outlined dense class="rounded-lg" prepend-inner-icon="mdi-account" color="green" label="ชื่อผู้ใช้งาน"></v-text-field>
                            <v-text-field outlined dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" label="รหัสผ่าน"></v-text-field>
                            <v-text-field outlined dense class="rounded-lg" prepend-inner-icon="mdi-email" color="green" label="อีเมล"></v-text-field>
                        </v-flex>
                    </center>
                </v-flex>
            </v-flex>
        </v-card>
    </v-container>
    <!-- <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-card-account-details-outline" color="green" outlined  label="ชื่อ-นามสกุล"></v-text-field> 
                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-account" color="green" outlined  label="ชื่อผู้ใช้งาน"></v-text-field>
                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-lock" color="green" outlined  label="รหัสผ่าน"></v-text-field> 
                                    <v-text-field dense class="rounded-lg" prepend-inner-icon="mdi-email" color="green" outlined  label="อีเมล"></v-text-field> -->
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
