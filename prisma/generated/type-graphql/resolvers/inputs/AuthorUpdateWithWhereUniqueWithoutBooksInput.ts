import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorUpdateWithoutBooksInput } from "../inputs/AuthorUpdateWithoutBooksInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorUpdateWithWhereUniqueWithoutBooksInput {
  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorUpdateWithoutBooksInput, {
    nullable: false
  })
  data!: AuthorUpdateWithoutBooksInput;
}
