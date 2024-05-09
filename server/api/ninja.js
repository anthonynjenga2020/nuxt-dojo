export default defineEventHandler(async (event) => {
    //handle query params
    const query = getQuery(event)

    //handle post data
    const { age } = await readBody(event)

    return{
        message: `Hello, ${query.name}! Your are ${age} years old.`
    }
}) 