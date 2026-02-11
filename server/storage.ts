// No storage needed as all booking data is sent via WhatsApp and not stored.
export interface IStorage {}
export class MemStorage implements IStorage {}
export const storage = new MemStorage();
