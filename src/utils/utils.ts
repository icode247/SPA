import { parse } from 'csv-parse';
import { TransactionsInput } from '../schema/Transactions'

function getTransationsObj(fileContent: string, headers: any) {
    return new Promise<TransactionsInput[]>((resolve, reject) => {
        parse(fileContent, {
            delimiter: ',',
            columns: headers,
        }, function (err, rows: TransactionsInput[]) {
            resolve(rows);
            reject(err)
        });

    })
}
export default getTransationsObj;