export class Transaction {
  id?: string;
  name?: string;
  value?: number;
  category?: string;
  type?: string;
  description?: string;

  constructor(id: string, name: string, value: number, category: string, type: string, description: string) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.category = category;
    this.type = type;
    this.description = description;
  }
}
