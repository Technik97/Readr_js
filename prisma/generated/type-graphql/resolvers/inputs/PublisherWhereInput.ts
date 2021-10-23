import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookListRelationFilter } from "../inputs/BookListRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PublisherWhereInput {
  @TypeGraphQL.Field(_type => [PublisherWhereInput], {
    nullable: true
  })
  AND?: PublisherWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PublisherWhereInput], {
    nullable: true
  })
  OR?: PublisherWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PublisherWhereInput], {
    nullable: true
  })
  NOT?: PublisherWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => BookListRelationFilter, {
    nullable: true
  })
  books?: BookListRelationFilter | undefined;
}
