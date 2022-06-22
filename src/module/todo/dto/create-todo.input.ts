import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateTodoInput {
  @Field(() => String, { description: 'タイトル', nullable: false })
  @IsNotEmpty()
  title!: string;

  @Field(() => String, { description: '説明', nullable: true })
  description?: string;
}
