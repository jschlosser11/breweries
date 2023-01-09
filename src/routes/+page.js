export async function load({ fetch }) {
    const randombrewRes = await fetch(`https://api.openbrewerydb.org/breweries/random?size=3`)
    const randombrews = await randombrewRes.json()
    
    return {
        randombrews: randombrews
    }
}
