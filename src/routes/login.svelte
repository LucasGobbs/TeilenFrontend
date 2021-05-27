<script lang="ts">
  let checked = false
  function getFormData(event){
    event.preventDefault();
    event.stopPropagation();
    const elements = Array.from(event.currentTarget) as HTMLInputElement[];
    return elements.reduce((acc, el) => {
      if (el.name) {
        acc[el.name] = el.value;
      }
      return acc;
    }, {});
  }
  async function login(e) {
    const data = getFormData(e)
    try{  
      const result = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({
          user: data.username,
          password: data.password
        })
      })
      console.log(await result.json())
    }catch(err){
      console.log(err.message)
    }
    
  }
</script>
<div class="bg-white h-screen overflow-hidden">
  <div class="flex">
    
    <!-- Login Form -->
    <div class="container h-screen w-full p-2 pt-10 align-middle">
      <div class="max-w-md mx-auto  bg-white px-5 py-10 rounded  tracking-widest  align-middle">
        <div class="mb-2 ">
          <h1 class="font-bold text-4xl text-gray-800 font-bold">Olá novamente</h1>
        </div>
        <div class="mb-8 ">
          <h1 class="font-normal text-lg tracking-normal text-gray-700">
            Não tem conta? 
            <a class="text-indigo-500 font-bold" href="signin">
              cadastre-se
            </a>
          </h1>
        </div>
        <form on:submit={login} action="#">
          <div class="mt-5 font-bold text-md text-gray-700 block">
            <label for="username">Email</label>
            <input
              name="username"
              type="text"
              id="username"
              class="block w-full p-2 border  border-gray-500 rounded-full"
            />
          </div>
          <div class="mt-5 font-bold text-md text-gray-700 block">
            <label for="password">Password</label>
            <input
              name="password"
              type="password"
              id="password"
              class="block w-full p-2 border rounded-full border-indigo-800"
            />
          </div>
          <div class="flex justify-between pt-4 ">
            <div class=" items-center flex text-center">
              <input class="align-middle w-4 h-4" type="checkbox" bind:checked={checked}>
              <span class="ml-2 text-gray-600">Lembrar</span>
            </div>
            

            <a class= "text-indigo-500  font-bold">Esqueceu sua senha?</a>
           
          </div>
          <div class="mt-10">
            <input
              type="submit"
              value="Login"
              class="py-3 bg-indigo-500 hover:bg-indigo-600 rounded-full text-white font-bold text-center w-full"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="container h-screen hidden md:block">
      <div>
        <img class="w-full" href="https://storyset.com/education" src="../../images/svg/Teaching-rafiki.svg" alt="Kiwi standing on oval">
        <!-- <a href="https://storyset.com/education">Illustration by Freepik Storyset</a> -->
      </div>
    </div>
  </div>
</div>