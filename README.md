# priceline-nexus-action
collaboration on repo integration with Nexus IQ
### Requires on prem / self hosted action runner
On repo creation install action that will call Nexus IQ APIs to get vulnerability assessment
If the vulnerability `JSON` result contains HIGH vulnerability alerts, reject / fail the CI Build

using this [build an action](https://help.github.com/en/actions/building-actions/creating-a-javascript-action)
