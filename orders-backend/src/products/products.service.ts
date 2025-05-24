import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductsService {

  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>
  ) {}

  create(createProductDto: CreateProductDto) {
    const product = this.productRepository.create(createProductDto);
    return this.productRepository.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    let product = await this.productRepository.findOneBy({ id });
    return null;
    // product = {
    //   id: product?.id || 0,
    //   ...updateProductDto
    // };

    // return this.productRepository.save(product);
  }

  async remove(id: number) {
    const product = await this.productRepository.findOneBy({ id });
    if (product) {
      return this.productRepository.remove(product);
    }
  }
}
