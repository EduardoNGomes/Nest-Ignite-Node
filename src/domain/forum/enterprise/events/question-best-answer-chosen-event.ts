import { UniqueEntityID } from '@/core/entities/unique-entity-id'
import { DomainEvent } from '@/core/events/domain-event'
import { Question } from '../entities/question'

export class QuestionBestQuestionChosenEvent implements DomainEvent {
  public ocurredAt: Date
  public question: Question
  public bestAnswerID: UniqueEntityID

  constructor(question: Question, bestAnswerID: UniqueEntityID) {
    this.question = question
    this.bestAnswerID = bestAnswerID

    this.ocurredAt = new Date()
  }

  getAggregateId(): UniqueEntityID {
    return this.question.id
  }
}
