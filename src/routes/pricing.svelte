<script lang="ts">
    import PricingCardComponent from '$lib/pricing/PricingCardComponent.svelte'
    import PricingCard from '$lib/pricing/PricingCard'
    const cards = [
        new PricingCard(
            'START',
            [
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas'
            ],
            0,
            'asdasdsadasdas'
        ),
        new PricingCard(
            'PRO',
            [
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas'
            ],
            3800,
            'asdasdsadasdas'
        ),
        new PricingCard(
            'BUSINESS',
            [
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas'
            ],
            5600,
            'asdasdsadasdas'
        ),
        new PricingCard(
            'EDUCATION',
            [
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas',
                'asdasdsadasdas'
            ],
            7200,
            'asdasdsadasdas'
        )
    ]

</script>
<section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Server Pricing</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
        <div class="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
          <button class="py-1 px-4 bg-indigo-500 text-white focus:outline-none">Monthly</button>
          <button class="py-1 px-4 focus:outline-none">Annually</button>
        </div>
      </div>
      <div class="flex flex-wrap -m-4">
            {#each cards as card}
                <PricingCardComponent {card} />
            {/each}
    </div>
  </section>