import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateWithoutPublisherInput } from "../inputs/BookCreateWithoutPublisherInput";
import { BookUpdateWithoutPublisherInput } from "../inputs/BookUpdateWithoutPublisherInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpsertWithWhereUniqueWithoutPublisherInput {
  @TypeGraphQL.Field(_type => BookWhereUniqueInput, {
    nullable: false
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field(_type => BookUpdateWithoutPublisherInput, {
    nullable: false
  })
  update!: BookUpdateWithoutPublisherInput;

  @TypeGraphQL.Field(_type => BookCreateWithoutPublisherInput, {
    nullable: false
  })
  create!: BookCreateWithoutPublisherInput;
}
