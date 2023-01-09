// @ts-ignore
export async function load({ fetch }) {
    const brewRes = await fetch(`https://api.openbrewerydb.org/breweries/random?size=50`)
    const brews = await brewRes.json()

    const byStateRes = await fetch(`https://api.openbrewerydb.org/breweries/by_state={state}`)
    const filterByState = await byStateRes.json()
    
    return {
        brews: brews,
        filterByState: filterByState

    }
}