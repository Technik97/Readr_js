import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorListRelationFilter } from "../inputs/AuthorListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PublisherRelationFilter } from "../inputs/PublisherRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookWhereInput {
  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  AND?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  OR?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereInput], {
    nullable: true
  })
  NOT?: BookWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  title?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  isbn?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  language?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  edition?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => AuthorListRelationFilter, {
    nullable: true
  })
  authors?: AuthorListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PublisherRelationFilter, {
    nullable: true
  })
  publisher?: PublisherRelationFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  publisherId?: IntFilter | undefined;
}
