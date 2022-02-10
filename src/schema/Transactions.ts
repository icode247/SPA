import { Field, ObjectType, InputType } from 'type-graphql'

//Define the transaction Schema.
@ObjectType()
export class Transactions {
    @Field()
    id: string

    @Field()
    account: string

    @Field()
    description: string

    @Field()
    category: string

    @Field()
    reference: string

    @Field()
    currency: string

    @Field()
    amount: string

    @Field()
    status: string

    @Field()
    transactionsDate: string

    @Field()
    createdAt: string

    @Field()
    updatedAt: string
}

//Define the inputs required to create a transaction
@InputType()
export class TransactionsInput implements Partial<Transactions> {
  
    @Field()
    id: string

    @Field()
    account: string

    @Field()
    description: string

    @Field()
    category: string

    @Field()
    reference: string

    @Field()
    currency: string

    @Field()
    amount: string

    @Field()
    status: string
}