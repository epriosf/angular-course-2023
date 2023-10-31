import { TestBed } from '@angular/core/testing';
import { DbzService } from './dbz.service';
import { Character } from '../interfaces/characters.interface';

describe('DbzService', () => {
  let service: DbzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a character', ()=>{
    const initialCharacterCount = service.characters.length;
    console.log(initialCharacterCount);
    const newCharacter: Character= {
      id: 'new-id',
      name: 'Piccolo',
      power: 5000,
    };
    service.addCharacter(newCharacter);
    expect(service.characters.length).toBe(initialCharacterCount + 1);
  })

  it('should delete a character by ID', () => {
    const characterToDelete = service.characters[0];
    const initialCharacterCount = service.characters.length;
    service.onDeleteCharacterById(characterToDelete.id);

    expect(service.characters.length).toBe(initialCharacterCount - 1);
    expect(service.characters).not.toContain(characterToDelete);
  });

  it('should not delete a character with a non-existent ID', () => {
    const initialCharacterCount = service.characters.length;
    service.onDeleteCharacterById('non-existent-id');
    expect(service.characters.length).toBe(initialCharacterCount);
  });
});
