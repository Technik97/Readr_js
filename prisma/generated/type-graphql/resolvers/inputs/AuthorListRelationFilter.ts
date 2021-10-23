import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorWhereInput } from "../inputs/AuthorWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorListRelationFilter {
  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true
  })
  every?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true
  })
  some?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(_type => AuthorWhereInput, {
    nullable: true
  })
  none?: AuthorWhereInput | undefined;
}
