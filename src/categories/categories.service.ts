import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { Category } from './category.entity';
import { CategoryDto } from './dto/category.dto';

@Injectable()
export class CategoriesService {
    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository
    ){}
    
    async getCategories(): Promise<Category[]> {
        return await this.categoryRepository.getCategories();
    }

    async createCategory(categoryDto: CategoryDto): Promise<Category> {
        return await this.categoryRepository.createCategory(categoryDto);
    }

    async updateCategory(id: number, categoryDto: CategoryDto): Promise<Category> {
        return this.categoryRepository.updateCategory(id, categoryDto);
    }

    async deleteCategory(id: number) {
        const result = await this.categoryRepository.delete({ id });

        if(result.affected === 0) {
            throw new NotFoundException();
        }
    }
}
