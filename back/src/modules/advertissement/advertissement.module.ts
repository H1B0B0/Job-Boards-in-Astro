// annonce.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advertissement } from './advertissement.entity';
import { AdvertissementController } from './advertissement.controller';
import { AdvertissementService } from './advertissement.service';

@Module({
imports: [TypeOrmModule.forFeature([Advertissement])],
controllers: [AdvertissementController],
providers: [AdvertissementService],
})
export class AdvertissementModule {}
