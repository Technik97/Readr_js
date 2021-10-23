import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherOrderByWithRelationInput } from "../../../inputs/PublisherOrderByWithRelationInput";
import { PublisherWhereInput } from "../../../inputs/PublisherWhereInput";
import { PublisherWhereUniqueInput } from "../../../inputs/PublisherWhereUniqueInput";
import { PublisherScalarFieldEnum } from "../../../../enums/PublisherScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyPublisherArgs {
  @TypeGraphQL.Field(_type => PublisherWhereInput, {
    nullable: true
  })
  where?: PublisherWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PublisherOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PublisherOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PublisherWhereUniqueInput, {
    nullable: true
  })
  cursor?: PublisherWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [PublisherScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name"> | undefined;
}
