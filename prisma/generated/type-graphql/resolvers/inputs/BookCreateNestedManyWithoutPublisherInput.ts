import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateManyPublisherInputEnvelope } from "../inputs/BookCreateManyPublisherInputEnvelope";
import { BookCreateOrConnectWithoutPublisherInput } from "../inputs/BookCreateOrConnectWithoutPublisherInput";
import { BookCreateWithoutPublisherInput } from "../inputs/BookCreateWithoutPublisherInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookCreateNestedManyWithoutPublisherInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutPublisherInput], {
    nullable: true
  })
  create?: BookCreateWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutPublisherInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyPublisherInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyPublisherInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;
}
