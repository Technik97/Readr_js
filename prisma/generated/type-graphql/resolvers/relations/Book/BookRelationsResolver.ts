import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { Book } from "../../../models/Book";
import { Publisher } from "../../../models/Publisher";
import { BookAuthorsArgs } from "./args/BookAuthorsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Author], {
    nullable: false
  })
  async authors(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: BookAuthorsArgs): Promise<Author[]> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).authors(args);
  }

  @TypeGraphQL.FieldResolver(_type => Publisher, {
    nullable: false
  })
  async publisher(@TypeGraphQL.Root() book: Book, @TypeGraphQL.Ctx() ctx: any): Promise<Publisher> {
    return getPrismaFromContext(ctx).book.findUnique({
      where: {
        id: book.id,
      },
    }).publisher({});
  }
}
