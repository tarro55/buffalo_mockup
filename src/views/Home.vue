<template>
<div>

    <column-chart :data="chartData"></column-chart>

    <area-chart :data="chartData"></area-chart>
    <v-btn @click="updateChart" color="success">updateChart</v-btn>
</div>
</template>

<script>
export default {
    data() {
        return {
            chartData: {
                '2020-06-20': 50,
                '2020-06-21': 40,
                '2020-06-22': 30,
                '2020-06-23': 10,
                '2020-06-24': 70,
                '2020-06-25': 45,
            }
        }
    },
    methods: {
        updateChart() {
            this.chartData = {
                '2020-06-26': 60,
                '2020-06-27': 90,
                '2020-06-28': 50,
                '2020-06-29': 20,
                '2020-06-30': 30,
                '2020-07-1': 55,
            }
        }
    }
}
</script>
