import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherWhereInput } from "../../../inputs/PublisherWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPublisherArgs {
  @TypeGraphQL.Field(_type => PublisherWhereInput, {
    nullable: true
  })
  where?: PublisherWhereInput | undefined;
}
