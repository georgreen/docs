(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{2161:function(t,e,r){"use strict";r.r(e);var s=r(0),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"sql-server-insert-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sql-server-insert-actions"}},[t._v("#")]),t._v(" SQL Server - Insert actions")]),t._v(" "),s("p",[t._v("Workato offers both batch and single insert row actions. This allows you the flexibility to choose the action that you require for your recipe and to fulfill your business needs. Check out our "),s("router-link",{attrs:{to:"/connectors/mssql/best-practices.html#when-to-use-batch-of-rows-triggers-actions-vs-single-row-triggers-actions"}},[t._v("best practices on whether to use batch or single insert actions")]),t._v(" and "),s("router-link",{attrs:{to:"/connectors/mssql/best-practices.html#when-to-use-update-insert-and-upsert-actions"}},[t._v("when to use insert, update or update")]),t._v(".")],1),t._v(" "),s("blockquote",[s("p",[t._v("Errors raised in a step after an "),s("code",[t._v("insert row")]),t._v(" action has been executed during a job run will result in another insert if the job is repeated. Consider using upserts that prevent inserting multiple rows into your database tables by deduping them on a key")])]),t._v(" "),s("h2",{attrs:{id:"insert-row"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert-row"}},[t._v("#")]),t._v(" Insert row")]),t._v(" "),s("p",[t._v("This action inserts a single row into the selected table.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:r(620),alt:"Insert row action",width:"896",height:"667"}}),t._v(" "),s("center",[s("i",[t._v("Insert row action")])])],1),t._v(" "),s("h3",{attrs:{id:"table-view"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table-view"}},[t._v("#")]),t._v(" Table/view")]),t._v(" "),s("p",[t._v("First, select a table to insert a row into. This can be done either by selecting a table from the pick list, or toggling the input field to text mode and typing the full table name.")]),t._v(" "),s("h3",{attrs:{id:"columns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#columns"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),s("p",[t._v("Next, enter data manually into the input fields or map the datapills from your previous triggers or actions into their respective columns. The input fields generated here are based off columns in your table.")]),t._v(" "),s("h2",{attrs:{id:"insert-batch-of-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert-batch-of-rows"}},[t._v("#")]),t._v(" Insert batch of rows")]),t._v(" "),s("p",[t._v("This action allows you to insert multiple rows in a single action instead of one row at a time. This provides higher throughput when you are moving a large number of records from one app to SQL Server. Depending on the structure of your recipe and volume of data, this action can reduce integration time by a factor of 100.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:r(621),alt:"Insert batch of rows action",width:"901",height:"711"}}),t._v(" "),s("center",[s("i",[t._v("Insert batch of rows action*")])])],1),t._v(" "),s("h3",{attrs:{id:"table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#table"}},[t._v("#")]),t._v(" Table")]),t._v(" "),s("p",[t._v("Just like with the single row insert action, you need to select the target table first.")]),t._v(" "),s("h3",{attrs:{id:"rows-source-list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rows-source-list"}},[t._v("#")]),t._v(" Rows source list")]),t._v(" "),s("p",[t._v("Unlike the "),s("strong",[t._v("Insert row")]),t._v(" action (where we deal with a single row), we are now dealing with a batch of rows. Hence, the next datapill to input is the "),s("em",[t._v("source")]),t._v(" of the batch of rows to insert to the table. This can come from any trigger or action that outputs a list datapill.")]),t._v(" "),s("p",[s("DocImage",{attrs:{src:r(50),alt:"A list datapill from the datatree",width:"722",height:"944"}}),t._v(" "),s("center",[s("i",[t._v("A list datapill from the datatree*")])])],1),t._v(" "),s("p",[t._v("If you do not map a list datapill to this field, this action will insert only 1 row and will behave like the "),s("strong",[t._v("Insert row")]),t._v(" action.")]),t._v(" "),s("h3",{attrs:{id:"columns-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#columns-2"}},[t._v("#")]),t._v(" Columns")]),t._v(" "),s("p",[t._v("Finally, you will need to map the required fields from the output datatree here to insert rows with data from preceding trigger or actions. Take note that datapills mapped to each column here should be from the source list datapill you used earlier. Datapills that are mapped outside the source list datapill will not be iterated.")]),t._v(" "),s("p",[t._v("Refer to the "),s("router-link",{attrs:{to:"/features/list-management.html"}},[t._v("List management")]),t._v(" guide for more information about working with batches.")],1),t._v(" "),s("h2",{attrs:{id:"next-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),s("p",[t._v("Learn more about the other triggers and actions Workato has to offer for SQL server")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/connectors/mssql/new-row-trigger.html"}},[t._v("New row trigger")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/connectors/mssql/updated-row-trigger.html"}},[t._v("New/updated row trigger")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/connectors/mssql/select.html"}},[t._v("Select actions")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/connectors/mssql/update.html"}},[t._v("Update actions")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/connectors/mssql/upsert.html"}},[t._v("Upsert actions")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/connectors/mssql/delete.html"}},[t._v("Delete actions")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/connectors/mssql/run_sql.html"}},[t._v("Run custom SQL action")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/connectors/mssql/stored-procedure.html"}},[t._v("Execute stored procedure")])],1)]),t._v(" "),s("p",[t._v("Or get busy building your recipes now! Check out our")]),t._v(" "),s("ul",[s("li",[s("router-link",{attrs:{to:"/connectors/mssql/best-practices.html"}},[t._v("Best practices")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/connectors/database-common-use-cases.html"}},[t._v("Use cases")])],1)])])}),[],!1,null,null,null);e.default=o.exports},50:function(t,e,r){t.exports=r.p+"assets/img/list_datapill_in_output_tree.20c81ae4.png"},620:function(t,e,r){t.exports=r.p+"assets/img/insert-row-action.c265b329.png"},621:function(t,e,r){t.exports=r.p+"assets/img/insert-rows-batch-action.ef7fee61.png"}}]);