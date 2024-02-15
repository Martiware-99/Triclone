import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrl: './add-group.component.scss'
})
export class AddGroupComponent {
  @Output() groupSaved: EventEmitter<any> = new EventEmitter<any>();

  groupName: string = '';
  imageUrl: string = '';
  members: any[] = [{ name: '', email: '' }];

  addMember() {
    this.members.push({ name: '', email: '' });
  }

  removeMember(index: number) {
    this.members.splice(index, 1);
  }

  saveGroup() {
    const groupData = {
      name: this.groupName,
      imageUrl: this.imageUrl,
      members: this.members,
    };
    this.groupSaved.emit(groupData);
  }
}
