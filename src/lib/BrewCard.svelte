<script>
    export let name = '';
    export let city = '';
    export let state = '';
    export let url = '';
    export let type = '';

</script>

<div class="rounded shadow-lg bg-white h-44">
    <div class="px-4 pt-8">
      <h1 class="font-bold text-xl mb-2">{name}</h1>
      <p class="text-gray-700 text-base"><span>{city}, </span>{state}</p>
      <p class="text-gray-700 text-base">Type: {type}</p>
    </div>
  </div>
  <a href={url} class="p-4 bg-red-900 hover:bg-red-700 text-white flex justify-center">
    <span class="items-center">Visit Site</span>
</a>