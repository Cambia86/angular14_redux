export class Transaction {
  id?: string;
  name?: string;
  value?: number;
  category?: string;
  type?: string;
  description?: string;
  captureImage?: string;

  constructor(id: string, name: string, value: number, category: string, type: string, description: string, captureImage: string) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.category = category;
    this.type = type;
    this.description = description;
    this.captureImage = captureImage;
  }
}
