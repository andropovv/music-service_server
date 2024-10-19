import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop({ type: { type: Types.ObjectId, ref: 'Track' } })
  track: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
