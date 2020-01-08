(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{2416:function(t,n,s){"use strict";s.r(n);var a=s(0),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"header-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#header-authentication"}},[t._v("#")]),t._v(" Header Authentication")]),t._v(" "),s("p",[t._v("For APIs requiring header authentication, this can be easily accomplished if the token is supplied by the user directly through user input fields.")]),t._v(" "),s("h2",{attrs:{id:"example-header-authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-header-authentication"}},[t._v("#")]),t._v(" Example header authentication")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'My connector'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    fields"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        control_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        optional"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        hint"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"Available in 'My Profile' page\"")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    authorization"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'custom_auth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      apply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n        headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  test"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  triggers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  object_definitions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  picklists"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  methods"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Some code here")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"apply"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply"}},[t._v("#")]),t._v(" apply")]),t._v(" "),s("p",[t._v("Synonym of the "),s("code",[t._v("credentials")]),t._v(" block: Basically how to apply the credentials to an action/trigger/test request. All requests made in actions, triggers, tests and pick lists will be applied with the credentials defined here. In the example above, the apply block pulls the "),s("code",[t._v("token")]),t._v(" field directly from user input fields in the "),s("code",[t._v("connection")]),t._v(" object.")]),t._v(" "),s("p",[t._v("Here are a list of accepted inputs into the apply block")]),t._v(" "),s("div",{staticClass:"language-ruby extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ruby"}},[s("code",[t._v("apply"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" lambda "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adds in URL parameters passed as a hash object")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i.e. authtoken=[connection['authtoken']]")]),t._v("\n  params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authtoken"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'authtoken'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Adds in payload fields (PATCH, POST, PUT only) pass as hash")]),t._v("\n  payload"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("grant_type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"authorization_code"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          client_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          client_secret"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_secret"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auth_code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Adds in headers into every request passed as a hash.")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The variable access_token can be retrieved from input prompts defined in the 'fields' schema earlier or a return from the acquire block")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i.e. Authorization : Bearer [given access token]")]),t._v("\n  headers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Used in conjunction with password function")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# i.e. sends the input as username and password in HTTP authentication")]),t._v("\n  user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   \n  password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("connection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("The "),s("code",[t._v("apply")]),t._v(" block will not be applied to any requests made in "),s("code",[t._v("acquire")]),t._v(". So you will have to include the required credentials for a successful API request there.")])]),t._v(" "),s("h3",{attrs:{id:"other-authentication-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-authentication-methods"}},[t._v("#")]),t._v(" Other authentication methods")]),t._v(" "),s("p",[t._v("Check out the other authentication methods we support as well as how to set up a custom connector that works for on-premise connections. "),s("router-link",{attrs:{to:"/developing-connectors/sdk/authentication.html"}},[t._v("Go back to our list of authentication methods")]),t._v(" or check our our "),s("router-link",{attrs:{to:"/developing-connectors/sdk/best-practices.html"}},[t._v("best practices")]),t._v(" for some tips.")],1),t._v(" "),s("h3",{attrs:{id:"next-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-section"}},[t._v("#")]),t._v(" Next section")]),t._v(" "),s("p",[t._v("If you're already familiar with the authentication methods we support, check out the actions that our SDK supports as well as how to implement them. "),s("router-link",{attrs:{to:"/developing-connectors/sdk/action.html"}},[t._v("Learn more")])],1)])}),[],!1,null,null,null);n.default=e.exports}}]);