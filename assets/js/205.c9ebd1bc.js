(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1538:function(e,t,n){e.exports=n.p+"assets/img/toggle-opa-off.b37a719b.png"},1539:function(e,t,n){e.exports=n.p+"assets/img/toggle-opa-on.f1cd8f17.png"},1540:function(e,t,n){e.exports=n.p+"assets/img/opa-connected.5fa1cb75.png"},2497:function(e,t,n){"use strict";n.r(t);var a=n(0),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"run-on-prem-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-on-prem-agent"}},[e._v("#")]),e._v(" Run On-prem Agent")]),e._v(" "),a("p",[e._v("An on-prem agent requires an active connection between the agent running within your network and Workato's "),a("a",{attrs:{href:"https://workato.com/on_prem_groups/",target:"_blank",rel:"noopener noreferrer"}},[e._v("On-prem group dashboard"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("You may occasionally need to temporarily disable this connection. For example, restarting or "),a("router-link",{attrs:{to:"/on-prem/agents/upgrade.html"}},[e._v("upgrading")]),e._v(" the on-prem agent.")],1),e._v(" "),a("h2",{attrs:{id:"disable-on-prem-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disable-on-prem-agent"}},[e._v("#")]),e._v(" Disable on-prem agent")]),e._v(" "),a("p",[e._v("To do so, simply select "),a("strong",[e._v("Disable agent")]),e._v(".")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:n(1538),alt:"Temporarily disable on-prem agent",width:"2880",height:"1652"}}),e._v(" "),a("em",[e._v("Temporarily disable on-prem agent")])],1),e._v(" "),a("h2",{attrs:{id:"re-establish-connection-with-on-prem-agent"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#re-establish-connection-with-on-prem-agent"}},[e._v("#")]),e._v(" Re-establish connection with on-prem agent")]),e._v(" "),a("p",[e._v("To reconnect your on-prem agent to Workato, you have to do the following steps. Please follow the instructions according to your network's operating system.")]),e._v(" "),a("h3",{attrs:{id:"running-on-linux-64-bit-and-mac-os-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-on-linux-64-bit-and-mac-os-x"}},[e._v("#")]),e._v(" Running on Linux 64-bit and Mac OS X")]),e._v(" "),a("p",[e._v("If your on-prem agent is installed in a Linux or Mac OS, run the on-prem agent using the following bash script:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("INSTALL_HOME"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin/run.sh\n")])])]),a("p",[e._v("If you are accessing the server through SSH and want to let the agent run in the background independent of your shell session, you can add the nohup command ("),a("code",[e._v("&")]),e._v(") at the end. You can also include a "),a("code",[e._v("> file_name")]),e._v(" command to ensure that the outputs are logged.")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("INSTALL_HOME"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin/run.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" opa_output.txt "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("\n")])])]),a("p",[e._v("Level of details of the OPA logs depend on your configuration. "),a("router-link",{attrs:{to:"/on-prem/agents/logging.html"}},[e._v("Learn more")]),e._v(".")],1),e._v(" "),a("h2",{attrs:{id:"running-on-windows-64-bit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-on-windows-64-bit"}},[e._v("#")]),e._v(" Running on Windows 64-bit")]),e._v(" "),a("p",[e._v("For on-prem agents installed in Windows, run the agent as a Windows console application or as a "),a("a",{attrs:{href:"#using-windows-service"}},[e._v("Windows Service")]),e._v(".")]),e._v(" "),a("p",[e._v("Run the on-prem agent in console mode by launching "),a("code",[e._v("Workato")]),e._v(" → "),a("code",[e._v("Run Agent (console)")]),e._v(" in the Start Menu.")]),e._v(" "),a("p",[e._v("Alternatively, you can use the "),a("code",[e._v("Run Agent (console)")]),e._v(" shortcut to ensure the agent is successfully connecting to Workato using the provided certificate.")]),e._v(" "),a("h3",{attrs:{id:"using-windows-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-windows-service"}},[e._v("#")]),e._v(" Using Windows Service")]),e._v(" "),a("p",[e._v("The installer automatically registers an agent ("),a("code",[e._v("WorkatoAgent")]),e._v(") as a Windows service . However, the agent does not start automatically. Navigate to the service configuration ("),a("strong",[e._v("Control Panel → System and Security → Administrative Tools → Services → WorkatoAgent")]),e._v(") to configure service auto-start.")]),e._v(" "),a("h3",{attrs:{id:"browsing-log-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#browsing-log-files"}},[e._v("#")]),e._v(" Browsing log files")]),e._v(" "),a("p",[e._v("When the on-prem agent is running as a Windows service, log files can be found at: "),a("code",[e._v("%SYSTEMROOT%\\System32\\LogFiles\\Workato")]),e._v(". There's also a shortcut to the Workato log directory in the "),a("code",[e._v("Workato")]),e._v(" group found in the Start Menu.")]),e._v(" "),a("p",[e._v("Level of details of the OPA logs depend on your configuration. "),a("router-link",{attrs:{to:"/on-prem/agents/logging.html"}},[e._v("Learn more")]),e._v(".")],1),e._v(" "),a("h3",{attrs:{id:"changing-save-location-for-log-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changing-save-location-for-log-files"}},[e._v("#")]),e._v(" Changing save location for log files")]),e._v(" "),a("p",[e._v("To change the save location for log files, launch "),a("code",[e._v("Workato")]),e._v(" → "),a("code",[e._v("Service Wrapper Configuration")]),e._v(" in the Start Menu. Navigate to the "),a("code",[e._v("Logging")]),e._v(" tab where you can modify "),a("code",[e._v("Log path")]),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"on-prem-agent-is-reconnected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-prem-agent-is-reconnected"}},[e._v("#")]),e._v(" On-prem agent is reconnected")]),e._v(" "),a("p",[e._v("To finish re-establishing the connection, go to the On-prem group dashboard and connect to your on-prem agent.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Step")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Enable agent")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("From the Workato On-prem group dashboard, select "),a("strong",[e._v("Enable agent")]),e._v("."),a("br"),a("DocImage",{attrs:{src:n(1539),alt:"Enable on-prem agent",width:"2880",height:"1699"}})],1)]),e._v(" "),a("tr",[a("td",[e._v("Connection established")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Workato will send a request to your on-prem agent to establish a connection. If sucecessful, the status will return to "),a("strong",[e._v("Active")]),e._v("."),a("br"),a("DocImage",{attrs:{src:n(1540),alt:"Enable on-prem agent",width:"2880",height:"1113"}})],1)])])])])}),[],!1,null,null,null);t.default=o.exports}}]);