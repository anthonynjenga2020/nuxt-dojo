export default defineEventHandler(async (event) => {
    // //handle query params
    // const query = getQuery(event)

    // //handle post data
    // const { age } = await readBody(event)

    //api call with private key
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_7gr08wdpI5zbZPf88G3o3iweVM5WYd2CdKGj8y8y')
    return data
}) 