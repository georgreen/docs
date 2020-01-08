(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{1374:function(e,t,r){e.exports=r.p+"assets/img/select-raw-request-body.87510e89.png"},1375:function(e,t,r){e.exports=r.p+"assets/img/example-raw-request-body.e1955360.png"},1376:function(e,t,r){e.exports=r.p+"assets/img/select-raw-response.40f05a5a.png"},1377:function(e,t,r){e.exports=r.p+"assets/img/example-raw-response.caf1fb61.png"},1378:function(e,t,r){e.exports=r.p+"assets/img/example-test-rest-endpoint.48106c22.png"},2447:function(e,t,r){"use strict";r.r(t);var a=r(0),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"rest-endpoint-raw-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rest-endpoint-raw-content"}},[e._v("#")]),e._v(" REST Endpoint - Raw content")]),e._v(" "),a("p",[e._v("You can configure callable recipes to accept raw content when exposed as a REST endpoint. This allows you to integrate more datatypes (e.g. XML/SOAP and URL Encoded Form) into your workflow.")]),e._v(" "),a("p",[e._v("For example, you can trigger a callable recipe with a raw content body cURL statement:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -X POST "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://apim.workato.com/API-collection-v1/send-raw-content'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n     -d "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<string>'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n     -H "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'content-type:text/xml'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n     -H "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'API-TOKEN: <YOUR_TOKEN>'")]),e._v("\n")])])]),a("h2",{attrs:{id:"raw-request-body"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw-request-body"}},[e._v("#")]),e._v(" Raw request body")]),e._v(" "),a("p",[e._v("When creating your callable recipe, select "),a("strong",[e._v("Raw request body")]),e._v(". This configures the recipe to accept any data type.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(1374),alt:"Select raw request body",width:"2502",height:"1642"}}),e._v(" "),a("em",[e._v("Select raw request body")])],1),e._v(" "),a("h4",{attrs:{id:"configuring-input"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuring-input"}},[e._v("#")]),e._v(" Configuring input")]),e._v(" "),a("p",[e._v("There is no need to configure the input for this action.")]),e._v(" "),a("h4",{attrs:{id:"output-field"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-field"}},[e._v("#")]),e._v(" Output field")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Output Field")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Request Content type")]),e._v(" "),a("td",[e._v("The "),a("code",[e._v("Content-Type")]),e._v(" header value from the incoming request.")])]),e._v(" "),a("tr",[a("td",[e._v("Request body (raw)")]),e._v(" "),a("td",[e._v("The full raw body content.")])])])]),e._v(" "),a("p",[e._v("Subsequently, you can use Workato parsers for "),a("router-link",{attrs:{to:"/features/handling-xml.html"}},[e._v("XML")]),e._v(", "),a("router-link",{attrs:{to:"/features/handling-csv-files.html"}},[e._v("CSV")]),e._v(", "),a("router-link",{attrs:{to:"/features/handling-yaml.html"}},[e._v("YAML")]),e._v(" to convert the raw content into usable datapills. We recommend you to use a "),a("router-link",{attrs:{to:"/features/callable-recipes/new-call-trigger.html"}},[e._v("JSON request body")]),e._v(" when handling JSON data.")],1),e._v(" "),a("p",[e._v("In this example below, we are receiving XML content from the API call. We use the XML parser to convert the raw content into useable datapills.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(1375),alt:"Receiving raw content and reading it with the XML parser",width:"2497",height:"1259"}}),e._v(" "),a("em",[e._v("Receiving raw content and reading it with the XML parser. See the full sample recipe "),a("a",{attrs:{href:"https://www.workato.com/recipes/976429",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])],1),e._v(" "),a("h2",{attrs:{id:"raw-response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#raw-response"}},[e._v("#")]),e._v(" Raw response")]),e._v(" "),a("p",[e._v("You can configure your callable recipe to return raw content (text).")]),e._v(" "),a("ol",[a("li",[e._v("Select the "),a("strong",[e._v("raw response")]),e._v(" for your "),a("router-link",{attrs:{to:"/features/callable-recipes/new-call-trigger.html#input-fields"}},[e._v("recipe trigger")]),e._v(" .")],1)]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(1376),alt:"Select raw response",width:"2466",height:"1603"}}),e._v(" "),a("em",[e._v("Select raw response")])],1),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Configure the reply in the "),a("strong",[e._v("return response action")]),e._v(".")])]),e._v(" "),a("p",[e._v("In this example, we are receiving XML content in the API call. We parse the message and use the "),a("code",[e._v("File ID")]),e._v(" to retrieve a text file from storage. Finally, we return a text file to the calling system.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(1377),alt:"Return raw content from a callable recipe",width:"2516",height:"2056"}}),e._v(" "),a("em",[e._v("Return raw content from a callable recipe. See the full sample recipe "),a("a",{attrs:{href:"https://www.workato.com/recipes/977033",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])],1),e._v(" "),a("h2",{attrs:{id:"test-on-workato-api-platform"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-on-workato-api-platform"}},[e._v("#")]),e._v(" Test on Workato API Platform")]),e._v(" "),a("p",[e._v("Proceed to setup your recipe's REST endpoint on Workato's API platform. Once done, you can test out your new REST endpoint with raw content.")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:r(1378),alt:"Testing REST endpoint with raw content",width:"1436",height:"298"}}),e._v(" "),a("em",[e._v("Testing REST endpoint with raw content")])],1)])}),[],!1,null,null,null);t.default=n.exports}}]);