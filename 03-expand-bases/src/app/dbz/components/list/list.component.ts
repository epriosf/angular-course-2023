import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import {v4 as uuid} from 'uuid';
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent {
  @Input()
  public characterList: Character[]=[{
    id: uuid(),
      name: 'Trunks',
      power: 10
    }]
    @Output()
    public onDeleteId: EventEmitter<string> = new EventEmitter();

    onDeleteCharacter(id: string):void{
      this.onDeleteId.emit(id);
    }
}
