import {
  CognitoIdentityClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../CognitoIdentityClient";
import {
  GetIdentityPoolRolesInput,
  GetIdentityPoolRolesResponse
} from "../models/index";
import {
  deserializeAws_json1_1GetIdentityPoolRolesCommand,
  serializeAws_json1_1GetIdentityPoolRolesCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GetIdentityPoolRolesCommandInput = GetIdentityPoolRolesInput;
export type GetIdentityPoolRolesCommandOutput = GetIdentityPoolRolesResponse;

export class GetIdentityPoolRolesCommand extends $Command<
  GetIdentityPoolRolesCommandInput,
  GetIdentityPoolRolesCommandOutput,
  CognitoIdentityClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetIdentityPoolRolesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetIdentityPoolRolesCommandInput,
    GetIdentityPoolRolesCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetIdentityPoolRolesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GetIdentityPoolRolesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetIdentityPoolRolesCommandOutput> {
    return deserializeAws_json1_1GetIdentityPoolRolesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}