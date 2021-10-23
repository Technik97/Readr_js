import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BookCreateManyPublisherInputEnvelope } from "../inputs/BookCreateManyPublisherInputEnvelope";
import { BookCreateOrConnectWithoutPublisherInput } from "../inputs/BookCreateOrConnectWithoutPublisherInput";
import { BookCreateWithoutPublisherInput } from "../inputs/BookCreateWithoutPublisherInput";
import { BookScalarWhereInput } from "../inputs/BookScalarWhereInput";
import { BookUpdateManyWithWhereWithoutPublisherInput } from "../inputs/BookUpdateManyWithWhereWithoutPublisherInput";
import { BookUpdateWithWhereUniqueWithoutPublisherInput } from "../inputs/BookUpdateWithWhereUniqueWithoutPublisherInput";
import { BookUpsertWithWhereUniqueWithoutPublisherInput } from "../inputs/BookUpsertWithWhereUniqueWithoutPublisherInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class BookUpdateManyWithoutPublisherInput {
  @TypeGraphQL.Field(_type => [BookCreateWithoutPublisherInput], {
    nullable: true
  })
  create?: BookCreateWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookCreateOrConnectWithoutPublisherInput], {
    nullable: true
  })
  connectOrCreate?: BookCreateOrConnectWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpsertWithWhereUniqueWithoutPublisherInput], {
    nullable: true
  })
  upsert?: BookUpsertWithWhereUniqueWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => BookCreateManyPublisherInputEnvelope, {
    nullable: true
  })
  createMany?: BookCreateManyPublisherInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  connect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  set?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  disconnect?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookWhereUniqueInput], {
    nullable: true
  })
  delete?: BookWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateWithWhereUniqueWithoutPublisherInput], {
    nullable: true
  })
  update?: BookUpdateWithWhereUniqueWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookUpdateManyWithWhereWithoutPublisherInput], {
    nullable: true
  })
  updateMany?: BookUpdateManyWithWhereWithoutPublisherInput[] | undefined;

  @TypeGraphQL.Field(_type => [BookScalarWhereInput], {
    nullable: true
  })
  deleteMany?: BookScalarWhereInput[] | undefined;
}
