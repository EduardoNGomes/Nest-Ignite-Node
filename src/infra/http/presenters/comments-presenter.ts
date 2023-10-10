import { Comment } from '@/domain/forum/enterprise/entities/comments'

export class CommentPresenter {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static toHTTP(comment: Comment<any>) {
    return {
      id: comment.id.toString(),
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }
  }
}
