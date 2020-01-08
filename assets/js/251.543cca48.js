(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{1191:function(e,t,s){e.exports=s.p+"assets/img/help-text-link.c2ea46ac.png"},1192:function(e,t,s){e.exports=s.p+"assets/img/field-level-help.badef6ba.png"},2398:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"connector-building-usability-rules"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#connector-building-usability-rules"}},[e._v("#")]),e._v(" Connector building - Usability rules")]),e._v(" "),n("p",[e._v("Now that you’ve learned some of the concepts behind creating object-based actions and triggers, you should now begin testing it not only in the debugger console but when used as a recipe. When you reach this stage, you may also start to take note of certain aspects of your connector which are not as usable as you would hope. Good connectors are not only well organized in terms of code but place user experience front and center in the entire recipe building experience. Here are some rules that distinguish good connectors from bad ones.")]),e._v(" "),n("ol",[n("li",[e._v("Descriptive help texts")]),e._v(" "),n("li",[e._v("User friendly input fields")]),e._v(" "),n("li",[e._v("Descriptive error messages")])]),e._v(" "),n("h2",{attrs:{id:"descriptive-help-texts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#descriptive-help-texts"}},[e._v("#")]),e._v(" Descriptive help texts")]),e._v(" "),n("p",[e._v("Help texts in actions are critical in helping your users plug any knowledge gaps they may have about the actions you've built. Here are some important details that you should include in the help texts of your actions:")]),e._v(" "),n("ol",[n("li",[e._v("API versions supported")])]),e._v(" "),n("p",[e._v("API versions of the application you are connecting to help manage expectations for your users. They would have a better understanding of what to expect in terms of functionality for your connector.")]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Object specific help")])]),e._v(" "),n("p",[e._v("Different objects may require different action level help hints. Help texts can be easily changed based on the object users select.")]),e._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[e._v("help"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" lambda "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("do")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" picklist_label"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'object'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("==")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'invoice'")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Creates an invoice in XYZ. Invoices in XYZ accounting are essential "')]),e._v(" \\\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"components of the platform. This action supports the creation of invoices "')]),e._v(" \\\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"including custom fields"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      learn_more_url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"docs.xyz.com"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      learn_more_text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Learn to setup this action"')]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("else")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      body"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Creates an object in XYZ. First, select from a list of "')]),e._v(" \\\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'objects that we currently support. After selecting your object,'")]),e._v(" \\\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("' dynamic input fields specific to the object selected '")]),e._v(" \\\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'will be populated.'")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n")])])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Links to appropriate documentation")])]),e._v(" "),n("p",[e._v("Help texts can also include links to appropriate documentation if users need more information about how to set up this action.")]),e._v(" "),n("p",[n("DocImage",{attrs:{src:s(1191),alt:"Help text hints",width:"1518",height:"912"}}),e._v(" "),n("em",[e._v("Linking to documentation can help your users when not all the information can be contained in a small paragraph")])],1),e._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Field level hints")])]),e._v(" "),n("p",[e._v("Hints are an essential way to guide your users on how to use a specific input field. Let them know about input expected such as whether you require the timestamp to be in a specific date format (iso8601 or DD/MM/YYYY) etc.")]),e._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[e._v("Field level help")])]),e._v(" "),n("p",[e._v("In cases where it is critical for your users to read this to configure the action properly, we suggest using field level help. This should be used sparingly.")]),e._v(" "),n("h3",{attrs:{id:"sample-code"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sample-code"}},[e._v("#")]),e._v(" Sample code")]),e._v(" "),n("div",{staticClass:"language-ruby extra-class"},[n("pre",{pre:!0,attrs:{class:"language-ruby"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    control_type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"text"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Txn date"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"string"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"TxnDate"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    optional"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    sticky"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    help"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      title"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Extra info"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"This field is super important"')]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),n("p",[n("DocImage",{attrs:{src:s(1192),alt:"Help text hints",width:"1504",height:"358"}}),e._v(" "),n("em",[e._v("Bring attention to a specific field using field level help")])],1),e._v(" "),n("h2",{attrs:{id:"user-friendly-input-fields"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#user-friendly-input-fields"}},[e._v("#")]),e._v(" User friendly input fields")]),e._v(" "),n("p",[e._v("Here are some simple rules that would help fine-tune your connector to make it as user-friendly as possible. When creating connectors with the eventual aim of getting them listed on Workato as globally scope connectors, these rules will form an important part of the UIUX review that we put each connector through.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Is the label of the input field descriptive enough? Be as explicit as possible when defining labels on input fields so your end users are on the same page as you.\nWhile the "),n("code",[e._v("name")]),e._v(" of the field may be "),n("code",[e._v("id")]),e._v(", changing the label to "),n("code",[e._v("Invoice ID")]),e._v(" makes it immediately clear to end users what they are doing.")])]),e._v(" "),n("li",[n("p",[e._v("Is the type and control_type of the input field accurate? Types and control_types help your users know what kind of values they are working with. Workato defaults the type and control_type to string and text if nothing is defined.")])]),e._v(" "),n("li",[n("p",[e._v("Did you declare hints for input fields that might still be ambiguous after changing the label? Using hints are a great way to guide your users even more. Links in HTML format can also be used.")])]),e._v(" "),n("li",[n("p",[e._v("Does this input field only accept a defined set of values? Using select dropdowns make it easier for your users to give correct input instead of typing in their answers manually. This also reduces the number of errors they might face.")])]),e._v(" "),n("li",[n("p",[e._v("Does this input field accept ID values? For example, a "),n("code",[e._v("create invoice")]),e._v(" action in XYZ accounting might require an input field that contains the ID of the associated customer. Since your users might not have IDs of customers on hand, but the name of the customer instead, you may consider making the input field a picklist which shows customer names as the label but provides the ID of the customer as the value instead.")])]),e._v(" "),n("li",[n("p",[e._v("When using dropdowns, always also include a toggle_field option that allows your users to map datapills if they need to. While a dropdown is great, sometimes your users may need to map datapills instead. Remember to change the toggle_hints accordingly.")])]),e._v(" "),n("li",[n("p",[e._v("Is this dropdown a config field? If yes, ensure that the secondary toggle field has "),n("code",[e._v("control_type")]),e._v(" set to "),n("code",[e._v("plain-text")]),e._v(" to prevent datapills from being mapped. Config fields should never accept datapills as other input fields in the action rely on the information.")])]),e._v(" "),n("li",[n("p",[e._v("Are all required fields in the action or trigger labeled as required? Users should be able to quickly understand which fields they need to fill in for this action to be valid.")])]),e._v(" "),n("li",[n("p",[e._v("Are there any optional fields that will be commonly used? Making these fields sticky can bring end-users attention to their input fields instead of having them search for them.")])]),e._v(" "),n("li",[n("p",[e._v("Are you dynamically retrieving possible custom fields for end users of your connector? Use the "),n("code",[e._v("custom")]),e._v(" parameter in each custom field to provide your users with feedback on which fields are standard and which fields are custom to them.")])])]),e._v(" "),n("p",[e._v("For each input field, we suggest running through this series of questions quickly. Once you get the hang of it, it becomes a simple process of highlighting input fields which need adjustments before going back into the schema definitions to make changes.")]),e._v(" "),n("h2",{attrs:{id:"descriptive-error-messages"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#descriptive-error-messages"}},[e._v("#")]),e._v(" Descriptive error messages")]),e._v(" "),n("p",[e._v("Descriptive error messages are a crucial part of the recipe building experience for end-users. Without the proper error messages, users have a tough time figuring out why their recipes are failing. If you haven’t checked out the possible ways to surface errors on Workato, do check out our "),n("router-link",{attrs:{to:"/developing-connectors/sdk/error-handling.html"}},[e._v("error handling docs.")])],1),e._v(" "),n("p",[e._v("Here are some general rules to include proper error handling in your connector.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Does your connector use picklists or dynamic schema of any sort? Chaining an "),n("code",[e._v("after_error_response")]),e._v(" function allows your users to receive exact information of what may have gone wrong. "),n("router-link",{attrs:{to:"/developing-connectors/sdk/error-handling.html#object-definition-error-handling"}},[e._v("Example here.")])],1)]),e._v(" "),n("li",[n("p",[e._v("Does your connector have certain fields that are required together, such as a start date and end date? Whilst these fields may not be required all the time, some fields are often required together. In cases like these, validations may help surface these errors better and also reduce the number of API calls made unnecessarily. "),n("router-link",{attrs:{to:"/developing-connectors/sdk/error-handling.html#input-validation"}},[e._v("Example here.")])],1)]),e._v(" "),n("li",[n("p",[e._v("Does the API you are connecting to respond with appropriate HTTP status codes? In certain cases, APIs may send back responses that should actually be errors but have their HTTP status as "),n("code",[e._v("200")]),e._v(". In cases like these, using an "),n("code",[e._v("after_error_response")]),e._v(" function can help highlight issues to your users instead. "),n("router-link",{attrs:{to:"/developing-connectors/sdk/error-handling.html#response-validation"}},[e._v("Example here.")])],1)])]),e._v(" "),n("h4",{attrs:{id:"previous-chapter"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#previous-chapter"}},[e._v("#")]),e._v(" Previous Chapter")]),e._v(" "),n("h5",{attrs:{id:"common-code-patterns"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#common-code-patterns"}},[e._v("#")]),e._v(" "),n("router-link",{attrs:{to:"/developing-connectors/cookbook/connector-building-code-patterns.html"}},[e._v("Common code patterns")])],1)])}),[],!1,null,null,null);t.default=a.exports}}]);