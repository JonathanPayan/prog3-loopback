import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Chat,
  User,
} from '../models';
import {ChatRepository} from '../repositories';

export class ChatUserController {
  constructor(
    @repository(ChatRepository)
    public chatRepository: ChatRepository,
  ) { }

  @get('/chats/{id}/user', {
    responses: {
      '200': {
        description: 'User belonging to Chat',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(User)},
          },
        },
      },
    },
  })
  async getUser(
    @param.path.string('id') id: typeof Chat.prototype.id,
  ): Promise<User> {
    return this.chatRepository.user(id);
  }
}
