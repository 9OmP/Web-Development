import { Hono } from 'hono'
import { prettyJSON } from 'hono/pretty-json'

const app = new Hono()

app.use(prettyJSON())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/post', async (c)=> {
  const body = await c.req.json()
  const params = c.req.query('param')
  console.log(`Message: ${body.message}`)
  console.log(`Param: ${params}`)
  return c.json({ 
    msg: 'Hello I got your request',
    param: params,
    body: body.message
  })
})

export default app  
