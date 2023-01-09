<script>
    export let name = '';
    export let city = '';
    export let state = '';
    export let url = '';
    export let type = '';

</script>

<div class="bg-white h-44 shadow-inner shadow-red-700">
    <div class="px-4 pt-8">
      <h1 class="font-bold text-xl mb-2 font-bebas tracking-wider">{name}</h1>
      <p class="text-gray-700 text-base font-bebas"><span>{city}, </span>{state}</p>
      <p class="text-gray-700 text-base font-bebas">Type: {type}</p>
    </div>
  </div>
  <a href={url} class="p-4 bg-red-900 hover:bg-red-700 text-white flex justify-center border-b rounded-b-md font-bebas tracking-widest">
    <span class="items-center">Visit Site</span>
</a>