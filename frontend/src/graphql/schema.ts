import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "asset" */
export type Asset = {
  __typename?: 'asset';
  id: Scalars['uuid']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  portfolio: Portfolio;
  portfolioId: Scalars['uuid']['output'];
  type: Scalars['String']['output'];
};

/** aggregated selection of "asset" */
export type AssetAggregate = {
  __typename?: 'asset_aggregate';
  aggregate?: Maybe<AssetAggregateFields>;
  nodes: Array<Asset>;
};

export type AssetAggregateBoolExp = {
  count?: InputMaybe<AssetAggregateBoolExpCount>;
};

export type AssetAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<AssetSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<AssetBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "asset" */
export type AssetAggregateFields = {
  __typename?: 'asset_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<AssetMaxFields>;
  min?: Maybe<AssetMinFields>;
};


/** aggregate fields of "asset" */
export type AssetAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AssetSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "asset" */
export type AssetAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AssetMaxOrderBy>;
  min?: InputMaybe<AssetMinOrderBy>;
};

/** input type for inserting array relation for remote table "asset" */
export type AssetArrRelInsertInput = {
  data: Array<AssetInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AssetOnConflict>;
};

/** Boolean expression to filter rows from the table "asset". All fields are combined with a logical 'AND'. */
export type AssetBoolExp = {
  _and?: InputMaybe<Array<AssetBoolExp>>;
  _not?: InputMaybe<AssetBoolExp>;
  _or?: InputMaybe<Array<AssetBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  location?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  portfolio?: InputMaybe<PortfolioBoolExp>;
  portfolioId?: InputMaybe<UuidComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "asset" */
export enum AssetConstraint {
  /** unique or primary key constraint on columns "id" */
  AssetPkey = 'asset_pkey'
}

/** input type for inserting data into table "asset" */
export type AssetInsertInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  portfolio?: InputMaybe<PortfolioObjRelInsertInput>;
  portfolioId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type AssetMaxFields = {
  __typename?: 'asset_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  portfolioId?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "asset" */
export type AssetMaxOrderBy = {
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  portfolioId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AssetMinFields = {
  __typename?: 'asset_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  portfolioId?: Maybe<Scalars['uuid']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "asset" */
export type AssetMinOrderBy = {
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  portfolioId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "asset" */
export type AssetMutationResponse = {
  __typename?: 'asset_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Asset>;
};

/** on_conflict condition type for table "asset" */
export type AssetOnConflict = {
  constraint: AssetConstraint;
  update_columns?: Array<AssetUpdateColumn>;
  where?: InputMaybe<AssetBoolExp>;
};

/** Ordering options when selecting data from "asset". */
export type AssetOrderBy = {
  id?: InputMaybe<OrderBy>;
  location?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  portfolio?: InputMaybe<PortfolioOrderBy>;
  portfolioId?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: asset */
export type AssetPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "asset" */
export enum AssetSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PortfolioId = 'portfolioId',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "asset" */
export type AssetSetInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  portfolioId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "asset" */
export type AssetStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: AssetStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type AssetStreamCursorValueInput = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  portfolioId?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "asset" */
export enum AssetUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  PortfolioId = 'portfolioId',
  /** column name */
  Type = 'type'
}

export type AssetUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AssetSetInput>;
  /** filter the rows which have to be updated */
  where: AssetBoolExp;
};

/** ordering argument of a cursor */
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "asset" */
  delete_asset?: Maybe<AssetMutationResponse>;
  /** delete single row from the table: "asset" */
  delete_asset_by_pk?: Maybe<Asset>;
  /** delete data from the table: "portfolio" */
  delete_portfolio?: Maybe<PortfolioMutationResponse>;
  /** delete single row from the table: "portfolio" */
  delete_portfolio_by_pk?: Maybe<Portfolio>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<UserMutationResponse>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** insert data into the table: "asset" */
  insert_asset?: Maybe<AssetMutationResponse>;
  /** insert a single row into the table: "asset" */
  insert_asset_one?: Maybe<Asset>;
  /** insert data into the table: "portfolio" */
  insert_portfolio?: Maybe<PortfolioMutationResponse>;
  /** insert a single row into the table: "portfolio" */
  insert_portfolio_one?: Maybe<Portfolio>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<UserMutationResponse>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** update data of the table: "asset" */
  update_asset?: Maybe<AssetMutationResponse>;
  /** update single row of the table: "asset" */
  update_asset_by_pk?: Maybe<Asset>;
  /** update multiples rows of table: "asset" */
  update_asset_many?: Maybe<Array<Maybe<AssetMutationResponse>>>;
  /** update data of the table: "portfolio" */
  update_portfolio?: Maybe<PortfolioMutationResponse>;
  /** update single row of the table: "portfolio" */
  update_portfolio_by_pk?: Maybe<Portfolio>;
  /** update multiples rows of table: "portfolio" */
  update_portfolio_many?: Maybe<Array<Maybe<PortfolioMutationResponse>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<UserMutationResponse>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<UserMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteAssetArgs = {
  where: AssetBoolExp;
};


/** mutation root */
export type MutationRootDeleteAssetByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeletePortfolioArgs = {
  where: PortfolioBoolExp;
};


/** mutation root */
export type MutationRootDeletePortfolioByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteUserArgs = {
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootInsertAssetArgs = {
  objects: Array<AssetInsertInput>;
  on_conflict?: InputMaybe<AssetOnConflict>;
};


/** mutation root */
export type MutationRootInsertAssetOneArgs = {
  object: AssetInsertInput;
  on_conflict?: InputMaybe<AssetOnConflict>;
};


/** mutation root */
export type MutationRootInsertPortfolioArgs = {
  objects: Array<PortfolioInsertInput>;
  on_conflict?: InputMaybe<PortfolioOnConflict>;
};


/** mutation root */
export type MutationRootInsertPortfolioOneArgs = {
  object: PortfolioInsertInput;
  on_conflict?: InputMaybe<PortfolioOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserArgs = {
  objects: Array<UserInsertInput>;
  on_conflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserOneArgs = {
  object: UserInsertInput;
  on_conflict?: InputMaybe<UserOnConflict>;
};


/** mutation root */
export type MutationRootUpdateAssetArgs = {
  _set?: InputMaybe<AssetSetInput>;
  where: AssetBoolExp;
};


/** mutation root */
export type MutationRootUpdateAssetByPkArgs = {
  _set?: InputMaybe<AssetSetInput>;
  pk_columns: AssetPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAssetManyArgs = {
  updates: Array<AssetUpdates>;
};


/** mutation root */
export type MutationRootUpdatePortfolioArgs = {
  _set?: InputMaybe<PortfolioSetInput>;
  where: PortfolioBoolExp;
};


/** mutation root */
export type MutationRootUpdatePortfolioByPkArgs = {
  _set?: InputMaybe<PortfolioSetInput>;
  pk_columns: PortfolioPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePortfolioManyArgs = {
  updates: Array<PortfolioUpdates>;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _set?: InputMaybe<UserSetInput>;
  where: UserBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserByPkArgs = {
  _set?: InputMaybe<UserSetInput>;
  pk_columns: UserPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserManyArgs = {
  updates: Array<UserUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "portfolio" */
export type Portfolio = {
  __typename?: 'portfolio';
  /** An array relationship */
  assets: Array<Asset>;
  /** An aggregate relationship */
  assets_aggregate: AssetAggregate;
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};


/** columns and relationships of "portfolio" */
export type PortfolioAssetsArgs = {
  distinct_on?: InputMaybe<Array<AssetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetOrderBy>>;
  where?: InputMaybe<AssetBoolExp>;
};


/** columns and relationships of "portfolio" */
export type PortfolioAssetsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AssetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetOrderBy>>;
  where?: InputMaybe<AssetBoolExp>;
};

/** aggregated selection of "portfolio" */
export type PortfolioAggregate = {
  __typename?: 'portfolio_aggregate';
  aggregate?: Maybe<PortfolioAggregateFields>;
  nodes: Array<Portfolio>;
};

/** aggregate fields of "portfolio" */
export type PortfolioAggregateFields = {
  __typename?: 'portfolio_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<PortfolioMaxFields>;
  min?: Maybe<PortfolioMinFields>;
};


/** aggregate fields of "portfolio" */
export type PortfolioAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<PortfolioSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "portfolio". All fields are combined with a logical 'AND'. */
export type PortfolioBoolExp = {
  _and?: InputMaybe<Array<PortfolioBoolExp>>;
  _not?: InputMaybe<PortfolioBoolExp>;
  _or?: InputMaybe<Array<PortfolioBoolExp>>;
  assets?: InputMaybe<AssetBoolExp>;
  assets_aggregate?: InputMaybe<AssetAggregateBoolExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "portfolio" */
export enum PortfolioConstraint {
  /** unique or primary key constraint on columns "id" */
  PortfolioPkey = 'portfolio_pkey'
}

/** input type for inserting data into table "portfolio" */
export type PortfolioInsertInput = {
  assets?: InputMaybe<AssetArrRelInsertInput>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type PortfolioMaxFields = {
  __typename?: 'portfolio_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type PortfolioMinFields = {
  __typename?: 'portfolio_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "portfolio" */
export type PortfolioMutationResponse = {
  __typename?: 'portfolio_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Portfolio>;
};

/** input type for inserting object relation for remote table "portfolio" */
export type PortfolioObjRelInsertInput = {
  data: PortfolioInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<PortfolioOnConflict>;
};

/** on_conflict condition type for table "portfolio" */
export type PortfolioOnConflict = {
  constraint: PortfolioConstraint;
  update_columns?: Array<PortfolioUpdateColumn>;
  where?: InputMaybe<PortfolioBoolExp>;
};

/** Ordering options when selecting data from "portfolio". */
export type PortfolioOrderBy = {
  assets_aggregate?: InputMaybe<AssetAggregateOrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: portfolio */
export type PortfolioPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "portfolio" */
export enum PortfolioSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "portfolio" */
export type PortfolioSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "portfolio" */
export type PortfolioStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: PortfolioStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type PortfolioStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "portfolio" */
export enum PortfolioUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type PortfolioUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<PortfolioSetInput>;
  /** filter the rows which have to be updated */
  where: PortfolioBoolExp;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "asset" */
  asset: Array<Asset>;
  /** fetch aggregated fields from the table: "asset" */
  asset_aggregate: AssetAggregate;
  /** fetch data from the table: "asset" using primary key columns */
  asset_by_pk?: Maybe<Asset>;
  /** fetch data from the table: "portfolio" */
  portfolio: Array<Portfolio>;
  /** fetch aggregated fields from the table: "portfolio" */
  portfolio_aggregate: PortfolioAggregate;
  /** fetch data from the table: "portfolio" using primary key columns */
  portfolio_by_pk?: Maybe<Portfolio>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
};


export type QueryRootAssetArgs = {
  distinct_on?: InputMaybe<Array<AssetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetOrderBy>>;
  where?: InputMaybe<AssetBoolExp>;
};


export type QueryRootAssetAggregateArgs = {
  distinct_on?: InputMaybe<Array<AssetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetOrderBy>>;
  where?: InputMaybe<AssetBoolExp>;
};


export type QueryRootAssetByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootPortfolioArgs = {
  distinct_on?: InputMaybe<Array<PortfolioSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PortfolioOrderBy>>;
  where?: InputMaybe<PortfolioBoolExp>;
};


export type QueryRootPortfolioAggregateArgs = {
  distinct_on?: InputMaybe<Array<PortfolioSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PortfolioOrderBy>>;
  where?: InputMaybe<PortfolioBoolExp>;
};


export type QueryRootPortfolioByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type QueryRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type QueryRootUserByPkArgs = {
  id: Scalars['uuid']['input'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "asset" */
  asset: Array<Asset>;
  /** fetch aggregated fields from the table: "asset" */
  asset_aggregate: AssetAggregate;
  /** fetch data from the table: "asset" using primary key columns */
  asset_by_pk?: Maybe<Asset>;
  /** fetch data from the table in a streaming manner: "asset" */
  asset_stream: Array<Asset>;
  /** fetch data from the table: "portfolio" */
  portfolio: Array<Portfolio>;
  /** fetch aggregated fields from the table: "portfolio" */
  portfolio_aggregate: PortfolioAggregate;
  /** fetch data from the table: "portfolio" using primary key columns */
  portfolio_by_pk?: Maybe<Portfolio>;
  /** fetch data from the table in a streaming manner: "portfolio" */
  portfolio_stream: Array<Portfolio>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: UserAggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
};


export type SubscriptionRootAssetArgs = {
  distinct_on?: InputMaybe<Array<AssetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetOrderBy>>;
  where?: InputMaybe<AssetBoolExp>;
};


export type SubscriptionRootAssetAggregateArgs = {
  distinct_on?: InputMaybe<Array<AssetSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<AssetOrderBy>>;
  where?: InputMaybe<AssetBoolExp>;
};


export type SubscriptionRootAssetByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootAssetStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<AssetStreamCursorInput>>;
  where?: InputMaybe<AssetBoolExp>;
};


export type SubscriptionRootPortfolioArgs = {
  distinct_on?: InputMaybe<Array<PortfolioSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PortfolioOrderBy>>;
  where?: InputMaybe<PortfolioBoolExp>;
};


export type SubscriptionRootPortfolioAggregateArgs = {
  distinct_on?: InputMaybe<Array<PortfolioSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<PortfolioOrderBy>>;
  where?: InputMaybe<PortfolioBoolExp>;
};


export type SubscriptionRootPortfolioByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootPortfolioStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<PortfolioStreamCursorInput>>;
  where?: InputMaybe<PortfolioBoolExp>;
};


export type SubscriptionRootUserArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type SubscriptionRootUserAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserOrderBy>>;
  where?: InputMaybe<UserBoolExp>;
};


export type SubscriptionRootUserByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootUserStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserStreamCursorInput>>;
  where?: InputMaybe<UserBoolExp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
};

/** aggregated selection of "user" */
export type UserAggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<UserAggregateFields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type UserAggregateFields = {
  __typename?: 'user_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<UserMaxFields>;
  min?: Maybe<UserMinFields>;
};


/** aggregate fields of "user" */
export type UserAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type UserBoolExp = {
  _and?: InputMaybe<Array<UserBoolExp>>;
  _not?: InputMaybe<UserBoolExp>;
  _or?: InputMaybe<Array<UserBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user" */
export enum UserConstraint {
  /** unique or primary key constraint on columns "id" */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type UserInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type UserMaxFields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type UserMinFields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user" */
export type UserMutationResponse = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on_conflict condition type for table "user" */
export type UserOnConflict = {
  constraint: UserConstraint;
  update_columns?: Array<UserUpdateColumn>;
  where?: InputMaybe<UserBoolExp>;
};

/** Ordering options when selecting data from "user". */
export type UserOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: user */
export type UserPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user" */
export enum UserSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user" */
export type UserSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user" */
export type UserStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserStreamCursorValueInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user" */
export enum UserUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type UserUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserSetInput>;
  /** filter the rows which have to be updated */
  where: UserBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type BaseAssetFragment = { __typename?: 'asset', id: string, name: string, type: string, location: string, portfolioId: string };

export type PortfolioAssetsQueryVariables = Exact<{
  portfolioId: Scalars['uuid']['input'];
}>;


export type PortfolioAssetsQuery = { __typename?: 'query_root', assets: Array<{ __typename?: 'asset', id: string, name: string, type: string, location: string, portfolioId: string }> };

export type BasePortfolioFragment = { __typename?: 'portfolio', id: string, name: string };

export type PortfolioAssetsCountFragment = { __typename?: 'portfolio', assets_aggregate: { __typename?: 'asset_aggregate', aggregate?: { __typename?: 'asset_aggregate_fields', count: number } | null } };

export type PortfoliosQueryVariables = Exact<{ [key: string]: never; }>;


export type PortfoliosQuery = { __typename?: 'query_root', portfolios: Array<{ __typename?: 'portfolio', id: string, name: string, assets_aggregate: { __typename?: 'asset_aggregate', aggregate?: { __typename?: 'asset_aggregate_fields', count: number } | null } }> };

export type PortfolioQueryVariables = Exact<{
  portfolioId: Scalars['uuid']['input'];
}>;


export type PortfolioQuery = { __typename?: 'query_root', portfolio?: { __typename?: 'portfolio', id: string, name: string } | null };

export const BaseAssetFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"portfolioId"}}]}}]} as unknown as DocumentNode<BaseAssetFragment, unknown>;
export const BasePortfolioFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasePortfolio"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"portfolio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<BasePortfolioFragment, unknown>;
export const PortfolioAssetsCountFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioAssetsCount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"portfolio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<PortfolioAssetsCountFragment, unknown>;
export const PortfolioAssetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PortfolioAssets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"assets"},"name":{"kind":"Name","value":"asset"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"portfolioId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BaseAsset"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BaseAsset"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"asset"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"portfolioId"}}]}}]} as unknown as DocumentNode<PortfolioAssetsQuery, PortfolioAssetsQueryVariables>;
export const PortfoliosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Portfolios"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"portfolios"},"name":{"kind":"Name","value":"portfolio"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasePortfolio"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PortfolioAssetsCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasePortfolio"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"portfolio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PortfolioAssetsCount"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"portfolio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets_aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"aggregate"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<PortfoliosQuery, PortfoliosQueryVariables>;
export const PortfolioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Portfolio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"portfolio"},"name":{"kind":"Name","value":"portfolio_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"portfolioId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"BasePortfolio"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BasePortfolio"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"portfolio"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]} as unknown as DocumentNode<PortfolioQuery, PortfolioQueryVariables>;