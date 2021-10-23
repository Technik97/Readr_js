import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Book } from "../models/Book";
import { AuthorCount } from "../resolvers/outputs/AuthorCount";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Author {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bio!: string;

  books?: Book[];

  @TypeGraphQL.Field(_type => AuthorCount, {
    nullable: true
  })
  _count?: AuthorCount | null;
}
