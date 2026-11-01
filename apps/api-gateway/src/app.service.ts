import { Injectable } from '@nestjs/common';
import { SERVICES_PORTS } from '../../../libs/common/src';

@Injectable()
export class AppService {
  getHello(): string {
    return `API Gateway is running on PORT ${SERVICES_PORTS.API_GATEWAY}`
  }
}
