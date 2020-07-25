<template>
<div>
    <!-- <v-navigation-drawer v-model="drawer" app clipped class="dr-bg"> -->
    <v-navigation-drawer v-model="drawer" app clipped>
        <!-- <v-list class="w3-margin" shaped> --> 
        <v-list dense rounded>
            <!-- <v-list-item two-line :class="miniVariant && 'px-0'"> -->
            <v-list-item two-line class="pt-2">
                <v-list-item-avatar size="50">
                    <img src="https://randomuser.me/api/portraits/men/81.jpg">
                </v-list-item-avatar>

                <v-list-item-content>
                    <h5>นายแดง แดงแดง</h5>
                    <h6 color="grey">dang@gmail.com</h6>
                    <!-- <v-list-item-title>นายแดง แดงแดง</v-list-item-title> -->
                    <!-- <v-list-item-subtitle>dang@gmail.com</v-list-item-subtitle> -->
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item-group v-model="item" color="green">
                <v-list-item v-for="(item, i) in items" :key="i" @click="$router.push(`${item.router}`) ">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="">{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>

    </v-navigation-drawer>

    <!-- <v-app-bar app clipped-left class="bg" color=" darken-3"> -->
    <v-app-bar app clipped-left color="white" elevate-on-scroll >
        <v-toolbar-title style="width: 300px" class="ml-0 pl-3" >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <a href="" @click="$router.push(`farmerdetail`)"><img style="width:50%;" src="https://www.img.in.th/images/209695056f7b9ddfe087f862d5b107d8.png" alt=""></a>

        </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- <v-menu bottom offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn-icon class="ma-2" v-bind="attrs" v-on="on">
                    <v-avatar>
                        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                    </v-avatar>
                </v-btn-icon>
            </template>
            <v-list>
                <v-list-item v-for="(item, i) in items1" :key="i" @click="() => {}">
                    <v-list-item-title>
                        {{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu> -->

    </v-app-bar>

</div>
</template>

<script>
export default {
    name: "Root",
    components: {},
    props: {},
    data() {
        return {
            drawer: null,
            items1: [{
                    title: 'ข้อมูลส่วนตัว',
                },
                {
                    title: 'ออกจากระบบ',
                },
            ],
            item: 0,
            items: [{
                    text: "แดชบอร์ด",
                    icon: "mdi-chart-bell-curve-cumulative",
                    router: "/dashboard"
                },
                {
                    text: "ข้อมูลส่วนตัว",
                    icon: "mdi-account",
                    router: "/profile"
                },
                {
                    icons: "",
                    text: "จัดการเกษตกร",
                    sub: "จัดการเกษตกร",
                    icon: "mdi-account",
                    router: "/farmer"
                },
                {
                    icons: "",
                    text: "จัดการผู้ดูแลระบบ",
                    sub: "จัดการผู้ดูแลระบบ",
                    icon: "mdi-account-cog",
                    router: "/editadmin"
                },
                {
                    icons: "",
                    text: "คำร้องขอลืมรหัสผ่านเกษตกร",
                    sub: "คำร้องขอลืมรหัสผ่านเกษตกร",
                    icon: "mdi-account-key",
                    router: "/resetpass"
                },
                {
                    icons: "",
                    text: "รายงาน",
                    sub: "รายงานข้อมูลต่างๆ",
                    icon: "mdi-clipboard-text-outline",
                    router: "/report"
                },
                {
                    icons: "",
                    text: "ออกจากระบบ",
                    icon: "mdi-logout",
                    router: "/"
                },

            ],

            txt: "Hello World",
            active: false
        };
    },
    mounted: async function () {
        await this.load();
    },
    async beforeRouteEnter(to, from, next) {
        next();
    },
    computed: {

    },
    methods: {

        load: async function () {}
    }
};
</script>

<style scoped>
/* .bg-menu {
    background-color: #833cb5;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%23833cb5'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23c19eda'/%3E%3Cstop offset='1' stop-color='%23833cb5'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
}

.bg {
    background-color: #c568ff;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000000' stroke-width='64.2' stroke-opacity='0.05' %3E%3Ccircle fill='%23c568ff' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23bb61f0' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23b15ae1' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23a753d2' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%239d4cc4' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%239345b6' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23893fa8' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%237f399a' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%2375328d' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%236c2c80' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23622773' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23582167' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%234e1b5b' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2345164f' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%233b1144' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23320c39' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2329072e' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
} */

.dr-bg {
    background-color: #cfcfcf;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpath fill='%23d8d8d8' d='M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z'/%3E%3Cpath fill='%23e2e2e2' d='M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z'/%3E%3Cpath fill='%23ececec' d='M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z'/%3E%3Cpath fill='%23f5f5f5' d='M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z'/%3E%3Cpath fill='%23ffffff' d='M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z'/%3E%3Cpath fill='%23fafafa' d='M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z'/%3E%3Cpath fill='%23f5f5f5' d='M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z'/%3E%3Cpath fill='%23f0f0f0' d='M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z'/%3E%3Cpath fill='%23ebebeb' d='M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z'/%3E%3Cpath fill='%23e6e6e6' d='M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z'/%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;

    /* height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */

}

.bg { 
    background: rgba(242, 243, 244); 
    height: 100%; 
    background-position: center;
    background-repeat: repeat;
    background-size: cover;
}
</style>
