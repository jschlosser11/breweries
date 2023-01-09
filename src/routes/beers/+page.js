export async function load({ fetch }) {
    const beerRes = await fetch(`https://random-data-api.com/api/v2/beers`)
    const beers = await beerRes.json()
    
    return {
        beers: beers
    }
}



