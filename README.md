# React Prometheus UI

This is a Prometheus UI written in React.

## Setup

You need the following tools on your host:

* Prometheus running on http://localhost:9090
* A recent version of `node`

Run the following commands:

```
# Clone the repo
git clone https://github.com/davkal/promui
# Install dependencies
cd promui
yarn install
# Run application
yarn start
```

This starts a webserver on your host that serves the application.
Access the application on your browser: http://localhost:3000

If your Prometheus is running on a different host, you need to adjust the `proxy` value in `package.json`.
