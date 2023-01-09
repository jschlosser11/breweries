<script>
	import BrewCard from "$lib/BrewCard.svelte";
	import Hero from "$lib/Hero.svelte";
    export let data;
    const { brews } = data;

</script>
<Hero />
<div class="p-12">
    <div class="flex justify-center">
        <h1 class="text-red-900 font-bebas tracking-wide uppercase text-5xl mb-16 mt-12 text-center">Check out these breweries</h1>
    </div>
<ul class="grid md:grid-cols-3 gid-cols-1 gap-2 text-center">
    {#each brews as brew }
        <div class="col-span-1 mb-6 p-4">
            <BrewCard 
                name={brew.name} 
                city={brew.city} 
                state={brew.state}
                url={brew.website_url}
                type={brew.brewery_type}
            />
        </div>
    {/each}
</ul>
</div>