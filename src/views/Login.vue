<template>
<div class="bg">
    <v-dialog v-model="dialog" scrollable fullscreen persistent :overlay="false" max-width="500px" transition="dialog-transition">
        <v-card style="padding:20px;">
            <v-container class="fill-height bg" fluid>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="8" md="4">
                        <v-card class="elevation-12">
                            <v-card-text class="text-center">
                                <h1>ยินดีต้อนรับเข้าสู่ระบบ</h1>
                                <h1>พันธุ์ประวัติกระบือ</h1><br>
                                <v-form>
                                    <v-text-field label="เข้าสู่ระบบ" name="login" prepend-icon="mdi-account" type="text"></v-text-field>

                                    <v-text-field id="password" label="รหัสผ่าน" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn @click="$router.push('farmer')" large color="primary">เข้าสู่ระบบ</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-dialog>
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
            dialog: true,
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
    background-image: url("https://images.pexels.com/photos/3341338/pexels-photo-3341338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"); 
    background-color: #cccccc; 
    /* height: 500px;  */
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover; 
 
}
</style>
