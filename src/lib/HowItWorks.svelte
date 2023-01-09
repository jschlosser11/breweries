<script>

    export const brewSteps = [
        {
            step: 1,
            title: 'Milling the grain',
            text: 'Beginning In the brew house, different types of malt are crushed together to break up the grain kernels in order to extract fermentable sugars to produce a milled product called grist.',
            eg: '/img/step1.gif'
        },
        {
            step: 2,
            title: 'Mash Conversion',
            text: 'The grist is then transferred into a mash tun, where it is mixed with heated water in a process called mash conversion. The conversion process uses natural enzymes in the malt to break the malt’s starch down into sugars.',
            eg: '/img/step2.gif'
        },
        {
            step: 3,
            title: 'Lautering',
            text: 'The mash is then pumped into the lauter tun, where a sweet liquid (known as wort) is separated from the grain husks.',
            eg: '/img/step3.gif'
        },
        {
            step: 4,
            title: 'The boil',
            text: 'The wort is then collected in a vessel called a kettle, where it is brought to a controlled boil before the hops are added.',
            eg: '/img/step4.gif'
        },
        {
            step: 5,
            title: ' Wort separation and cooling',
            text: 'After boiling, the wort is transferred into a whirlpool for the wort separation stage. During this stage, any malt or hop particles are removed to leave a liquid that is ready to be cooled and fermented.',
            eg: '/img/step5.gif'
        },
        {
            step: 6,
            title: 'Fermentation',
            text: 'To start the fermentation, yeast is added during the filling of the vessel. Yeast converts the sugary wort into beer by producing alcohol, a wide range of flavors, and carbon dioxide (used later in the process to give the beer its sparkle).',
            eg: '/img/step6.gif'
        },
        {
            step: 7,
            title: 'Maturation',
            text: 'After fermentation, the young “green” beer needs to be matured in order to allow both a full development of flavors and a smooth finish.',
            eg: '/img/step7.gif'
        },
        {
            step: 8,
            title: 'Filtration, carbonation, and cellaring',
            text: 'After reaching its full potential, the beer is filtered, carbonated, and transferred to the bright beer tank, where it goes through a cellaring process that takes 3-4 weeks to complete. Once completed, the beer is ready to be packaged (and that’s a whole other fascinating process explained in the video).',
            eg: '/img/step8.gif'
        },
    ]
    
</script>

<div class="py-16 mx-auto md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20">
    <div>
        <h1 class="text-red-900 uppercase text-4xl mb-16 mt-12 underline flex justify-center">Brewing Proccess</h1>
    </div>
    <div class="grid gap-6 row-gap-10 grid-cols-1">
        {#each brewSteps as steps}
            <div class="lg:py-6 lg:pr-16">
                <div class="flex">
                <div class="flex flex-col items-center lg:mr-4">
                    
                </div>
                <div class="lg:flex block lg:border-2 lg:border-red-900">
                    <div class="lg:w-1/2 lg:p-8 lg:pb-4 pb-6 px-4 ">
                        <p class="mb-2 text-xl font-bold">Step: {steps.step} - <span class="text-red-900">{steps.title}</span></p>
                        <p class="text-gray-700">{steps.text}</p>
                    </div>
                    <div class="md:pt-0  lg:border-none border-b-2 border-red-900 flex justify-center">
                        <img src="{steps.eg}" alt="Step Example">
                    </div>
                </div>
                </div>
            </div>
      {/each}
    </div>
  </div>

