// advertissement.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advertissement } from './advertissement.entity';
import { AdvertissementDto } from './dto/advertissement.dto';
import { UpdateAdvertissementDto } from './dto/update-advertissement.dto';

@Injectable()
export class AdvertissementService {
constructor(
    @InjectRepository(Advertissement)
    private readonly advertissementRepository: Repository<Advertissement>,
) {}

    async findAdvertissement(id: number): Promise<Advertissement> {
        const advertissement = await this.advertissementRepository.findOne({ where: { id: Number(id) } });

        if (!advertissement) {
            throw new NotFoundException(`Advertissement avec l'ID ${id} non trouvée`);
        }

        return advertissement;
    }

    async findAllAdvertissement(): Promise<Advertissement[]> {
        const advertisements = await this.advertissementRepository
          .createQueryBuilder('advertissement')
          .leftJoinAndSelect('advertissement.company', 'company')
          .getMany();
      
        if (!advertisements || advertisements.length === 0) {
          throw new NotFoundException("Il n'y a pas d'advertissements");
        }
      
        return advertisements;
      }
      
    async putAdvertissement(id: number, update_AdvertissementDto: UpdateAdvertissementDto): Promise<Advertissement>{
        const advert = await this.advertissementRepository.findOne({ where: { id: Number(id) } });
        
        if (!advert) {
          throw new NotFoundException(`L'advertissement avec l'ID ${id} n'a pas été trouvé.`);
        }
        const { title, description, num, localisation, poste, typeContrat, horraires, pay, company, IdList } = update_AdvertissementDto;
        advert.title = title;
        advert.description = description;
        advert.num = num;
        advert.localisation = localisation;
        advert.poste = poste;
        advert.typeContrat = typeContrat;
        advert.horraires = horraires;
        advert.pay = pay;
        advert.company = company;
        if (IdList && IdList.length > 0) {
            if (!advert.IdList) {
                advert.IdList = IdList;
            } else {
                // Vérifier si un identifiant du DTO n'est pas déjà présent dans advert.IdList
                for (const newId of IdList) {
                    if (!advert.IdList.includes(newId)) {
                        advert.IdList.push(newId);
                    }
                }
            }
        }            
        return this.advertissementRepository.save(advert);
    }

    async deleteAdvertissement(id: number): Promise<Advertissement> {
    const deletedAdvertissement = await this.advertissementRepository.findOne({ where: { id: Number(id) } });
    if (deletedAdvertissement) {
        await this.advertissementRepository.remove(deletedAdvertissement);
        return deletedAdvertissement;
    } else {
        throw new NotFoundException(`L'annonce avec l'ID ${id} n'a pas été trouvé.`);
    }    
    }

    async addNewAdvertissement(createAdvertissementDto: AdvertissementDto): Promise<Advertissement>{
        const advert: Advertissement = new Advertissement();
        advert.title = createAdvertissementDto.title;
        advert.description = createAdvertissementDto.description;
        advert.num = createAdvertissementDto.num;
        advert.localisation = createAdvertissementDto.localisation;
        advert.poste = createAdvertissementDto.poste;
        advert.typeContrat = createAdvertissementDto.typeContrat;
        advert.horraires = createAdvertissementDto.horraires;
        advert.pay = createAdvertissementDto.pay;
        advert.company = createAdvertissementDto.company;
        advert.IdList = createAdvertissementDto.IdList;
        return this.advertissementRepository.save(advert);
    }
}
