const { registerInstrumentations } = require('@opentelemetry/instrumentation');
const { ConsoleSpanExporter, SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-http');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');

// const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');
// diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

const provider = new NodeTracerProvider({
    resource: new Resource({
        [SemanticResourceAttributes.SERVICE_NAME]: 'tdc-talks-microservice',
    }),
});

provider.addSpanProcessor(new SimpleSpanProcessor(new OTLPTraceExporter({
    url:"http://localhost:4318/v1/traces"
})));
// provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
provider.register();

registerInstrumentations({
    instrumentations: [
        new ExpressInstrumentation(),
        new HttpInstrumentation()
    ],
});