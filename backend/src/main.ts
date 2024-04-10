import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import { AppModule } from './app.module'
import * as path from 'path'
import { HttpExceptionFilter } from './utils/exceptions/http-exception.filter'
import { NestExpressApplication } from '@nestjs/platform-express'

const PORT = process.env.HASURA_ACTIONS_PORT ?? 3003

global['fetch'] = require('node-fetch')

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  app.use(cookieParser())
  app.use('/static', express.static(path.join(__dirname, '..', 'static')))
  app.useGlobalFilters(new HttpExceptionFilter())
  app.enableCors()
  await app.listen(PORT)
}
bootstrap()
