<template>
<div class="w3-padding-24">

    <v-autocomplete @change="provinceChange" item-disabled v-model="province_val" return-object :items="province" item-text="province_name" label="จังหวัด"></v-autocomplete>
    <v-autocomplete @change="amphuresChange" item-disabled v-model="amphures_val" return-object :items="amphures" item-text="amphur_name" label="อำเภอ"></v-autocomplete>
    <v-autocomplete @change="districtsChange" item-disabled v-model="districts_val" return-object :items="districts" item-text="district_name" label="ตำบล"></v-autocomplete>
    <v-text-field  v-model="zip" label="รหัสไปรศนีย์" id="id"></v-text-field>

</div>
</template>

<script>
import province from '../plugins/thailand/provinces.json';
import amphures from '../plugins/thailand/amphures.json';
import districts from '../plugins/thailand/districts.json';
import zipcodes from '../plugins/thailand/zipcodes.json';
import _ from 'lodash';
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
            province: [],
            province_val: {},

            amphures: [],
            amphures_val: {},
            districts: [],
            districts_val: {},
            zip:'',
            response: false,
        };
    },
    /*------------------------- สิ่งทที่อยู่ในนี้จะถูกรัยเมื่อโหลด ------------------------------------------*/
    mounted: async function () {
        /**** เรียกใช้ methods ชื่อ load() */
        await this.load();
    },
    watch: {

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
       

        provinceChange(val) {
            this.amphures = _.filter(amphures, {
                'province_id': val.province_id
            });
            this.districts = _.filter(districts, {
                'province_id': val.province_id
            });
        },
        amphuresChange(val) { 
            this.districts = _.filter(districts, {
                'amphur_id': val.amphur_id
            });
             
        },
        districtsChange(val){
           this.amphures = _.filter(amphures, {
                'province_id': val.province_id
            });

         let zip  = _.filter(zipcodes, {
                'district_code': val.district_code
            });
             this.zip = zip[0].zipcode_name
        },
        /******* Methods default run ******/
        load: async function () {

            this.province = province
            this.response = true;
        }
    },
}
</script>

<style  scoped>

</style>
