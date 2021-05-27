<script lang="ts">
    import TiFolder from 'svelte-icons/ti/TiFolder.svelte'
    import Avatar from "$lib/Avatar.svelte";
    import Explorer from "$lib/editor/Explorer/Explorer.svelte"
    import LeftBar from '$lib/projects/LeftBar/LeftBar.svelte'
    import Dashboard from '$lib/projects/dashboard.svelte'
    
    let left_bar = "config"
    let projects = [{
        name: "Programação Orientada a Objetos",
        version: "Turma: 2018",
        status: "desligado",
    }, 
    {
        name: "Programação Orientada a Objetos",
        version: "Turma: 2019",
        status: "desligado",
    }, 
    {
        name: "Programação Orientada a Objetos",
        version: "Turma: 2020",
        status: "desligado",
    }, 
    {
        name: "Programação Orientada a Objetos 2",
        version: "Turma: 2018",
        status: "desligado",
    }, 
    {
        name: "Programação Orientada a Objetos 2",
        version: "Turma: 2019",
        status: "desligado",
    }, 
    {
        name: "Programação Orientada a Objetos 2",
        version: "Turma: 220",
        status: "desligado",
    }, 
    {
        name: "Programação 1",
        version: "Turma: 2018",
        status: "desligado",
    }, 
    {
        name: "Programação 2",
        version: "Turma: 2019",
        status: "desligado",
    }, 
    {
        name: "Técnicas de programação Avançadas",
        version: "Turma: 220",
        status: "desligado",
    }, 
    {
        name: "Técnicas de programação Avançadas",
        version: "Turma: 220",
        status: "desligado",
    }, 
    {
        name: "Técnicas de pr",
        version: "Turma: 220",
        status: "desligado",
    }, 
    {
        name: "Técnicas de programação Avançadas",
        version: "Turma: 220",
        status: "desligado",
    }, 
    {
        name: "T",
        version: "Turma: 220",
        status: "desligado",
    }, 
    {
        name: "Técnicas de pr",
        version: "Turma: 220",
        status: "desligado",
    }, 
    ]
    $: projects_3 = group_array(projects,3)
    function group_array(arr: any[], n: number): any[][]{
        let rt = []
        let i=0
        while(arr.length>0){
            rt[i]=[]
            for(let j=0; j < n; j++ ){
                const n = arr.shift()
                if(n){
                    rt[i].push(n)
                }
            }
            i++
        }
        return rt
    }
    let project_status = "desligado"
    
    
    import pkg from "chart.js/auto/auto.js";
    const {Chart} = pkg
    import { onMount } from 'svelte';
    onMount(async()=>{
        // renderChart()
        //console.log(projects.length)
        //console.log(projects_3)
    })
    function renderChart() {
        const canvas = <HTMLCanvasElement> document.getElementById("myChart")
            console.log(canvas)
        if(canvas){
            console.log("AAA")
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
        
    }
    const onClickInUnselected = (event) => {
        left_bar = event.detail.name; 
        if(left_bar == "dashboard"){renderChart()}
    }
    let project_explorer = new Root(default_folder)
    import MdSearch from 'svelte-icons/md/MdSearch.svelte'
    import MdSettings from 'svelte-icons/md/MdSettings.svelte'
import { default_folder, Root } from '$lib/editor/Explorer/Explorer';
</script>
<div class = "mx-auto h-screen overflow-hidden ">
    
    <div class = "h-screen ">
        <div class = "flex flex-row flex-grow h-full bg-indigo-100">
            <!-- LeftBars -->
            <LeftBar on:clickun={onClickInUnselected} />
            <!-- 2 LeftBar -->
            <div class="bg-white w-72 h-full flex flex-col items-left z-1 justify-between">
                <div class="ml-4 divide-y divide-indigo-300 w-11/12">
                    <h1 class="text-black-500 tracking-widest text-sm pt-2 mb-3 font-bold ">Programação Orientada a Objetos</h1>
                    {#if left_bar == "explorer"}
                        <h2 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-5 pt-8 ">Explorer</h2>
                        <!-- <Explorer bind:root={project_explorer} on:SelectFile={handle_select_file} /> -->
                        <Explorer bind:root={project_explorer} />
                    {:else if  left_bar == "config"}
                        <h1 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-3 pt-8 ">Config</h1>
                    {:else if left_bar == "dashboard"}
                        <h1 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-3 pt-8 ">Storage</h1>
                        <Dashboard />
                    {/if}
                    
                </div>
            </div>
            <!-- Body -->
            <div class="bg-indigo-200 w-full h-full flex flex-col items-center z-1 p-2">
                <!-- Search -->
                <!-- <div class="bg-gray-100 text-indigo-300 h-10 w-9/12">AAAAAAAAAAAAAA</div> -->
                <div class="relative flex w-9/12 flex-wrap items-stretch mb-3 pt-5">
                    
                    <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-lg items-center justify-center w-8 pl-3 py-3">
                        <MdSearch/>
                    </span>
                    <input type="text" placeholder="Nome do projeto" class="h-10 px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-base border-0 shadow outline-none focus:outline-none focus:ring w-full pl-10"/>
                </div>
                <!-- Servers -->
                <!-- <div class="flex justify-stretch items-stretch w-full">
                    <div class="bg-white">aaa</div>
                    <div>BBB</div>
                    <div>CCC</div>
                </div> -->
                <!-- Projects -->
                <div class="flex flex-col overflow-auto w-full">
                    {#each projects_3 as project_3}
                        <div class="flex w-full"> 
                            {#each project_3 as project}
                                <div class="bg-white m-2 p-2 divide-y w-1/3"> 
                                    <div class="flex pb-1">
                                        <div class="rounded bg-red-500 w-8 h-8 flex-shrink-0"></div>
                                        <span class="text-black-500 tracking-widest text-sm mb-3 font-bold pl-4 flex-shrink ">{project.name}</span>
                                    </div>
                                        <h3 class="text-black-500 tracking-widest text-sm mb-1 font-bold">{project.version}</h3>
                                        <h4 class="text-black-500 tracking-widest text-sm mb-1 font-bold ">Status
                                            {#if project.status == "ligado"}
                                                <span class=" text-green-400">{project.status}</span> 
                                            {:else}
                                                <span class=" text-red-400">{project.status}</span> 
                                            {/if}

                                        </h4>
                                        
                                            
                                      
                                </div>
                            {/each}
                        </div>
                        <!-- <div class="bg-white rounded-md p-2 divide-y divide-indigo-500">
                            <div class="flex pb-2">
                                <div class="rounded bg-red-500 w-8 h-8 flex-shrink-0"></div>
                                <span class="text-black-500 tracking-widest text-sm mb-3 font-bold pl-4 flex-shrink">{project.name}</span>
                            </div>
                                <h3 class="text-black-500 tracking-widest text-sm mb-3 font-bold pl-4">{project.version}</h3>
                            
                        </div> -->
                    {/each}
                </div>
            </div>
            
        </div>
    </div>
</div>