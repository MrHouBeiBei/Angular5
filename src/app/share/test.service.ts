import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service';

import { API_TEST } from './constants/api.constants'

@Injectable()
export class TestService {

  constructor(
    private configService: ConfigService
  ) { }

  // test(data?: any) {
  test(data?: any): Promise<any> {
    return this.configService.get(API_TEST, data).then( rt => rt)
  }

  test2(data?: any): Promise<any> {
    return this.configService.post(API_TEST, data).then( rt => rt)
  }

}
