<script>
	import '../app.css';

	let navlinks = [
		{
			'name': 'Home',
			'link': '/',
			'path': 'M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
		},
		{
			'name': 'About',
			'link': '/about',
			'path': 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
		},
		{
			'name': 'Breweries',
			'link': '/breweries',
			'path': 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5'
		},
		{
			'name': 'Beers',
			'link': '/beers',
			'path': 'M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
		}
	]
	let opened = false

	const openMenu = () => {
		opened = true
	}
	const closeMenu = () => {
		opened = false
	}
</script>

<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  
  <div class={`relative z-40 md:hidden transition-opacity ease-linear duration-300 ${opened ? 'opacity-100' : 'opacity-0'}`} role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
	
    <div class={`fixed inset-0 bg-red-900 bg-opacity-75 transition ease-in-out duration-400 transform ${opened ? 'translate-x-0' : '-translate-x-full'}`}></div>

    <div class={`fixed inset-0 z-40 flex transition ease-in-out duration-300 transform ${opened ? 'translate-x-0' : '-translate-x-full'}`}>
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class={`relative flex w-full max-w-xs flex-1 flex-col bg-red-900 ease-in-out duration-300 ${opened ? 'opacity-100' : 'opacity-0'}`}>
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class={`absolute top-0 right-0 pt-2`}>
          <button type="button" on:click={() => closeMenu()} class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Close sidebar</span>
            <!-- Heroicon name: outline/x-mark -->
            <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
		
        <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
          <div class="flex flex-shrink-0 items-center px-4">
          	<h2 class="text-2xl text-white font-bebas tracking-wider ">Welcome!</h2>
          </div>
          <nav class="mt-5 space-y-1 px-2">
			{#each navlinks as links}
				<a href={links.link} class="text-white hover:bg-red-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md font-bebas tracking-wider">
				<svg class="text-white mr-4 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" d={links.path} />
				</svg>
				{links.name}
				</a>
			{/each}
          </nav>
        </div>
		
      </div>
      <div class="w-14 flex-shrink-0">
        <!-- Force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>
  

  <!-- Static sidebar for desktop -->
  <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
    <!-- Sidebar component, swap this element with another sidebar if you like -->
    <div class="flex min-h-0 flex-1 flex-col bg-red-900">
      <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div class="flex flex-shrink-0 items-center px-4">
          <h2 class="text-2xl text-white font-bebas tracking-wider">Welcome!</h2>
        </div>
        <nav class="mt-5 flex-1 space-y-1 px-2">
          {#each navlinks as links}
			<a href={links.link} class="text-white hover:bg-red-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md font-bebas tracking-wider">
				<svg class="white mr-3 flex-shrink-0 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d={links.path} />
				</svg>
				{links.name}
			</a>
		  {/each}
        </nav>
      </div>
    </div>
  </div>
  
  <div class="flex flex-1 flex-col md:pl-64">
    <div class="sticky top-0 z-10 bg-red-700 pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
      <button type="button" on:click={() => openMenu()} class={`-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-white hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white`}>
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: outline/bars-3 -->
        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <main class="flex-1">
      <div class="">
        <div class="mx-auto max-w-7xl bg-cream">
          <slot />
          <!-- /End replace -->
        </div>
      </div>
    </main>
  </div>
</div>