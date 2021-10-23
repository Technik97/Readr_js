import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AuthorCreateOrConnectWithoutBooksInput } from "../inputs/AuthorCreateOrConnectWithoutBooksInput";
import { AuthorCreateWithoutBooksInput } from "../inputs/AuthorCreateWithoutBooksInput";
import { AuthorScalarWhereInput } from "../inputs/AuthorScalarWhereInput";
import { AuthorUpdateManyWithWhereWithoutBooksInput } from "../inputs/AuthorUpdateManyWithWhereWithoutBooksInput";
import { AuthorUpdateWithWhereUniqueWithoutBooksInput } from "../inputs/AuthorUpdateWithWhereUniqueWithoutBooksInput";
import { AuthorUpsertWithWhereUniqueWithoutBooksInput } from "../inputs/AuthorUpsertWithWhereUniqueWithoutBooksInput";
import { AuthorWhereUniqueInput } from "../inputs/AuthorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class AuthorUpdateManyWithoutBooksInput {
  @TypeGraphQL.Field(_type => [AuthorCreateWithoutBooksInput], {
    nullable: true
  })
  create?: AuthorCreateWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorCreateOrConnectWithoutBooksInput], {
    nullable: true
  })
  connectOrCreate?: AuthorCreateOrConnectWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorUpsertWithWhereUniqueWithoutBooksInput], {
    nullable: true
  })
  upsert?: AuthorUpsertWithWhereUniqueWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereUniqueInput], {
    nullable: true
  })
  connect?: AuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereUniqueInput], {
    nullable: true
  })
  set?: AuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorWhereUniqueInput], {
    nullable: true
  })
  delete?: AuthorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorUpdateWithWhereUniqueWithoutBooksInput], {
    nullable: true
  })
  update?: AuthorUpdateWithWhereUniqueWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorUpdateManyWithWhereWithoutBooksInput], {
    nullable: true
  })
  updateMany?: AuthorUpdateManyWithWhereWithoutBooksInput[] | undefined;

  @TypeGraphQL.Field(_type => [AuthorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AuthorScalarWhereInput[] | undefined;
}
