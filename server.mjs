import { createServer } from 'node:http'
import { main, logger, FetchRequest, FetchResponse } from 'juphjacs'


const server = createServer({
    IncomingMessage: FetchRequest,
    ServerResponse: FetchResponse
})

await main(server, { })

server.listen(process.env.PORT ?? 3000, () => {
    logger.info(`Server running at http://localhost:${server.address().port}/`)
})
