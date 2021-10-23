import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorScalarWhereInput {
  @TypeGraphQL.Field(_type => [AuthorScalarWhereInput], {
    nullable: true
  })
  AND?: AuthorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorScalarWhereInput], {
    nullable: true
  })
  OR?: AuthorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorScalarWhereInput], {
    nullable: true
  })
  NOT?: AuthorScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  bio?: StringFilter | undefined;
}
