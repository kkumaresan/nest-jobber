// eslint-disable-next-line @nx/enforce-module-boundaries
import { AbstractModel } from '@jobber/nestjs';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User extends AbstractModel {
  @Field()
  email: string;
}
