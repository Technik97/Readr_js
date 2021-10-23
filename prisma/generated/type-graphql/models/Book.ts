import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Author } from "../models/Author";
import { Publisher } from "../models/Publisher";
import { BookCount } from "../resolvers/outputs/BookCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Book {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isbn?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  language!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  edition!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  authors?: Author[];

  publisher?: Publisher;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  publisherId!: number;

  @TypeGraphQL.Field(_type => BookCount, {
    nullable: true
  })
  _count?: BookCount | null;
}
