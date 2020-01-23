import {
  SNSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SNSClient";
import {
  GetSubscriptionAttributesInput,
  GetSubscriptionAttributesResponse
} from "../models/index";
import {
  deserializeAws_queryGetSubscriptionAttributesCommand,
  serializeAws_queryGetSubscriptionAttributesCommand
} from "../protocols/Aws_query";
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

export type GetSubscriptionAttributesCommandInput = GetSubscriptionAttributesInput;
export type GetSubscriptionAttributesCommandOutput = GetSubscriptionAttributesResponse;

export class GetSubscriptionAttributesCommand extends $Command<
  GetSubscriptionAttributesCommandInput,
  GetSubscriptionAttributesCommandOutput,
  SNSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetSubscriptionAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    GetSubscriptionAttributesCommandInput,
    GetSubscriptionAttributesCommandOutput
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
    input: GetSubscriptionAttributesCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryGetSubscriptionAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GetSubscriptionAttributesCommandOutput> {
    return deserializeAws_queryGetSubscriptionAttributesCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}