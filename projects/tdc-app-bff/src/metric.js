'use strict'

const { Resource } = require('@opentelemetry/resources');
const {metrics} = require('@opentelemetry/api');

const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { OTLPMetricExporter }=  require('@opentelemetry/exporter-metrics-otlp-http');
const {
    MeterProvider,
    PeriodicExportingMetricReader,
} = require('@opentelemetry/sdk-metrics');

function createMeter (){

    const meter = metrics.getMeter('default');
    let histogram = meter.createHistogram(
        'http.server.responseTime'
    )
    return {
        histogram
    }
}

function startMetric() {
    const metricExporter = new OTLPMetricExporter({
        url: 'http://localhost:4318/v1/metrics'
    })

    const otelMetricsInterval = 1000;

    const meterProvider = new MeterProvider({
        resource: new Resource({
            [SemanticResourceAttributes.SERVICE_NAME]: 'tdc-app-bff'
        })
    })

    meterProvider.addMetricReader(
        new PeriodicExportingMetricReader({
            exporter: metricExporter,
            exportIntervalMillis: otelMetricsInterval
        })
    )

    metrics.setGlobalMeterProvider(meterProvider);
    return createMeter(meterProvider);
}

module.exports = startMetric;