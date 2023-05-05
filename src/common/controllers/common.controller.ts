import { Body, Delete, Get, Param, ParseIntPipe, Patch, Post, ValidationPipeOptions } from '@nestjs/common';
import { CommonService } from '../services/common.service';

export abstract class CommonController<Entity, Service extends CommonService<any>> {
    constructor(private readonly service: Service,) { }

    @Get()
    async findAll(): Promise<Entity[]> {
        return await this.service.findAll();
    }

    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Entity> {
        return await this.service.findOneById(id);
    }

    @Post()
    async create(@Body() createDto: any): Promise<Entity> {
        return await this.service.create(createDto);
    }

    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() updateDto: any): Promise<Entity> {
        return await this.service.update(id, updateDto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.service.delete(id);
    }
}
