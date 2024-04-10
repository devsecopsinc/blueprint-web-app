import { Module } from '@nestjs/common'
import { CommandModule } from 'nestjs-command'
import { ConfigModule } from '@nestjs/config'

// Controllers
import { AppController } from './app.controller'
// Modules
import { AppService } from './app.service'

@Module({
  imports: [
    CommandModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ]
})
export class AppModule {}
