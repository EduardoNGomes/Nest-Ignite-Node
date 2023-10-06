import { Encrypter } from '@/domain/forum/application/criptography/encrypter'

export class FakeEncrypter implements Encrypter {
  async encrypt(payload: Record<string, unknown>) {
    return JSON.stringify(payload)
  }
}
