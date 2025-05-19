export class EntityAPI<T extends { id: string }> {
  protected items: T[] = [];

  async create(item: T): Promise<T> {
    this.items.push(item);

    return item;
  }

  async getAll(): Promise<T[]> {
    return this.items;
  }

  async getById(id: string): Promise<T | undefined> {
    return this.items.find(i => i.id === id);
  }

  async update(id: string, updates: Partial<T>): Promise<T | undefined> {
    const index = this.items.findIndex(i => i.id === id);
    if (index === -1) return undefined;

    this.items[index] = { ...this.items[index], ...updates };

    return this.items[index];
  }

  async delete(id: string): Promise<boolean> {
    const initialLength = this.items.length;
    this.items = this.items.filter(i => i.id !== id);

    return this.items.length < initialLength;
  }
}
