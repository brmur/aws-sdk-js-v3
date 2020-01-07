import {
  SFNClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SFNClient";
import {
  DescribeStateMachineInput,
  DescribeStateMachineOutput
} from "../models/index";
import {
  deserializeAws_json1_0DescribeStateMachineCommand,
  serializeAws_json1_0DescribeStateMachineCommand
} from "../protocols/Aws_json1_0";
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

export type DescribeStateMachineCommandInput = DescribeStateMachineInput;
export type DescribeStateMachineCommandOutput = DescribeStateMachineOutput;

export class DescribeStateMachineCommand extends $Command<
  DescribeStateMachineCommandInput,
  DescribeStateMachineCommandOutput,
  SFNClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeStateMachineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SFNClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeStateMachineCommandInput,
    DescribeStateMachineCommandOutput
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
    input: DescribeStateMachineCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeStateMachineCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeStateMachineCommandOutput> {
    return deserializeAws_json1_0DescribeStateMachineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}