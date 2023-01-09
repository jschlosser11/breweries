<script>
	// @ts-ignore
	import Hero from "$lib/Hero.svelte";
	// @ts-ignore
	import HowItWorks from "$lib/HowItWorks.svelte";
	import BrewCard from "$lib/BrewCard.svelte";

    export let data;
    const { randombrews } = data;

    console.log({randombrews})
</script>

<div>
    <Hero />
    <div class="p-12">
        <div class="flex justify-center">
            <h1 class="text-red-900 uppercase text-6xl mb-16 mt-12 text-center font-bebas tracking-wide">Check out these breweries</h1>
        </div>
        <ul class="grid md:grid-cols-3 gid-cols-1 gap-2 text-center ">
            {#each randombrews as randombrew }
                <div class="col-span-1 mb-6 p-4">
                    <BrewCard 
                        name={randombrew.name} 
                        city={randombrew.city} 
                        state={randombrew.state}
                        url={randombrew.website_url}
                        type={randombrew.brewery_type}
                    />
                </div>
            {/each}
        </ul>
       <a href="/breweries" class=" flex justify-center mt-12">
        <button class="rounded-md text-white text-2xl py-2 px-8 bg-red-900 hover:bg-red-700 font-bebas">
            View More
        </button>
        </a> 
    </div>
    <div class="bg-white">
        <HowItWorks />
    </div>
</div>


