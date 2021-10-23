import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateWithoutBooksInput } from "../inputs/AuthorCreateWithoutBooksInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorCreateOrConnectWithoutBooksInput {
  @TypeGraphQL.Field(_type => AuthorWhereUniqueInput, {
    nullable: false
  })
  where!: AuthorWhereUniqueInput;

  @TypeGraphQL.Field(_type => AuthorCreateWithoutBooksInput, {
    nullable: false
  })
  create!: AuthorCreateWithoutBooksInput;
}
