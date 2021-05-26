<script lang="ts">
import { goto } from "$app/navigation";

</script>

<main class="min-w-full h-screen">
	<body class = "container min-w-full">
		<header class = "flex justify-between pl-8 pr-1 pt-4">
			<div class = "ld-8 text-3xl">Teilen</div>
			<div class ="text-xl">
				<a class ="mr-4">Why Teilen</a>
				<a href="pricing" class ="mr-4">Pricing</a>
				<a class ="mr-4">About</a>
				<button on:click={()=>{goto("login")}} class = "mr-4 border border-indigo-500 p-2 pl-4 pr-4 rounded">LogIn</button>
				<button on:click={()=>{goto("signin")}} class = "text-white bg-indigo-500 mr-4 border  p-2 pl-4 pr-4 rounded">SignIn</button>
			</div>
		</header>
		<div class = "flex">
			<div class="container h-screen w-full">
				<div class=" pt-10 px- p-20">
					<h1 class="text-6xl font-bold text-gray-800">
						Make learning fun
					</h1>
					<h2 class="pt-5 font-normal text-lg tracking-normal text-gray-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit
					
					</h2>
				</div>
				
			</div>
			<div class="container h-screen hidden md:block">
				<div>
				  <img class="w-full" href="https://storyset.com/education" src="../../static/images/svg/Telecommuting-cuate.svg" alt="Kiwi standing on oval">
				  <a href="https://storyset.com/work">Illustration by Freepik Storyset</a>
				</div>
			</div>
		</div>
		
		
	</body>
	
</main>

<style>

</style>
