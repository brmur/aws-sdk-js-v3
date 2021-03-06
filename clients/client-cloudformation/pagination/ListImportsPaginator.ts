import { CloudFormation } from "../CloudFormation";
import { CloudFormationClient } from "../CloudFormationClient";
import { ListImportsCommand, ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListImportsCommandInput,
  ...args: any
): Promise<ListImportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImportsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CloudFormation,
  input: ListImportsCommandInput,
  ...args: any
): Promise<ListImportsCommandOutput> => {
  // @ts-ignore
  return await client.listImports(input, ...args);
};
export async function* listImportsPaginate(
  config: CloudFormationPaginationConfiguration,
  input: ListImportsCommandInput,
  ...additionalArguments: any
): Paginator<ListImportsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImportsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudFormation) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
