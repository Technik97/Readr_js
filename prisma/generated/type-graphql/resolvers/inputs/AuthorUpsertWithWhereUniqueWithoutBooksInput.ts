import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateWithoutBooksInput } from "../inputs/AuthorCreateWithoutBooksInput";
import { AuthorUpdateWithoutBooksInput } from "../inputs/AuthorUpdateWithoutBooksInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorUpsertWithWhereUniqueWithoutBooksInput {
  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorUpdateWithoutBooksInput, {
    nullable: false
  })
  update!: AuthorUpdateWithoutBooksInput;

  @TypeGraphQL.Field(_type => AuthorCreateWithoutBooksInput, {
    nullable: false
  })
  create!: AuthorCreateWithoutBooksInput;
}
