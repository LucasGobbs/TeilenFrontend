<script lang="ts">
    import TiFolder from 'svelte-icons/ti/TiFolder.svelte'
    import Avatar from "$lib/Avatar.svelte";
    import Explorer from "$lib/editor/Explorer/Explorer.svelte"

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
    
    
    import Chart from "chart.js/auto";
    import { onMount } from 'svelte';
    onMount(async()=>{
        renderChart()
        //console.log(projects.length)
        //console.log(projects_3)
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

    import MdSearch from 'svelte-icons/md/MdSearch.svelte'
</script>
<div class = "mx-auto h-screen overflow-hidden ">
    
    <div class = "h-screen ">
        <div class = "flex flex-row flex-grow h-full bg-indigo-100">
            <!-- LeftBars -->
            <nav class="bg-indigo-500 w-16 h-full flex flex-col items-center z-1 justify-between">
                <!-- Top -->
                <div class="">
                    <!-- Logo -->
                    <div class="mx-auto rounded-full bg-white w-10 h-10 mt-3"></div>
                    <!-- Icons -->
                    <div class="mt-8 w-16 text-white "> 
                        <div class="py-4 hover:bg-indigo-600 hover:border-opacity-100 border-opacity-0 border-white border-l-4 rounded h-16">
                            <div class="w-6 h-6 m-auto">
                                <TiFolder />
                            </div>
                        </div>
                        <div class="py-4 hover:bg-indigo-600 hover:border-opacity-100 border-opacity-0 border-white border-l-4 rounded h-16">
                            <div class="w-6 h-6 m-auto">
                                <TiFolder />
                            </div>
                        </div>
                        <div class="py-4 hover:bg-indigo-600 hover:border-opacity-100 border-opacity-0 border-white border-l-4 rounded h-16">
                            <div class="w-6 h-6 m-auto">
                                <TiFolder />
                            </div>
                        </div>
                        <div class="py-4 hover:bg-indigo-600 hover:border-opacity-100 border-opacity-0 border-white border-l-4 rounded h-16">
                            <div class="w-6 h-6 m-auto">
                                <TiFolder />
                            </div>
                        </div>
                        <div class="py-4 hover:bg-indigo-600 hover:border-opacity-100 border-opacity-0 border-white border-l-4 rounded h-16">
                            <div class="w-6 h-6 m-auto">
                                <TiFolder />
                            </div>
                        </div>
                        
                    </div>
                </div>

                
                <!-- Avatar -->
                <a href="#" class ="mt-8">
                    <img
                     
                      src="https://randomuser.me/api/portraits/women/76.jpg"
                      class="rounded-full w-10 h-10 mb-3 mx-auto"
                    />
                </a>
            </nav>
            <!-- 2 LeftBar -->
            <div class="bg-white w-72 h-full flex flex-col items-left z-1 justify-between">
                <div class="ml-4 divide-y divide-indigo-300">
                    <h1 class="text-black-500 tracking-widest text-sm pt-2 mb-3 font-bold ">Programação Orientada a Objetos</h1>
                    {#if left_bar == "explorer"}
                        <h2 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-5 pt-8 ">Explorer</h2>
                        <!-- <Explorer bind:root={project_explorer} on:SelectFile={handle_select_file} /> -->
                    {:else if  left_bar == "config"}
                        <h1 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-3 pt-8 ">Config</h1>
                    {:else}
                         <!-- else content here -->
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
            <!-- RightBar -->
            <div class="bg-white w-56 h-full flex flex-col items-start  z-1 justify-between">
                <h2 class="text-black-500 tracking-widest text-sm pt-2 mb-3 font-bold pl-2 ">Status: 
                    {#if project_status == "ligado"}
                        <span class="bg- text-green-400">{project_status}</span> 
                    {:else}
                        <span class="bg- text-red-400">{project_status}</span> 
                    {/if}
                    
                </h2>
              
                <div class="flex flex-col w-full p-2 items-center">
                    <h3 class="text-black-500 tracking-widest text-sm pt-2 mb-3 font-bold ">Espaço</h3>
                    
                    <div class="flex border  w-full items-start">
                        
                        <h4>Espaço: 10/100 mb</h4>
                    </div>
                    <canvas id="myChart"></canvas>
                </div>
                        
               
            </div>
        </div>
    </div>
</div>