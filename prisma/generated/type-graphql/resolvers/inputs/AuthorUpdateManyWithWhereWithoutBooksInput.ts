import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorScalarWhereInput } from "../inputs/AuthorScalarWhereInput";
import { AuthorUpdateManyMutationInput } from "../inputs/AuthorUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorUpdateManyWithWhereWithoutBooksInput {
  @TypeGraphQL.Field(_type => AuthorScalarWhereInput, {
    nullable: false
  })
  where!: AuthorScalarWhereInput;

  @TypeGraphQL.Field(_type => AuthorUpdateManyMutationInput, {
    nullable: false
  })
  data!: AuthorUpdateManyMutationInput;
}
