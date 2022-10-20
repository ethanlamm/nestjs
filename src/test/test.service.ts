import { Injectable } from '@nestjs/common';


@Injectable()
export class TestService {

    getTest() {
        return `This action returns getTest`;
    }

    getCommon() {
        return `This action returns getCommon`;
    }

}
