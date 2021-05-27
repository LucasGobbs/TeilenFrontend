<script lang="ts">
    import TiFolder from 'svelte-icons/ti/TiFolder.svelte'
    import Avatar from "$lib/Avatar.svelte";
    import Explorer from "$lib/editor/Explorer/Explorer.svelte"
    import LeftBar from '$lib/projects/LeftBar/LeftBar.svelte'
    import Dashboard from '$lib/projects/dashboard.svelte'
    let second_left = false
    let left_bar = "config"
    let selected_project = 0
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
    {
        name: "Técnicas de pr",
        version: "Turma: 220",
        status: "desligado",
    }
    ]
    $: projects_3 = group_array(projects,4)
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

        

    const onClickInUnselected = (event) => {
        second_left = true;
        left_bar = event.detail.name; 
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
            {#if second_left}
                <div class="bg-white w-72 max-h-full shadow-2xl flex flex-col items-left z-1 justify-between">
                    <div class="ml-4 divide-y divide-indigo-300 w-11/12 h-full">
                        <h1 class="text-black-500 tracking-widest text-sm pt-2 mb-3 font-bold ">Programação Orientada a Objetos</h1>
                        {#if  left_bar == "explorer"}
                            <h2 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-5 pt-8 ">Explorer</h2>
                            <!-- <Explorer bind:root={project_explorer} on:SelectFile={handle_select_file} /> -->
                            <Explorer  bind:root={project_explorer} />
                        {:else if  left_bar == "config"}
                            <h1 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-3 pt-8 ">Config</h1>
                        {:else if left_bar == "dashboard"}
                            <h1 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-3 pt-8 ">Storage</h1>
                            <Dashboard />
                        {/if}
                        
                    </div>
                </div>
            {/if}
            
            <!-- Body -->
            <div class="bg-indigo-100 w-full h-full flex flex-col items-center z-1 p-2">
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
                <div class="scrollbar-track-transparent hover:scrollbar-thumb-indigo-400 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-thin">
                    <div class="flex flex-col overflow-auto w-full 11/12" >
                        {#each projects_3 as project_3, i}
                            <div class="flex w-full justify-center"> 
                                {#each project_3 as project, j}
                                    {#if selected_project == (i*4+j)}
                                        <div on:click={()=>{selected_project=(-1)}} class="bg-indigo-400 m-2 p-2 divide-black  divide-y w-1/4  content-center content-center transition duration-500 ease-in-out py-4 transform hover:scale-105"> 

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
                                    {:else}
                                        <div on:click={()=>{selected_project=(i*4+j)}} class="bg-white m-2 p-2 divide-y w-1/4  content-center transition duration-500 ease-in-out py-4 hover:bg-indigo-200 transform hover:scale-105"> 

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
                                    {/if}
                                    
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
</div>