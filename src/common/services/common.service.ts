import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, QueryFailedError, Entity, DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export abstract class CommonService<Entity> {
  constructor(
    @InjectRepository(Entity)
    protected readonly repository: Repository<Entity>,
  ) { }

  async create(entity: DeepPartial<Entity>): Promise<Entity> {
    try {
      return await this.repository.save(entity);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new BadRequestException('Invalid request body');
      }
      throw error;
    }
  }

  async findAll(): Promise<Entity[]> {
    return await this.repository.find();
  }

  async findOneById(id: number): Promise<Entity> {
    return await this.repository.findOne(id);
  }

  async update(id: number, entity: QueryDeepPartialEntity<Entity>): Promise<Entity> {
    try {
      await this.repository.update(id, entity);
      return await this.repository.findOne(id);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new BadRequestException('Invalid request body');
      }
      throw error;
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await this.repository.delete(id);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new BadRequestException('Invalid request body');
      }
      throw error;
    }
  }
}
