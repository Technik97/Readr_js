import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

const crudResolversMap = {
  Book: crudResolvers.BookCrudResolver,
  Author: crudResolvers.AuthorCrudResolver,
  Publisher: crudResolvers.PublisherCrudResolver
};
const actionResolversMap = {
  Book: {
    book: actionResolvers.FindUniqueBookResolver,
    findFirstBook: actionResolvers.FindFirstBookResolver,
    books: actionResolvers.FindManyBookResolver,
    createBook: actionResolvers.CreateBookResolver,
    createManyBook: actionResolvers.CreateManyBookResolver,
    deleteBook: actionResolvers.DeleteBookResolver,
    updateBook: actionResolvers.UpdateBookResolver,
    deleteManyBook: actionResolvers.DeleteManyBookResolver,
    updateManyBook: actionResolvers.UpdateManyBookResolver,
    upsertBook: actionResolvers.UpsertBookResolver,
    aggregateBook: actionResolvers.AggregateBookResolver,
    groupByBook: actionResolvers.GroupByBookResolver
  },
  Author: {
    author: actionResolvers.FindUniqueAuthorResolver,
    findFirstAuthor: actionResolvers.FindFirstAuthorResolver,
    authors: actionResolvers.FindManyAuthorResolver,
    createAuthor: actionResolvers.CreateAuthorResolver,
    createManyAuthor: actionResolvers.CreateManyAuthorResolver,
    deleteAuthor: actionResolvers.DeleteAuthorResolver,
    updateAuthor: actionResolvers.UpdateAuthorResolver,
    deleteManyAuthor: actionResolvers.DeleteManyAuthorResolver,
    updateManyAuthor: actionResolvers.UpdateManyAuthorResolver,
    upsertAuthor: actionResolvers.UpsertAuthorResolver,
    aggregateAuthor: actionResolvers.AggregateAuthorResolver,
    groupByAuthor: actionResolvers.GroupByAuthorResolver
  },
  Publisher: {
    publisher: actionResolvers.FindUniquePublisherResolver,
    findFirstPublisher: actionResolvers.FindFirstPublisherResolver,
    publishers: actionResolvers.FindManyPublisherResolver,
    createPublisher: actionResolvers.CreatePublisherResolver,
    createManyPublisher: actionResolvers.CreateManyPublisherResolver,
    deletePublisher: actionResolvers.DeletePublisherResolver,
    updatePublisher: actionResolvers.UpdatePublisherResolver,
    deleteManyPublisher: actionResolvers.DeleteManyPublisherResolver,
    updateManyPublisher: actionResolvers.UpdateManyPublisherResolver,
    upsertPublisher: actionResolvers.UpsertPublisherResolver,
    aggregatePublisher: actionResolvers.AggregatePublisherResolver,
    groupByPublisher: actionResolvers.GroupByPublisherResolver
  }
};
const crudResolversInfo = {
  Book: ["book", "findFirstBook", "books", "createBook", "createManyBook", "deleteBook", "updateBook", "deleteManyBook", "updateManyBook", "upsertBook", "aggregateBook", "groupByBook"],
  Author: ["author", "findFirstAuthor", "authors", "createAuthor", "createManyAuthor", "deleteAuthor", "updateAuthor", "deleteManyAuthor", "updateManyAuthor", "upsertAuthor", "aggregateAuthor", "groupByAuthor"],
  Publisher: ["publisher", "findFirstPublisher", "publishers", "createPublisher", "createManyPublisher", "deletePublisher", "updatePublisher", "deleteManyPublisher", "updateManyPublisher", "upsertPublisher", "aggregatePublisher", "groupByPublisher"]
};
const argsInfo = {
  FindUniqueBookArgs: ["where"],
  FindFirstBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyBookArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateBookArgs: ["data"],
  CreateManyBookArgs: ["data", "skipDuplicates"],
  DeleteBookArgs: ["where"],
  UpdateBookArgs: ["data", "where"],
  DeleteManyBookArgs: ["where"],
  UpdateManyBookArgs: ["data", "where"],
  UpsertBookArgs: ["where", "create", "update"],
  AggregateBookArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByBookArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueAuthorArgs: ["where"],
  FindFirstAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAuthorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateAuthorArgs: ["data"],
  CreateManyAuthorArgs: ["data", "skipDuplicates"],
  DeleteAuthorArgs: ["where"],
  UpdateAuthorArgs: ["data", "where"],
  DeleteManyAuthorArgs: ["where"],
  UpdateManyAuthorArgs: ["data", "where"],
  UpsertAuthorArgs: ["where", "create", "update"],
  AggregateAuthorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByAuthorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePublisherArgs: ["where"],
  FindFirstPublisherArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPublisherArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePublisherArgs: ["data"],
  CreateManyPublisherArgs: ["data", "skipDuplicates"],
  DeletePublisherArgs: ["where"],
  UpdatePublisherArgs: ["data", "where"],
  DeleteManyPublisherArgs: ["where"],
  UpdateManyPublisherArgs: ["data", "where"],
  UpsertPublisherArgs: ["where", "create", "update"],
  AggregatePublisherArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPublisherArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Book: relationResolvers.BookRelationsResolver,
  Author: relationResolvers.AuthorRelationsResolver,
  Publisher: relationResolvers.PublisherRelationsResolver
};
const relationResolversInfo = {
  Book: ["authors", "publisher"],
  Author: ["books"],
  Publisher: ["books"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

const modelsInfo = {
  Book: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  Author: ["id", "name", "bio"],
  Publisher: ["id", "name"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateBook: ["_count", "_avg", "_sum", "_min", "_max"],
  BookGroupBy: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAuthor: ["_count", "_avg", "_sum", "_min", "_max"],
  AuthorGroupBy: ["id", "name", "bio", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePublisher: ["_count", "_avg", "_sum", "_min", "_max"],
  PublisherGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  BookCount: ["authors"],
  BookCountAggregate: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId", "_all"],
  BookAvgAggregate: ["id", "publisherId"],
  BookSumAggregate: ["id", "publisherId"],
  BookMinAggregate: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  BookMaxAggregate: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  AuthorCount: ["books"],
  AuthorCountAggregate: ["id", "name", "bio", "_all"],
  AuthorAvgAggregate: ["id"],
  AuthorSumAggregate: ["id"],
  AuthorMinAggregate: ["id", "name", "bio"],
  AuthorMaxAggregate: ["id", "name", "bio"],
  PublisherCount: ["books"],
  PublisherCountAggregate: ["id", "name", "_all"],
  PublisherAvgAggregate: ["id"],
  PublisherSumAggregate: ["id"],
  PublisherMinAggregate: ["id", "name"],
  PublisherMaxAggregate: ["id", "name"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  BookWhereInput: ["AND", "OR", "NOT", "id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "authors", "publisher", "publisherId"],
  BookOrderByWithRelationInput: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "authors", "publisher", "publisherId"],
  BookWhereUniqueInput: ["id", "isbn"],
  BookOrderByWithAggregationInput: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId", "_count", "_avg", "_max", "_min", "_sum"],
  BookScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  AuthorWhereInput: ["AND", "OR", "NOT", "id", "name", "bio", "books"],
  AuthorOrderByWithRelationInput: ["id", "name", "bio", "books"],
  AuthorWhereUniqueInput: ["id"],
  AuthorOrderByWithAggregationInput: ["id", "name", "bio", "_count", "_avg", "_max", "_min", "_sum"],
  AuthorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "bio"],
  PublisherWhereInput: ["AND", "OR", "NOT", "id", "name", "books"],
  PublisherOrderByWithRelationInput: ["id", "name", "books"],
  PublisherWhereUniqueInput: ["id"],
  PublisherOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  PublisherScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  BookCreateInput: ["title", "isbn", "language", "edition", "createdAt", "updatedAt", "authors", "publisher"],
  BookUpdateInput: ["title", "isbn", "language", "edition", "createdAt", "updatedAt", "authors", "publisher"],
  BookCreateManyInput: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  BookUpdateManyMutationInput: ["title", "isbn", "language", "edition", "createdAt", "updatedAt"],
  AuthorCreateInput: ["name", "bio", "books"],
  AuthorUpdateInput: ["name", "bio", "books"],
  AuthorCreateManyInput: ["id", "name", "bio"],
  AuthorUpdateManyMutationInput: ["name", "bio"],
  PublisherCreateInput: ["name", "books"],
  PublisherUpdateInput: ["name", "books"],
  PublisherCreateManyInput: ["id", "name"],
  PublisherUpdateManyMutationInput: ["name"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AuthorListRelationFilter: ["every", "some", "none"],
  PublisherRelationFilter: ["is", "isNot"],
  AuthorOrderByRelationAggregateInput: ["_count"],
  BookCountOrderByAggregateInput: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  BookAvgOrderByAggregateInput: ["id", "publisherId"],
  BookMaxOrderByAggregateInput: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  BookMinOrderByAggregateInput: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  BookSumOrderByAggregateInput: ["id", "publisherId"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BookListRelationFilter: ["every", "some", "none"],
  BookOrderByRelationAggregateInput: ["_count"],
  AuthorCountOrderByAggregateInput: ["id", "name", "bio"],
  AuthorAvgOrderByAggregateInput: ["id"],
  AuthorMaxOrderByAggregateInput: ["id", "name", "bio"],
  AuthorMinOrderByAggregateInput: ["id", "name", "bio"],
  AuthorSumOrderByAggregateInput: ["id"],
  PublisherCountOrderByAggregateInput: ["id", "name"],
  PublisherAvgOrderByAggregateInput: ["id"],
  PublisherMaxOrderByAggregateInput: ["id", "name"],
  PublisherMinOrderByAggregateInput: ["id", "name"],
  PublisherSumOrderByAggregateInput: ["id"],
  AuthorCreateNestedManyWithoutBooksInput: ["create", "connectOrCreate", "connect"],
  PublisherCreateNestedOneWithoutBooksInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  AuthorUpdateManyWithoutBooksInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PublisherUpdateOneRequiredWithoutBooksInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  BookCreateNestedManyWithoutAuthorsInput: ["create", "connectOrCreate", "connect"],
  BookUpdateManyWithoutAuthorsInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  BookCreateNestedManyWithoutPublisherInput: ["create", "connectOrCreate", "createMany", "connect"],
  BookUpdateManyWithoutPublisherInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  AuthorCreateWithoutBooksInput: ["name", "bio"],
  AuthorCreateOrConnectWithoutBooksInput: ["where", "create"],
  PublisherCreateWithoutBooksInput: ["name"],
  PublisherCreateOrConnectWithoutBooksInput: ["where", "create"],
  AuthorUpsertWithWhereUniqueWithoutBooksInput: ["where", "update", "create"],
  AuthorUpdateWithWhereUniqueWithoutBooksInput: ["where", "data"],
  AuthorUpdateManyWithWhereWithoutBooksInput: ["where", "data"],
  AuthorScalarWhereInput: ["AND", "OR", "NOT", "id", "name", "bio"],
  PublisherUpsertWithoutBooksInput: ["update", "create"],
  PublisherUpdateWithoutBooksInput: ["name"],
  BookCreateWithoutAuthorsInput: ["title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisher"],
  BookCreateOrConnectWithoutAuthorsInput: ["where", "create"],
  BookUpsertWithWhereUniqueWithoutAuthorsInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutAuthorsInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutAuthorsInput: ["where", "data"],
  BookScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisherId"],
  BookCreateWithoutPublisherInput: ["title", "isbn", "language", "edition", "createdAt", "updatedAt", "authors"],
  BookCreateOrConnectWithoutPublisherInput: ["where", "create"],
  BookCreateManyPublisherInputEnvelope: ["data", "skipDuplicates"],
  BookUpsertWithWhereUniqueWithoutPublisherInput: ["where", "update", "create"],
  BookUpdateWithWhereUniqueWithoutPublisherInput: ["where", "data"],
  BookUpdateManyWithWhereWithoutPublisherInput: ["where", "data"],
  AuthorUpdateWithoutBooksInput: ["name", "bio"],
  BookUpdateWithoutAuthorsInput: ["title", "isbn", "language", "edition", "createdAt", "updatedAt", "publisher"],
  BookCreateManyPublisherInput: ["id", "title", "isbn", "language", "edition", "createdAt", "updatedAt"],
  BookUpdateWithoutPublisherInput: ["title", "isbn", "language", "edition", "createdAt", "updatedAt", "authors"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

