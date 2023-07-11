# Security & Authentication

For Authentication we will use Authelia

## Authelia

Authelia is an open source authentication and authorization server. It is designed to be easy to use and configure, and it supports a variety of authentication methods, including:

- Username and password
- OAuth 2.0
- OpenID Connect
- SAML 2.0

Authelia can also be used to enforce access control policies. You can use Authelia to restrict access to specific resources based on the user's role, group, or other criteria.

Authelia is a powerful tool that can help you to secure your applications and services. It is easy to use and configure, and it supports a variety of authentication methods and access control policies.

Prometheus, Grafana, Loki, Jaeger, and Authelia are all valuable tools for monitoring and observability. Together, they can help you to gain a deep understanding of your applications and infrastructure, and to identify and troubleshoot problems.

---

# Observability

In this project we used the following Obervability solutions:

## Prometheus

Prometheus is a time series database that stores metrics from your applications and infrastructure. It is designed to be scalable and can handle large amounts of data. Prometheus is open source and is available under the Apache License 2.0.

Prometheus collects metrics using a pull model. This means that Prometheus periodically queries your applications and infrastructure for metrics. Prometheus can collect metrics from a variety of sources, including:

- HTTP endpoints
- Metrics exporters
- Metrics libraries

Once Prometheus has collected metrics, it stores them in a time series database. The time series database is organized into a hierarchy of time series. Each time series is identified by a unique name and a set of labels. The labels are used to identify the source of the metric and the time period that the metric is valid for.

Prometheus provides a number of features for querying and analyzing your metrics. You can use Prometheus's PromQL query language to query your metrics and create dashboards and charts. You can also use Prometheus's Alerting system to create alerts based on your metrics.

---

## Grafana

Grafana is a visualization tool that allows you to create dashboards and charts from your Prometheus data. Grafana is open source and is available under the Apache License 2.0.

Grafana can be used to create a variety of dashboards and charts, including:

- Line charts
- Bar charts
- Pie charts
- Heatmaps
- Scatter plots

Grafana also supports a number of different data sources, including:

- Prometheus
- Elasticsearch
- InfluxDB
- Graphite

Grafana is a powerful tool for visualizing your Prometheus data. It can help you to identify trends in your data and identify problems.

---

## Loki

Loki is a log management tool that can collect, store, and search your logs. It is designed to be scalable and can handle large amounts of data. Loki is open source and is available under the Apache License 2.0.

Loki collects logs using a pull model. This means that Loki periodically queries your applications and infrastructure for logs. Loki can collect logs from a variety of sources, including:

- HTTP endpoints
- Syslog
- GELF

Once Loki has collected logs, it stores them in a time series database. The time series database is organized into a hierarchy of logs. Each log is identified by a unique name and a set of labels. The labels are used to identify the source of the log and the time period that the log is valid for.

Loki provides a number of features for querying and analyzing your logs. You can use Loki's PromQL query language to query your logs and create dashboards and charts. You can also use Loki's Alerting system to create alerts based on your logs.

---

## Jaeger

Jaeger is a distributed tracing tool that can help you identify performance problems and troubleshoot errors in your applications. Jaeger is open source and is available under the Apache License 2.0.

Jaeger traces the flow of requests through your application. This allows you to see where requests are spending the most time and identify bottlenecks. Jaeger can also help you to identify errors in your application. Jaeger traces errors back to their source, making it easy to troubleshoot.

Jaeger provides a number of features for visualizing and analyzing your traces. You can use Jaeger's UI to view your traces, create dashboards, and generate reports. You can also use Jaeger's API to query your traces and export them to other tools.

Prometheus, Grafana, Loki, and Jaeger are all valuable tools for monitoring and observability. Together, they can help you to gain a deep understanding of your applications and infrastructure.
