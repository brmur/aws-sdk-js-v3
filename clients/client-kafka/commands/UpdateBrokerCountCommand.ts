import {
  KafkaClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KafkaClient";
import {
  UpdateBrokerCountRequest,
  UpdateBrokerCountResponse
} from "../models/index";
import {
  deserializeAws_restJson1_1UpdateBrokerCountCommand,
  serializeAws_restJson1_1UpdateBrokerCountCommand
} from "../protocols/Aws_restJson1_1";
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

export type UpdateBrokerCountCommandInput = UpdateBrokerCountRequest;
export type UpdateBrokerCountCommandOutput = UpdateBrokerCountResponse;

export class UpdateBrokerCountCommand extends $Command<
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput,
  KafkaClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBrokerCountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KafkaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput> {
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
    input: UpdateBrokerCountCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1_1UpdateBrokerCountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<UpdateBrokerCountCommandOutput> {
    return deserializeAws_restJson1_1UpdateBrokerCountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}