<script lang="ts">
    import type PricingCard from './PricingCard'
    export let card: PricingCard

</script>
<div class="p-4 xl:w-1/4 md:w-1/2 w-full">
    <div class="h-full p-6 rounded-lg border-2 border-gray-300 hover:border-indigo-500 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 flex flex-col relative overflow-hidden">
      <h2 class="text-sm tracking-widest title-font mb-1 font-medium">{card.title}</h2>
      
      <h1 class="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
        <span>{card.getPrice()}</span>
        {#if !card.isFree() }
          <span class="text-lg ml-1 font-normal text-gray-500">/mo</span>
        {/if}
      </h1>
      
      {#each card.features as feature}
        <p class="flex items-center text-gray-600 mb-2">
            <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
            </span>{feature}
        </p>
      {/each}
      <button class="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Button
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-auto" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
</div>