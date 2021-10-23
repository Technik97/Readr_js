import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateOrConnectWithoutBooksInput } from "../inputs/AuthorCreateOrConnectWithoutBooksInput";
import { AuthorCreateWithoutBooksInput } from "../inputs/AuthorCreateWithoutBooksInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorCreateNestedManyWithoutBooksInput {
  @TypeGraphQL.Field(_type => [AuthorCreateWithoutBooksInput], {
    nullable: true
  })
  create?: AuthorCreateWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorCreateOrConnectWithoutBooksInput], {
    nullable: true
  })
  connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereUniqueInput], {
    nullable: true
  })
  connect?: AuthorWhereUniqueInput[] | undefined;
}
