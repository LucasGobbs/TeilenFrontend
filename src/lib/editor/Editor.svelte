<script lang="ts">
    import Avatar from "$lib/Avatar.svelte";
    import { slide } from 'svelte/transition';
    //import 'codemirror/mode/javascript/javascript'
    //import 'codemirror/theme/dracula.css'
    import CodeMirror from '$lib/editor/codemirror/index'
    import TabBar from '$lib/editor/TabBar/TabBar.svelte'
    

    let options = {
		mode: "javascript",
		lineNumbers: true,
        theme: 'dracula',
        value: 'let a = export bababau'
	}
    let editor
    let second_bar = true
    let avatar_bar = true
    const create_user = () => {
        const colors = [
            "bg-red-500", "bg-green-500", "bg-yellow-500", "bg-purple-500"
        ]
        const letters = "ABCDEFGHIJKLMNPQRSTUXYZ"

        return {
            color: colors[Math.floor(Math.random()*colors.length)],
            name: `${letters[Math.floor(Math.random()*letters.length)]}${letters[Math.floor(Math.random()*letters.length)]}`
        }
    }
    let users = []
    for(let i=0; i<25;i++){
        users.push(create_user())
    }

    import TreeView from '$lib/TreeView.svelte'
    import Explorer from '$lib/editor/Explorer/Explorer.svelte'
    let project_explorer = new Root(default_folder)
	

    let side_mode = 'none'
    let isFile = false
    let toggle_mode = (new_mode: string)=>{
        if(side_mode == 'none'){
            side_mode = new_mode;
            switch(side_mode){
                case 'file_explorer':
                    isFile = true
                    break;
            }
        } else {
            side_mode = 'none';
            isFile = false
        }
        console.log(isFile)
    }


    let tabs: Tabs = new Tabs([])
    let selected_tab = 0


    const handle_select_file = (evt)=>{
        const new_tab = Tab.fromItem(evt.detail.selected)
        if(tabs.alreadyOpen(new_tab)){
            const idx = tabs.getIndex(new_tab)
            if(idx == -1){return;}
            tabs = tabs.select(idx)
        } else {
            tabs = tabs.add(new_tab)
        }
        console.log(editor)
        console.log(editor.state.doc)

        editor.dispatch({changes: {from: 0, to: editor.state.doc.length, insert: evt.detail.selected.content}})
        editor = editor
 
    }
    const handle_select_tab = (evt)=>{
        project_explorer = project_explorer.selectFile(Item.fromTab(evt.detail.tab))
        editor.dispatch({changes: {from: 0, to: editor.state.doc.length, insert: evt.detail.tab.content}})
        editor = editor
    }

    // Icons ----
    import MdFolder from 'svelte-icons/md/MdFolder.svelte'
    import TiFolder from 'svelte-icons/ti/TiFolder.svelte'
    import TiFolderOpen from 'svelte-icons/ti/TiFolderOpen.svelte'
    import { Item, File, Root, default_folder } from "$lib/editor/Explorer/Explorer";
    import {Tabs, Tab} from "$lib/editor/TabBar/TabBar"
</script>
<div class = "mx-auto h-screen overflow-hidden ">
    
    <div class = "h-screen ">
        <div class = "flex flex-row flex-grow h-full ">
            <nav class="bg-indigo-300 w-20 h-full flex flex-col items-center z-1">
                <a href="#" class ="mt-8">
                    <img
                      src="https://randomuser.me/api/portraits/women/76.jpg"
                      class="rounded-full w-10 h-10 mb-3 mx-auto"
                      on:click={()=>{toggle_mode('file_explorer')}}
                    />
                  </a>

                  <div class="w-8  text-white" on:click={()=>{toggle_mode('file_explorer')}}>
                    <TiFolder />
                  </div>
            </nav>
            {#if second_bar}
                <nav class="bg-gray-200 w-60 h-full divide-y divide-green-500 flex flex-col items-left absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
                    <div class ="ml-4">
                        <h1 class = "title-font font-medium text-black-500 tracking-widest text-2xl mb-3 pt-8 ">Explorer</h1>
                        <Explorer bind:root={project_explorer} on:SelectFile={handle_select_file} />
                    </div>
                </nav> <!-- content here -->
            {/if}
            
            <div class = "flex-col flex-grow">
                <div class=" bg-indigo-300"> a sdasdasdasd asdasdasd</div>
                <TabBar on:TabSelected={handle_select_tab} bind:tabs={tabs} />
                <CodeMirror bind:editor options={options} />
            </div>
            {#if avatar_bar}
                <div transition:slide|local class = "flex flex-col bg-indigo-300 pt-1 p-2 pt-2 overflow-scroll">
                    {#each users as user}
                        <Avatar name={user.name} color={user.color}/>
                    {/each}
                </div>
            {/if}
            
        </div>
        
    </div>
    
</div>
