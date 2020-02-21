# priceline-nexus-action
collaboration on repo integration with Nexus IQ

On repo creation install action that will call Nexus IQ APIs to get vulnerability assessment
If the vulnerability `JSON` result contains HIGH vulnerability alerts, reject / fail the CI Build
