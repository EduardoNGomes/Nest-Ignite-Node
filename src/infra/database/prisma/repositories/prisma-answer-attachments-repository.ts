import { AnswerAttachmentsRepository } from '@/domain/forum/application/repositories/answer-attachment-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaAnswerAttachmentMapper } from '../../mappers/prisma-answer-attachment-mapper'

@Injectable()
export class PrismaAnswerAttachmentsRepository
  implements AnswerAttachmentsRepository
{
  constructor(private prisma: PrismaService) {}

  async findManyByAnswerId(answerId: string) {
    const answerAttachments = await this.prisma.attachment.findMany({
      where: {
        answerId,
      },
    })

    return answerAttachments.map((answerAttachment) =>
      PrismaAnswerAttachmentMapper.toDomain(answerAttachment),
    )
  }

  async deleteManyByAnswerId(answerId: string) {
    await this.prisma.attachment.deleteMany({
      where: {
        answerId,
      },
    })
  }
}
