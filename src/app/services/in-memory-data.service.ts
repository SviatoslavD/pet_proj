import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Hulk' },
      { id: 12, name: 'Captain America' },
      { id: 13, name: 'Ironman' },
      { id: 14, name: 'Superman' }
    ];
    return {heroes};
  }
}