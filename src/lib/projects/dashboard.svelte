<script lang="ts">
    import pkg from "chart.js/auto/auto.js";
    const {Chart} = pkg
    import { onMount } from 'svelte';
    onMount(()=>{
        renderChart()
    })
    function renderChart() {
        const canvas = <HTMLCanvasElement> document.getElementById("myChart")

        var ctx = canvas.getContext("2d");
        var chart = new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["ts", "js", "css", "html", "json"],
                datasets: [
                {
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
                    hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5",
                    "#616774",
                    ]
                }
                ]
            },
            options: {}
        });
    }
</script>
<div class="flex flex-col w-11/12 ">
    <h3 class="text-black-500 tracking-widest text-sm pt-2 mb-1  ">Livre:  
        <span class="text-green-500 font-bold">
            90 mb
        </span>
        
    </h3>
    <h3 class="text-black-500 tracking-widest text-sm  mb-1  ">Usado:  
        <span class="text-red-500 font-bold">
            10 mb
        </span>
        
    </h3>

    <canvas class="" id="myChart"></canvas>
</div>