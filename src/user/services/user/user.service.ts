import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/services/common.service';

@Injectable()
export class UserService extends CommonService<User> {
  constructor(
    @InjectRepository(User)
    protected readonly repository: Repository<User>
  ) {
    super(repository);
  }
}
