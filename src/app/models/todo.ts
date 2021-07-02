export class Todo {
  int: number;
  name: string;
  content: string;
  phone: string;

  constructor(int: number = 0, name: string = '', content: string = '', phone: string = '') {
    this.int = int;
    this.name = name;
    this.content = content;
    this.phone = phone;
  }
}
