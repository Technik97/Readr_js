import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PublisherCreateManyInput } from "../../../inputs/PublisherCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPublisherArgs {
  @TypeGraphQL.Field(_type => [PublisherCreateManyInput], {
    nullable: false
  })
  data!: PublisherCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
