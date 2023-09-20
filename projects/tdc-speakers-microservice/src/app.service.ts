import { Injectable } from '@nestjs/common';
import { Speaker } from './app.domain';

@Injectable()
export class AppService {
  getHello(): Array<Speaker> {
    const speakers: Array<Speaker> = [
      {
        idSpeaker: 1,
        name: 'William Grasel',
      },
      {
        idSpeaker: 2,
        name: 'Kirmayr Costa',
      },
      {
        idSpeaker: 3,
        name: 'Jessica Felix',
      },
      {
        idSpeaker: 4,
        name: 'Manuel Antunes',
      },
      {
        idSpeaker: 5,
        name: 'Agnaldo Costa De almeida',
      },
      {
        idSpeaker: 6,
        name: 'Eduardo Rodrigues',
      },
      {
        idSpeaker: 7,
        name: 'Cláudio Filipe Lima Rapôso',
      },
    ];
    return speakers;
  }
}
