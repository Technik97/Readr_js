import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PublisherCreateOrConnectWithoutBooksInput } from "../inputs/PublisherCreateOrConnectWithoutBooksInput";
import { PublisherCreateWithoutBooksInput } from "../inputs/PublisherCreateWithoutBooksInput";
import { PublisherUpdateWithoutBooksInput } from "../inputs/PublisherUpdateWithoutBooksInput";
import { PublisherUpsertWithoutBooksInput } from "../inputs/PublisherUpsertWithoutBooksInput";
import { PublisherWhereUniqueInput } from "../inputs/PublisherWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class PublisherUpdateOneRequiredWithoutBooksInput {
  @TypeGraphQL.Field(_type => PublisherCreateWithoutBooksInput, {
    nullable: true
  })
  create?: PublisherCreateWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => PublisherCreateOrConnectWithoutBooksInput, {
    nullable: true
  })
  connectOrCreate?: PublisherCreateOrConnectWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => PublisherUpsertWithoutBooksInput, {
    nullable: true
  })
  upsert?: PublisherUpsertWithoutBooksInput | undefined;

  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: true
  })
  connect?: PublisherWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PublisherUpdateWithoutBooksInput, {
    nullable: true
  })
  update?: PublisherUpdateWithoutBooksInput | undefined;
}
