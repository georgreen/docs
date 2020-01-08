(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1849:function(e,t,a){e.exports=a.p+"assets/img/parameters-configured.f9c40506.png"},1850:function(e,t,a){e.exports=a.p+"assets/img/adding-a-parameter.633ffb3d.png"},1851:function(e,t,a){e.exports=a.p+"assets/img/parameter-form-filled.79b0e127.png"},186:function(e,t,a){e.exports=a.p+"assets/img/command-recipes.3ec9aa35.png"},188:function(e,t,a){e.exports=a.p+"assets/img/button-submission.ef20c338.png"},189:function(e,t,a){e.exports=a.p+"assets/img/button-with-params.30dd1211.png"},190:function(e,t,a){e.exports=a.p+"assets/img/button-with-params-recipe.c22351d2.png"},195:function(e,t,a){e.exports=a.p+"assets/img/task-module-snow.6a62ac57.png"},196:function(e,t,a){e.exports=a.p+"assets/img/new-command.3c661b73.png"},2573:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"workbot-command-trigger"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workbot-command-trigger"}},[e._v("#")]),e._v(" Workbot command trigger")]),e._v(" "),s("p",[e._v("Workbot commands allow you to trigger recipes from Teams. These recipes can then perform actions in your apps (e.g. creating new ServiceNow tickets, listing Salesforce opportunities).")]),e._v(" "),s("p",[e._v("This means you can from perform actions in your apps from within Teams!")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(33),alt:"Command example",width:"1688",height:"924"}}),e._v(" "),s("em",[e._v("Sending a 'newissue' command with additional parameters in Teams, then receiving a reply")])],1),e._v(" "),s("p",[e._v("When a command is sent to Workbot in Teams, it will trigger the Workbot recipe and execute its actions.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(186),alt:"Command recipe",width:"3840",height:"690"}}),e._v(" "),s("em",[e._v("A Workbot recipe with a Workbot command trigger")])],1),e._v(" "),s("h2",{attrs:{id:"configuring-the-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuring-the-command"}},[e._v("#")]),e._v(" Configuring the command")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(196),alt:"New command",width:"3840",height:"2411"}}),e._v(" "),s("em",[e._v("Example 'newissue' command")])],1),e._v(" "),s("h3",{attrs:{id:"input-fields"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[e._v("#")]),e._v(" Input fields")]),e._v(" "),s("p",[e._v("The table below lists the input fields in the trigger and what they do.")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("a",{attrs:{href:"#command-name"}},[e._v("Command name")])]),e._v(" "),s("td",[e._v("\n              Name of the command.\n            ")])]),e._v(" "),s("tr",[s("td",[s("a",{attrs:{href:"#parameters"}},[e._v("Parameters")])]),e._v(" "),s("td",[e._v("\n              Parameter can store additional data that can be used as datapills in follow-up recipe actions.\n            ")])]),e._v(" "),s("tr",[s("td",[e._v("Command hint")]),e._v(" "),s("td",[e._v("\n            Display this instead of command name in response to "),s("b",[e._v("help")]),e._v(" messages.\n            ")])]),e._v(" "),s("tr",[s("td",[e._v("Hidden command")]),e._v(" "),s("td",[e._v("\n              If "),s("b",[e._v("Yes")]),e._v(", command will not show up as a command in "),s("b",[e._v("help")]),e._v(" messages. Defaults to "),s("b",[e._v("No")]),e._v(".\n            ")])])])]),e._v(" "),s("h4",{attrs:{id:"command-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-name"}},[e._v("#")]),e._v(" Command name")]),e._v(" "),s("p",[e._v("Workbot commands can invoke their recipes by:")]),e._v(" "),s("ol",[s("li",[e._v("Sending the command name in a direct message to Workbot, e.g. "),s("strong",[e._v("newissue")])]),e._v(" "),s("li",[e._v("Sending the command name in a channel and tagging Workbot, e.g. "),s("strong",[e._v("@workbot newissue")])]),e._v(" "),s("li",[e._v("Submitting a button with the command name configured:\n"),s("DocImage",{attrs:{src:a(39),alt:"Command name in button",width:"3840",height:"1309"}}),e._v(" "),s("em",[e._v("A button can be configured to invoke a Workbot command of another recipe")])],1)]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(188),alt:"Command name in button example",width:"1648",height:"1038"}}),e._v(" "),s("em",[e._v("The 'Create issue' button invokes the 'newissue' command and executes the recipe when submitted")])],1),e._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("p",[e._v("Each parameter can store additional data that can be used as datapills in follow-up recipe actions.")]),e._v(" "),s("p",[e._v("For example, to create an incident in ServiceNow, you may want to prompt users for additional info like "),s("strong",[e._v("Urgency")]),e._v(", "),s("strong",[e._v("Summary")]),e._v(" and "),s("strong",[e._v("Description")]),e._v(". By adding "),s("strong",[e._v("Urgency")]),e._v(", "),s("strong",[e._v("Summary")]),e._v(" and "),s("strong",[e._v("Description")]),e._v(" as parameters, Workbot will open a task module and prompt the user for each parameter.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(195),alt:"Task module",width:"2880",height:"1800"}}),e._v(" "),s("em",[e._v("Workbot can ask users for info if you specify additional parameters in your command")])],1),e._v(" "),s("p",[e._v("Users can also skip the prompts by supplying the parameters together with the command.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(33),alt:"Command with in-line parameters",width:"1688",height:"924"}}),e._v(" "),s("em",[e._v("Sending a 'newissue' command with additional parameters Urgency, Summary and Description")])],1),e._v(" "),s("h5",{attrs:{id:"defining-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defining-parameters"}},[e._v("#")]),e._v(" Defining parameters")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1849),alt:"Parameters configured",width:"3840",height:"1100"}}),e._v(" "),s("em",[e._v("3 parameters configured for the 'newissue' command")])],1),e._v(" "),s("p",[e._v("When you define parameters, Workbot opens a task module to collect each parameter's value from the user.")]),e._v(" "),s("p",[e._v("To add a parameter, click on the "),s("strong",[e._v("+Add parameter")]),e._v(" button under the "),s("strong",[e._v("Parameters")]),e._v(" section of a Workbot command trigger.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1850),alt:"Adding a parameter",width:"3840",height:"780"}}),e._v(" "),s("em",[e._v("Adding a new parameter")])],1),e._v(" "),s("p",[e._v("By configuring the parameter, you can control how the users interact with the parameter in the task module.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(1851),alt:"Parameter form empty",width:"3840",height:"2252"}}),e._v(" "),s("em",[e._v("Configuring a parameter")])],1),e._v(" "),s("p",[e._v("The table below describes in further detail what each parameter configuration field does.")]),e._v(" "),s("table",{staticClass:"unchanged rich-diff-level-one"},[s("thead",[s("tr",[s("th",[e._v("Input field")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("Name")]),e._v(" "),s("td",[e._v("\n              Name of the parameter. This is the name you use to reference the parameter in:"),s("br"),e._v(" "),s("ul",[s("li",[e._v("\n                  In-line commands")]),s("br"),s("img",{attrs:{src:a(33)}}),e._v(" "),s("li",[e._v("\n                  Choice parameters"),s("br"),s("img",{attrs:{src:a(31)}})]),e._v(" "),s("li",[e._v("\n                  Additional parameters in buttons"),s("br"),s("img",{attrs:{src:a(39)}})])])])]),e._v(" "),s("tr",[s("td",[e._v("Data type")]),e._v(" "),s("td",[e._v("\n              Data type of the parameter. Currently only supports "),s("code",[e._v("string")]),e._v(" and "),s("code",[e._v("date")]),e._v(" data types. The data type will influence the input type used to collect this parameter in task modules. For example, if "),s("code",[e._v("Date")]),e._v(" is chosen, a date picker will be used to collect the parameter in task modules.\n            ")])]),e._v(" "),s("tr",[s("td",[e._v("Optional?")]),e._v(" "),s("td",[e._v("\n              If set to "),s("b",[e._v("Yes")]),e._v(", users can skip this input. If set to "),s("b",[e._v("No")]),e._v(", users are required to provide this input.\n            ")])]),e._v(" "),s("tr",[s("td",[e._v("Hint")]),e._v(" "),s("td",[e._v("\n              Hints are displayed just below the input field  for users when filling in the input field.\n            ")])]),e._v(" "),s("tr",[s("td",[e._v("Example input value")]),e._v(" "),s("td",[e._v("\n              Displays a placeholder for the field in the task module. Useful in giving the user a sense of what the requested input should look like, as well as the desired format.\n            ")])]),e._v(" "),s("tr",[s("td",[e._v("Visible?")]),e._v(" "),s("td",[e._v("\n              If "),s("b",[e._v("Yes")]),e._v(", command will not show up in task modules. Useful if the parameter is a record ID that is not human-readable. Defaults to "),s("b",[e._v("No")]),e._v(".\n            ")])]),e._v(" "),s("tr",[s("td",[e._v("Options")]),e._v(" "),s("td",[e._v("\n              Comma-separated list of options, e.g. "),s("b",[e._v("APPROVED, REJECTED, EXPIRED")]),e._v(". If the display name and athe value are different, separate the two by a colon, e.g. "),s("b",[e._v("High:1,Medium:2,Low:3")]),e._v(".\n            ")])])])]),e._v(" "),s("h5",{attrs:{id:"advanced-methods-to-pass-parameter-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#advanced-methods-to-pass-parameter-values"}},[e._v("#")]),e._v(" Advanced methods to pass parameter values")]),e._v(" "),s("p",[e._v("Parameter values can also be passed by buttons and task modules as they invoke a Workbot command. Typically, you use parameters to pass context to the invoked Workbot recipe.")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(189),alt:"Button with params example",width:"1648",height:"1037"}}),e._v(" "),s("em",[e._v("The 'Re-open issue' button not only invokes the 'reopen_issue' command - it's also passing parameters!")])],1),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(190),alt:"Button with params recipe",width:"3840",height:"1202"}}),e._v(" "),s("em",[e._v("The 'Re-open issue' button is configured to pass the 'sys_id' so that the 'reopen_issue' recipe knows which issue to re-open")])],1),e._v(" "),s("p",[e._v("Another way to pass a parameter is by using a pick list "),s("strong",[e._v("Choice parameter")]),e._v(".")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(31),alt:"Choice param recipe",width:"3840",height:"2206"}}),e._v(" "),s("em",[e._v("The choice parameter will take its value from a choice (if it's chosen)")])],1),e._v(" "),s("p",[e._v("The choice parameter is passed when a button from the same message is submitted (along with any other parameters the button may have).")]),e._v(" "),s("p",[s("DocImage",{attrs:{src:a(38),alt:"Choice param",width:"1036",height:"644"}}),e._v(" "),s("em",[e._v("The 'Next' button also passes the 'opportunity_id' of 'Google' onto the command recipe that it invokes")])],1),e._v(" "),s("h1",{attrs:{id:"learn-more"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learn-more"}},[e._v("#")]),e._v(" Learn more")]),e._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/workbot-for-teams/using-workbot-for-teams.html"}},[e._v("Using Workbot for MS Teams")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/workbot-for-teams/workbot-actions.html"}},[e._v("Workbot actions")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/workbot-for-teams/buttons-choices-task-modules.html"}},[e._v("Workbot buttons, pick lists, and task modules")])],1)])])}),[],!1,null,null,null);t.default=r.exports},31:function(e,t,a){e.exports=a.p+"assets/img/choice-param-recipe.bb8f6c2a.png"},33:function(e,t,a){e.exports=a.p+"assets/img/workbot-command-example.497690fb.png"},38:function(e,t,a){e.exports=a.p+"assets/img/choice-param.dd47d52b.png"},39:function(e,t,a){e.exports=a.p+"assets/img/button-command.c65a94ca.png"}}]);