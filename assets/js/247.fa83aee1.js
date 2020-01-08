(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{1105:function(t,e,r){t.exports=r.p+"assets/img/updated-folder-trigger.6e25fefe.png"},1106:function(t,e,r){t.exports=r.p+"assets/img/updated-folder-trigger-real-time.76fbfb68.png"},2334:function(t,e,r){"use strict";r.r(e);var d=r(0),o=Object(d.a)({},(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[d("h1",{attrs:{id:"wrike-new-updated-folder-triggers"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#wrike-new-updated-folder-triggers"}},[t._v("#")]),t._v(" Wrike - New/updated folder triggers")]),t._v(" "),d("p",[t._v("Folders are one of the main ways to organize and manage information on Wrike.")]),t._v(" "),d("h2",{attrs:{id:"new-updated-folder-trigger"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-folder-trigger"}},[t._v("#")]),t._v(" New/updated folder trigger")]),t._v(" "),d("p",[t._v("This trigger picks up folders that are created or updated and returns the folder tree data. Each record is processed as a separate job.")]),t._v(" "),d("p",[d("DocImage",{attrs:{src:r(1105),alt:"New/updated folder trigger",width:"1249",height:"734"}}),t._v(" "),d("em",[t._v("New/updated folder trigger")])],1),t._v(" "),d("h3",{attrs:{id:"input-fields"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#input-fields"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),d("table",{staticClass:"unchanged rich-diff-level-one"},[d("thead",[d("tr",[d("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),d("th",[t._v("Description")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("When first started, this recipe should pick up events from")]),t._v(" "),d("td",[t._v("\n        Folders created or updated after this time will be processed by the recipe. If left blank, the default will be set to "),d("b",[t._v("one hour")]),t._v(" before the recipe is first started.\n      ")])])])]),t._v(" "),d("h3",{attrs:{id:"output-fields"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#output-fields"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),d("table",{staticClass:"unchanged rich-diff-level-one"},[d("thead",[d("tr",[d("th",{attrs:{width:"25%"}},[t._v("Output field")]),t._v(" "),d("th",[t._v("Description")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("\n        The ID of the folder.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Account ID")]),t._v(" "),d("td",[t._v("\n        The ID of the account.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Title")]),t._v(" "),d("td",[t._v("\n        The title of the folder.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Updated date")]),t._v(" "),d("td",[t._v("\n        The date this folder was updated.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Created date")]),t._v(" "),d("td",[t._v("\n        The date this folder was created.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Description")]),t._v(" "),d("td",[t._v("\n        The description of the folder. Will be blank if not specified.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Users who share the folder")]),t._v(" "),d("td",[t._v("\n        The list of users who share the folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("User ID")]),t._v(" "),d("td",[t._v("The ID of the user who shares this folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of users retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Parent folder")]),t._v(" "),d("td",[t._v("\n        The list of parent folders of this folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("The folder ID of the parent folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of parent folders retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Child folder")]),t._v(" "),d("td",[t._v("\n        The list of child folders of this folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("The folder ID of the child folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of child folders retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Super parent folder")]),t._v(" "),d("td",[t._v("\n        The list of super parent folder to this folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("The folder ID of the super parent folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of super parent folders retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Scope")]),t._v(" "),d("td",[t._v("\n        The scope of the folder.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Has attachments")]),t._v(" "),d("td",[t._v("\n        Indicates if the folder has attachments.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Permalink")]),t._v(" "),d("td",[t._v("\n        The link to open the folder in a web workspace. This is only accessible if the user has the appropriate access.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Workflow ID")]),t._v(" "),d("td",[t._v("\n        The ID of the folder workflow.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Metadata")]),t._v(" "),d("td",[t._v("\n        The metadata of this folder. The metadata list size corresponds to the number of metadata entries retrieved.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Project")]),t._v(" "),d("td",[t._v("\n        The project properties of this folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Author")]),t._v(" "),d("td",[t._v("The author who created the project.")])]),t._v(" "),d("tr",[d("td",[t._v("Owner ID")]),t._v(" "),d("td",[t._v("\n                The list of IDs of project owners.\n                "),d("table",[d("tbody",[d("tr",[d("td",[t._v("User ID")]),t._v(" "),d("td",[t._v("The user ID of the project owner.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of project owners retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Status")]),t._v(" "),d("td",[t._v("The status of the project.")])]),t._v(" "),d("tr",[d("td",[t._v("Start date")]),t._v(" "),d("td",[t._v("The date this project was started.")])]),t._v(" "),d("tr",[d("td",[t._v("End date")]),t._v(" "),d("td",[t._v("The date this project was ended.")])]),t._v(" "),d("tr",[d("td",[t._v("Created date")]),t._v(" "),d("td",[t._v("The date this project was created.")])]),t._v(" "),d("tr",[d("td",[t._v("Completed date")]),t._v(" "),d("td",[t._v("The date this project was completed.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Custom fields")]),t._v(" "),d("td",[t._v("\n        Includes data from custom field(s).\n      ")])])])]),t._v(" "),d("h2",{attrs:{id:"new-updated-folder-trigger-real-time"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#new-updated-folder-trigger-real-time"}},[t._v("#")]),t._v(" New/updated folder trigger (real-time)")]),t._v(" "),d("p",[t._v("This trigger picks up folders as soon as they are created or updated and returns the folder tree data. Each record is processed as a separate job.")]),t._v(" "),d("p",[d("DocImage",{attrs:{src:r(1106),alt:"New/updated folder trigger(real time)",width:"1249",height:"762"}}),t._v(" "),d("em",[t._v("New/updated folder trigger (real time)")])],1),t._v(" "),d("h3",{attrs:{id:"input-fields-2"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#input-fields-2"}},[t._v("#")]),t._v(" Input fields")]),t._v(" "),d("table",{staticClass:"unchanged rich-diff-level-one"},[d("thead",[d("tr",[d("th",{attrs:{width:"25%"}},[t._v("Input field")]),t._v(" "),d("th",[t._v("Description")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("When first started, this recipe should pick up events from")]),t._v(" "),d("td",[t._v("\n        Folders created or updated after this time will be processed by the recipe. If left blank, the default will be set to "),d("b",[t._v("one hour")]),t._v(" before the recipe is first started.\n      ")])])])]),t._v(" "),d("h3",{attrs:{id:"output-fields-2"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#output-fields-2"}},[t._v("#")]),t._v(" Output fields")]),t._v(" "),d("table",{staticClass:"unchanged rich-diff-level-one"},[d("thead",[d("tr",[d("th",{attrs:{width:"25%"}},[t._v("Output field")]),t._v(" "),d("th",[t._v("Description")])])]),t._v(" "),d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("\n        The ID of the folder.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Account ID")]),t._v(" "),d("td",[t._v("\n        The ID of the account.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Title")]),t._v(" "),d("td",[t._v("\n        The title of the folder.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Updated date")]),t._v(" "),d("td",[t._v("\n        The date this folder was updated.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Created date")]),t._v(" "),d("td",[t._v("\n        The date this folder was created.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Description")]),t._v(" "),d("td",[t._v("\n        The description of the folder. Will be blank if not specified.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Users who share the folder")]),t._v(" "),d("td",[t._v("\n        The list of users who share the folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("User ID")]),t._v(" "),d("td",[t._v("The ID of the user who shares this folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of users retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Parent folder")]),t._v(" "),d("td",[t._v("\n        The list of parent folders of this folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("The folder ID of the parent folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of parent folders retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Child folder")]),t._v(" "),d("td",[t._v("\n        The list of child folders of this folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("The folder ID of the child folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of child folders retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Super parent folder")]),t._v(" "),d("td",[t._v("\n        The list of super parent folder to this folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Folder ID")]),t._v(" "),d("td",[t._v("The folder ID of the super parent folder.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of super parent folders retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Scope")]),t._v(" "),d("td",[t._v("\n        The scope of the folder.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Has attachments")]),t._v(" "),d("td",[t._v("\n        Indicates if the folder has attachments.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Permalink")]),t._v(" "),d("td",[t._v("\n        The link to open the folder in a web workspace. This is only accessible if the user has the appropriate access.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Workflow ID")]),t._v(" "),d("td",[t._v("\n        The ID of the folder workflow.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Metadata")]),t._v(" "),d("td",[t._v("\n        The metadata of this folder. The metadata list size corresponds to the number of metadata entries retrieved.\n      ")])]),t._v(" "),d("tr",[d("td",[t._v("Project")]),t._v(" "),d("td",[t._v("\n        The project properties of this folder.\n        "),d("table",[d("tbody",[d("tr",[d("td",[t._v("Author")]),t._v(" "),d("td",[t._v("The author who created the project.")])]),t._v(" "),d("tr",[d("td",[t._v("Owner ID")]),t._v(" "),d("td",[t._v("\n                The list of IDs of project owners.\n                "),d("table",[d("tbody",[d("tr",[d("td",[t._v("User ID")]),t._v(" "),d("td",[t._v("The user ID of the project owner.")])]),t._v(" "),d("tr",[d("td",[t._v("List size")]),t._v(" "),d("td",[t._v("The size of the list, corresponding to the number of project owners retrieved.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Status")]),t._v(" "),d("td",[t._v("The status of the project.")])]),t._v(" "),d("tr",[d("td",[t._v("Start date")]),t._v(" "),d("td",[t._v("The date this project was started.")])]),t._v(" "),d("tr",[d("td",[t._v("End date")]),t._v(" "),d("td",[t._v("The date this project was ended.")])]),t._v(" "),d("tr",[d("td",[t._v("Created date")]),t._v(" "),d("td",[t._v("The date this project was created.")])]),t._v(" "),d("tr",[d("td",[t._v("Completed date")]),t._v(" "),d("td",[t._v("The date this project was completed.")])])])])])]),t._v(" "),d("tr",[d("td",[t._v("Custom fields")]),t._v(" "),d("td",[t._v("\n        Includes data from custom field(s).\n      ")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);