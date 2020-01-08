(window.webpackJsonp=window.webpackJsonp||[]).push([[421],{1765:function(e,t,o){e.exports=o.p+"assets/img/hourly-key-rotation.9f7e61ac.png"},2550:function(e,t,o){"use strict";o.r(t);var a=o(0),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"key-rotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#key-rotation"}},[e._v("#")]),e._v(" Key rotation")]),e._v(" "),a("p",[e._v("Due to several highly publicized instances of data breach, most enterprises are sensitive and insistent on protecting their data when using various cloud applications. Security comes in many forms, one of them is how the data is stored securely.")]),e._v(" "),a("p",[e._v("In addition, with regulations such as GDPR, data protection has become increasingly important for all organizations, big and small.")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("By default, Workato encrypts all data that must be stored. Key rotation automatically rotates  encryption keys every hour. New rotated keys are considered active keys used for encrypting the data for storage. Active keys become inactive at the end of the hour from when it was generated. Inactive keys are then only used for decrypting data.")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("By regularly rotating encryption key used every hour, volume of data that remains unprotected is limited if a key is compromised.")])]),e._v(" "),a("li",[a("p",[e._v("Workato follows industry best practice to store encryption key and encrypted data in separate storage providing greater level of protection against data compromise.")])]),e._v(" "),a("li",[a("p",[e._v("At the end of data retention period, all encrypted data and the key used to encrypt it are destroyed")])]),e._v(" "),a("li",[a("p",[e._v("Key rotation restricts the usage of encryption key to just one hour")])])]),e._v(" "),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),a("p",[a("DocImage",{attrs:{src:o(1765),alt:"Encryption key rotation",width:"960",height:"720"}}),e._v(" "),a("em",[e._v("Example encryption key rotation")])],1),e._v(" "),a("ul",[a("li",[e._v("Workato key management generates new encryption key "),a("code",[e._v("Key1")]),e._v(" when needed")]),e._v(" "),a("li",[e._v("For next one hour, the newly generated encryption key "),a("code",[e._v("Key1")]),e._v(" is considered active key and is used to encrypt the data "),a("code",[e._v("Job1")]),e._v(" and "),a("code",[e._v("Job2")])]),e._v(" "),a("li",[e._v("At the end of one hour, encryption key is rotated and new "),a("code",[e._v("Key2")]),e._v(" key is generated")]),e._v(" "),a("li",[a("code",[e._v("Key2")]),e._v(" is used to encrypt data beginning "),a("code",[e._v("10:00 AM")]),e._v(" for "),a("code",[e._v("Job3")]),e._v(" and "),a("code",[e._v("Job4")])]),e._v(" "),a("li",[a("code",[e._v("Key1")]),e._v(" becomes inactive and is used only for decrypting data")]),e._v(" "),a("li",[e._v("Similarly, "),a("code",[e._v("Key2")]),e._v(" becomes inactive at "),a("code",[e._v("11:00 AM")]),e._v(" and is used only for decrypting data")]),e._v(" "),a("li",[e._v("When "),a("router-link",{attrs:{to:"/security/data-protection/hour-data-retention.html"}},[e._v("data retention period")]),e._v(" ends, the encryption key and the encrypted data is destroyed")],1),e._v(" "),a("li",[e._v("Above process repeats every hour")])]),e._v(" "),a("p",[a("em",[a("strong",[e._v("Does customer need to do anything to get key rotation?")])])]),e._v(" "),a("p",[e._v("The encryption key rotation is completely transparent and automatic for Workato customers.")])])}),[],!1,null,null,null);t.default=r.exports}}]);