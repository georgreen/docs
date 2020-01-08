(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{1821:function(t,o,e){t.exports=e.p+"assets/img/workbot-command-example-1.4d410b61.png"},1822:function(t,o,e){t.exports=e.p+"assets/img/setup-workbot.b032b4fe.png"},1823:function(t,o,e){t.exports=e.p+"assets/img/permissions.f44f214e.png"},1824:function(t,o,e){t.exports=e.p+"assets/img/account-created.3ebd90e0.png"},1825:function(t,o,e){t.exports=e.p+"assets/img/1st-app.0c9ea1bd.png"},1826:function(t,o,e){t.exports=e.p+"assets/img/2nd-app.31988efe.png"},1827:function(t,o,e){t.exports=e.p+"assets/img/choose-recipe.6dba8346.png"},1828:function(t,o,e){t.exports=e.p+"assets/img/use-recipe.6f460ae4.png"},1829:function(t,o,e){t.exports=e.p+"assets/img/link-teams-success.3fab436a.png"},1830:function(t,o,e){t.exports=e.p+"assets/img/salesforce-login.b33d5cb7.png"},1831:function(t,o,e){t.exports=e.p+"assets/img/link-salesforce-success.18c80e1a.png"},1832:function(t,o,e){t.exports=e.p+"assets/img/recipe-ready.3900b43f.png"},1833:function(t,o,e){t.exports=e.p+"assets/img/teams-help.971dc11e.png"},185:function(t,o,e){t.exports=e.p+"assets/img/post-reply-recipe.ec730e13.png"},186:function(t,o,e){t.exports=e.p+"assets/img/command-recipes.3ec9aa35.png"},187:function(t,o,e){t.exports=e.p+"assets/img/post-reply.d4709840.png"},2566:function(t,o,e){"use strict";e.r(o);var r=e(0),s=Object(r.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"getting-started-with-workbot-for-ms-teams-by-workato"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-workbot-for-ms-teams-by-workato"}},[t._v("#")]),t._v(" Getting started with Workbot for MS Teams by Workato")]),t._v(" "),r("h2",{attrs:{id:"what-is-workato"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-workato"}},[t._v("#")]),t._v(" What is Workato?")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("If you're familiar with Workato, or want to quickly get started with Workbot, skip to "),r("a",{attrs:{href:"#setup-workbot"}},[t._v("Setup Workbot")]),t._v(".")])])]),t._v(" "),r("p",[t._v("Workato helps you automate business workflows across cloud apps, on-premise apps and employees, e.g. New case in Salesforce will create issue in Jira & incident in ServiceNow, and more.")]),t._v(" "),r("p",[t._v("Workato combines enterprise-grade workflow automation with the ease-of-use expected from consumer apps, allowing business users and IT to quickly build workflow automations.")]),t._v(" "),r("h2",{attrs:{id:"workbot-for-ms-teams-powered-by-workato"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workbot-for-ms-teams-powered-by-workato"}},[t._v("#")]),t._v(" Workbot for MS Teams, powered by Workato")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("If you're familiar with Workbot, skip to "),r("a",{attrs:{href:"#setup-workbot"}},[t._v("Setup Workbot")]),t._v(".")])])]),t._v(" "),r("p",[t._v("Workbot is a bot platform built on top of Workato. It helps you run these business workflows directly from Teams.")]),t._v(" "),r("p",[t._v("These business workflows can be initiated from Teams by using "),r("router-link",{attrs:{to:"/workbot-for-teams/workbot-triggers.html"}},[t._v("Workbot commands")]),t._v(". When the command is sent to Workbot (via direct messages or channels), it will look for the corresponding workflow in Workato and execute the workflow steps.")],1),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1821),alt:"Command example",width:"1436",height:"1316"}}),t._v(" "),r("em",[t._v("Sending a 'view_opportunities' command. The retrieves the open opportunities in Salesforce, then sends a reply")])],1),t._v(" "),r("p",[t._v("These workflows — combined with Workbot — allow you to retrieve, create and update data across all your apps - directly within Teams.")]),t._v(" "),r("p",[t._v("In Workato, these powerful workflows are known as "),r("strong",[t._v("Recipes")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"recipes"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recipes"}},[t._v("#")]),t._v(" Recipes")]),t._v(" "),r("p",[t._v("Recipes are automated workflows built by users that can span multiple apps.")]),t._v(" "),r("p",[t._v("Each recipe comprises of a "),r("strong",[t._v("Trigger")]),t._v(" and one or more "),r("strong",[t._v("Actions")]),t._v(" that are carried out when a trigger event occurs.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(185),alt:"Recipe",width:"3840",height:"712"}})],1),t._v(" "),r("h2",{attrs:{id:"workbot-command-trigger"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#workbot-command-trigger"}},[t._v("#")]),t._v(" Workbot command trigger")]),t._v(" "),r("p",[t._v("Workbot commands allow you to trigger recipes from Teams. These recipes can then perform actions in your apps (e.g. creating new ServiceNow tickets, listing Salesforce opportunities).")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(186),alt:"Command recipe",width:"3840",height:"690"}}),t._v(" "),r("em",[t._v("A recipe configured with a 'newissue' Workbot command")])],1),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("For more info, go to "),r("router-link",{attrs:{to:"/workbot-for-teams/workbot-triggers.html"}},[t._v("Workbot commands")])],1),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"setup-workbot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-workbot"}},[t._v("#")]),t._v(" Setup Workbot")]),t._v(" "),r("h3",{attrs:{id:"requirements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),r("p",[t._v("To use Workbot for Teams, a "),r("a",{attrs:{href:"https://support.office.com/en-ie/article/what-account-do-i-use-with-office-and-why-do-i-need-one-914e6610-2763-47ac-ab36-602a81068235?ui=en-US&rs=en-IE&ad=IE#bkmk_msavsworkschool",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("Microsoft work or school account")]),r("OutboundLink")],1),t._v(" is required. These accounts are created by your organization’s administrator to enable a member of your organization access to all Microsoft cloud services such as Microsoft Azure, Office 365, Microsoft Teams, and more.")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Microsoft accounts (typically created for personal use) are not supported.")])])]),t._v(" "),r("h3",{attrs:{id:"microsoft-work-or-school-account-permissions"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-work-or-school-account-permissions"}},[t._v("#")]),t._v(" Microsoft work or school account permissions")]),t._v(" "),r("p",[t._v("Workbot for Teams works best with the following Microsoft work or school account permissions:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("User.ReadWrite.All\nUser.Read.All\nUser.Read\nGroup.ReadWrite.All\nGroup.Read.All\nDirectory.Read.All\nDirectory.ReadWrite.All\noffline_access\n")])])]),r("p",[t._v("Contact your administrator to ensure that that your connected work or school account has been granted the permissions above.")]),t._v(" "),r("h2",{attrs:{id:"setup"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),r("p",[t._v("In Teams, go to the Workbot welcome message and click on "),r("strong",[t._v("Login")]),t._v(". If you don't have yet have a Workato account, click on "),r("strong",[t._v("create a new one")]),t._v(" instead.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1822),alt:"Setup Workbot",width:"1690",height:"744"}}),t._v(" "),r("em",[t._v("Click on 'Login' or 'create a new one' to start setting up Workbot")])],1),t._v(" "),r("p",[t._v("This should open your browser (or a browser tab) and prompt you to log into your Microsoft account:")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(271),alt:"Account created",width:"2678",height:"1358"}})],1),t._v(" "),r("p",[t._v("When prompted to allow Workato access your info, click "),r("strong",[t._v("Yes")]),t._v(":")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1823),alt:"Permissions",width:"2880",height:"1376"}})],1),t._v(" "),r("p",[t._v("Your Workato account has now been created using your Microsoft account. It's now time to create your first Workbot recipe!")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1824),alt:"Account created",width:"3570",height:"1680"}})],1),t._v(" "),r("h2",{attrs:{id:"your-first-workbot-recipe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#your-first-workbot-recipe"}},[t._v("#")]),t._v(" Your first Workbot recipe")]),t._v(" "),r("p",[t._v("Search for Workbot for Teams, and choose it as your 1st app:")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1825),alt:"1st app",width:"3570",height:"1790"}})],1),t._v(" "),r("p",[t._v("Choose a 2nd app to connect. In the example below, Salesforce is selected:")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1826),alt:"2nd app",width:"3570",height:"1680"}})],1),t._v(" "),r("p",[t._v("Click on "),r("strong",[t._v("Find recipes")]),t._v(".")]),t._v(" "),r("p",[t._v("The recipes displayed have been built by the Workato community.")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1827),alt:"Choose recipe",width:"3544",height:"1622"}})],1),t._v(" "),r("p",[t._v("For this guide, we will be choosing the "),r("strong",[t._v("View open opportunities in Salesforce")]),t._v(" recipe:")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1828),alt:"Use recipe",width:"3544",height:"2745"}})],1),t._v(" "),r("p",[t._v("Click on "),r("strong",[t._v("Use this recipe")]),t._v(" to continue.")]),t._v(" "),r("h3",{attrs:{id:"connecting-your-apps"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connecting-your-apps"}},[t._v("#")]),t._v(" Connecting your apps")]),t._v(" "),r("p",[t._v("To connect to Workbot for Microsoft Teams, click on "),r("strong",[t._v("Link your account")]),t._v(":")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(272),alt:"Link Teams",width:"3544",height:"1752"}})],1),t._v(" "),r("p",[t._v("Log into your Microsoft:")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(271),alt:"Log into Microsoft",width:"2678",height:"1358"}})],1),t._v(" "),r("p",[t._v("If successful, you should see this screen:\n"),r("DocImage",{attrs:{src:e(1829),alt:"Link Teams success",width:"3544",height:"1622"}})],1),t._v(" "),r("p",[t._v("To connect to Salesforce, click on "),r("strong",[t._v("Link your account")]),t._v(":")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(272),alt:"Link Teams",width:"3544",height:"1752"}})],1),t._v(" "),r("p",[t._v("Log into your Salesforce:")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1830),alt:"Log into Microsoft",width:"2444",height:"1350"}})],1),t._v(" "),r("p",[t._v("If successful, you should see this screen:\n"),r("DocImage",{attrs:{src:e(1831),alt:"Link Teams success",width:"3544",height:"2134"}})],1),t._v(" "),r("p",[t._v("Your apps are connected! Click "),r("strong",[t._v("Next")]),t._v(" to test the recipe.")]),t._v(" "),r("h3",{attrs:{id:"starting-your-recipe"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#starting-your-recipe"}},[t._v("#")]),t._v(" Starting your recipe")]),t._v(" "),r("p",[t._v("After a few seconds, your recipe should be ready for use:\n"),r("DocImage",{attrs:{src:e(1832),alt:"Recipe ready",width:"3544",height:"2044"}})],1),t._v(" "),r("p",[t._v("Close the pop-up, and click on "),r("strong",[t._v("Start recipe")]),t._v(".")]),t._v(" "),r("p",[t._v("Go to Teams and send Workbot the "),r("strong",[t._v("view_opportunities")]),t._v(" command, or type "),r("strong",[t._v("help")]),t._v(" and choose "),r("strong",[t._v("View opportunities")]),t._v(".")]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(187),alt:"Post reply",width:"1816",height:"1143"}}),t._v(" "),r("em",[t._v("Example of a post reply listing open opportunities from Salesforce")])],1),t._v(" "),r("h2",{attrs:{id:"the-help-command"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-help-command"}},[t._v("#")]),t._v(" The 'help' command")]),t._v(" "),r("p",[t._v("Bot commands can be displayed using 'help' when your Workato account meets all the following conditions:")]),t._v(" "),r("ul",[r("li",[t._v("has a connected Workbot for Teams connection,")]),t._v(" "),r("li",[t._v("has a recipe with the Workbot for Teams "),r("code",[t._v("New command")]),t._v(" trigger and")]),t._v(" "),r("li",[t._v("the recipe has been started")])]),t._v(" "),r("p",[r("DocImage",{attrs:{src:e(1833),alt:"Help command",width:"1670",height:"914"}})],1),t._v(" "),r("h2",{attrs:{id:"additional-info"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-info"}},[t._v("#")]),t._v(" Additional info")]),t._v(" "),r("p",[t._v("Head over to our documentation for more information on how Workbot works!")]),t._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"/workbot-for-teams/workbot-triggers.html"}},[t._v("Workbot triggers")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/workbot-for-teams/workbot-actions.html"}},[t._v("Workbot actions")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/workbot-for-teams/buttons-choices-task-modules.html"}},[t._v("Workbot buttons, pick lists, and task modules")])],1)])])}),[],!1,null,null,null);o.default=s.exports},271:function(t,o,e){t.exports=e.p+"assets/img/microsoft-login.d848e246.png"},272:function(t,o,e){t.exports=e.p+"assets/img/link-teams.d536f07c.png"}}]);