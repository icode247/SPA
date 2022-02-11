import { Resolver, Mutation, Arg, Query } from 'type-graphql'
import { Transactions, TransactionsInput } from '../schema/Transactions'
import { Prisma } from '../database/index'
import { getTransationsObj } from '../utils';
import * as fs from 'fs';
import * as path from 'path';

@Resolver((_of) => Transactions)
export class TransactionResolver {
    //1. Transaction Query
    //Get all the transactions.
    @Query(() => [Transactions])
    getTransactions(): Transactions[] {
         return Prisma.Transactions.findMany({
            orderBy: [{
                createdAt: "desc"
            }]
        });
    }

    // Get single transactions by the id
    @Query((_returns) => Transactions, { nullable: true })
    async getTransaction(@Arg('id') id: string): Promise<Transactions> {
        return await Prisma.Transactions.findFirst({
            where: { id }
        });
    }

    @Mutation((_returns) => Transactions)
    async loadData(): Promise<TransactionsInput> {
        try {
            //Get the csv file location.
            const csvFilePath = path.resolve(__dirname, '..', 'Transactions.csv');

            const headers = ['id', 'description', 'account', 'category', 'reference', 'currency', 'amount', 'status', 'transactionDate', 'createdAt', 'updatedAt'];

            //Get the content in the csv file
            const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });

            const result = await getTransationsObj(fileContent, headers)

            //Remove the headers from the array
            result.shift();
            //Loop through all the items in the array 
            result.forEach(async (data) => {
                //Add them to the database
                await Prisma.Transactions.create({
                    data: {
                        id: data.id,
                        description: data.description,
                        account: data.account,
                        category: data.category,
                        reference: data.reference,
                        currency: data.currency,
                        amount: data.amount,
                        status: data.status,
                    }
                })
            });
            //Return the last created item
            return result[result.length - 1]
        } catch (err) {
            console.log(err)
        }
    }
}
