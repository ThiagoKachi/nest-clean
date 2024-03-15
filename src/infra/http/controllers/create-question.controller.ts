import { CreateQuestionUseCase } from '@/domain/forum/application/use-cases/create-question'
import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/infra/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/infra/auth/jwt-auth.guard'
import { UserPayload } from 'src/infra/auth/jwt-strategy'
import { z } from 'zod'
import { ZodValidationPipe } from '../pipes/zod-validation-pipe'

const createQuestionBodySchema = z.object({
  title: z.string(),
  content: z.string(),
})

const bodyValidationPipe = new ZodValidationPipe(createQuestionBodySchema)

type CreateQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class CreateQuestionController {
  constructor(private createQuestion: CreateQuestionUseCase) {}

  @Post()
  async handle(
    @Body(bodyValidationPipe) body: CreateQuestionBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { title, content } = body
    const userId = user.sub

    this.createQuestion.execute({
      title,
      content,
      authorId: userId,
      attachmentsIds: [],
    })
  }
}
