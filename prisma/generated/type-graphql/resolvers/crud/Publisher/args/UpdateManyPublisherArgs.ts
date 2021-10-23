import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherUpdateManyMutationInput } from "../../../inputs/PublisherUpdateManyMutationInput";
import { PublisherWhereInput } from "../../../inputs/PublisherWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPublisherArgs {
  @TypeGraphQL.Field(_type => PublisherUpdateManyMutationInput, {
    nullable: false
  })
  data!: PublisherUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PublisherWhereInput, {
    nullable: true
  })
  where?: PublisherWhereInput | undefined;
}
