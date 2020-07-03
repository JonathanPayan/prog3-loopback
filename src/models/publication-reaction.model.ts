import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Reaction} from './reaction.model';
import {User} from './user.model';
import {Publication} from './publication.model';

@model()
export class PublicationReaction extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @belongsTo(() => Reaction)
  reactionId: string;

  @belongsTo(() => User)
  userId: string;

  @belongsTo(() => Publication)
  publicationId: string;

  constructor(data?: Partial<PublicationReaction>) {
    super(data);
  }
}

export interface PublicationReactionRelations {
  // describe navigational properties here
}

export type PublicationReactionWithRelations = PublicationReaction & PublicationReactionRelations;
