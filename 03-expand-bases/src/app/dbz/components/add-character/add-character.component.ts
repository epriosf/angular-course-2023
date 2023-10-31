import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: []
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character={
    id: uuid(),
    name:'ABC',
    power: 0
  };
  emitCharacter():void{
    if(this.character.name.length ===0) return;

    this.onNewCharacter.emit(this.character)
    this.character = {id: uuid(),name:'', power:0};
  }
}
