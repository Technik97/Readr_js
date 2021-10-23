import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateManyPublisherInput } from "../inputs/BookCreateManyPublisherInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookCreateManyPublisherInputEnvelope {
  @TypeGraphQL.Field(_type => [BookCreateManyPublisherInput], {
    nullable: false
  })
  data!: BookCreateManyPublisherInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
