import { QuestionAttachmentsRepository } from '@/domain/forum/application/repositories/question-attachment-repository'
import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { PrismaQuestionAttachmentMapper } from '../../mappers/prisma-question-attachment-mapper'

@Injectable()
export class PrismaQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  constructor(private prisma: PrismaService) {}

  async findManyByAnswerId(questionId: string) {
    const questionAttachments = await this.prisma.attachment.findMany({
      where: {
        questionId,
      },
    })

    return questionAttachments.map((questionAttachment) =>
      PrismaQuestionAttachmentMapper.toDomain(questionAttachment),
    )
  }

  async deleteManyByQuestionId(questionId: string) {
    await this.prisma.attachment.deleteMany({
      where: {
        questionId,
      },
    })
  }
}
