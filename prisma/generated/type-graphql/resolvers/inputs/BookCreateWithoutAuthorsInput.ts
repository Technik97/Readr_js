import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateNestedOneWithoutBooksInput } from "../inputs/PublisherCreateNestedOneWithoutBooksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookCreateWithoutAuthorsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  isbn?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  language!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  edition!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PublisherCreateNestedOneWithoutBooksInput, {
    nullable: false
  })
  publisher!: PublisherCreateNestedOneWithoutBooksInput;
}
