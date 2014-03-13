(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['form'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  return "<form class=\"form-horizontal\">\n	<fieldset>\n		<legend>New Menu Item</legend>\n		<div class=\"control-group\">\n			<input type=\"text\" name=\"name\" placeholder=\"Name\" />\n		</div>\n		<div class=\"control-group\">\n			<input type=\"text\" name=\"category\" placeholder=\"Category\" />\n		</div>\n		<div class=\"control-group\">\n			<input type=\"text\" name=\"url\" placeholder=\"URL\" />\n		</div>\n		<div class=\"control-group\">\n			<input type=\"text\" name=\"imagepath\" placeholder=\"Path to image\" />\n		</div>\n		<button type=\"button\" class=\"btn btn-danger\">Cancel</button>\n		<button type=\"button\" class=\"btn btn-primary\">Save</button>\n	</fieldset>\n</form>";
  },"useData":true});
templates['details'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<div>\n	<h1>"
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n	<p><span class=\"label\">"
    + escapeExpression(((helper = helpers.category || (depth0 && depth0.category)),(typeof helper === functionType ? helper.call(depth0, {"name":"category","hash":{},"data":data}) : helper)))
    + "</span></p>\n	<img src=\"photos/"
    + escapeExpression(((helper = helpers.imagepath || (depth0 && depth0.imagepath)),(typeof helper === functionType ? helper.call(depth0, {"name":"imagepath","hash":{},"data":data}) : helper)))
    + "\" class=\"img-polaroid\" />\n</div>\n<p></p>\n<button type=\"button\" class=\"btn btn-danger confirm-delete\">Delete</button>";
},"useData":true});
templates['menu'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "<li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</ul>";
},"useData":true});
templates['cart'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "<li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</ul>";
},"useData":true});
templates['shop'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "<li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>";
},"3":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "\n		<li><a href=\"#/kitty-supplies/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></li>\n		<span>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.price)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span><br/>\n		<img src=\"photos/kitty-store/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.imagepathsm)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"img-polaroid small\" />\n		<div><a href=\"#/cart/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">Add to Cart</a></div><br/><br/>\n		";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</ul>\n\n\n		<ul>\n		";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n		</ul>\n	),";
},"useData":true});
templates['shopsupplydetails'] = template({"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", escapeExpression=this.escapeExpression;
  return "<div>\n	<h1>"
    + escapeExpression(((helper = helpers.name || (depth0 && depth0.name)),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h1>\n	<p><span class=\"label\">"
    + escapeExpression(((helper = helpers.category || (depth0 && depth0.category)),(typeof helper === functionType ? helper.call(depth0, {"name":"category","hash":{},"data":data}) : helper)))
    + "</span></p>\n	<img src=\"photos/"
    + escapeExpression(((helper = helpers.imagepath || (depth0 && depth0.imagepath)),(typeof helper === functionType ? helper.call(depth0, {"name":"imagepath","hash":{},"data":data}) : helper)))
    + "\" class=\"img-polaroid\" />\n</div>\n<p></p>\n<button type=\"button\" class=\"btn btn-danger confirm-delete\">Delete</button>";
},"useData":true});
templates['shopsupplyform'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return "<li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>";
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>\n	";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "\n</ul>";
},"useData":true});
templates['survey'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, blockHelperMissing=helpers.blockHelperMissing, buffer = "<h3>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3><h4>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.attributes)),stack1 == null || stack1 === false ? stack1 : stack1.question)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4><li>";
  stack1 = ((helper = helpers.GetFBUserDetails || (depth0 && depth0.GetFBUserDetails)),(options={"name":"GetFBUserDetails","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.GetFBUserDetails) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "</li>";
},"2":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.key)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ": "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
},"4":function(depth0,helpers,partials,data) {
  var stack1, functionType="function", escapeExpression=this.escapeExpression;
  return " "
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ": "
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0));
},"compiler":[5,">= 2.0.0"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, options, functionType="function", blockHelperMissing=helpers.blockHelperMissing, buffer = "<ul>\n\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.models), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</ul>\n		<button type=\"button\" class=\"btn btn-danger\">Next</button>\n		<li>";
  stack1 = ((helper = helpers.GetFBUserDetails || (depth0 && depth0.GetFBUserDetails)),(options={"name":"GetFBUserDetails","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data}),(typeof helper === functionType ? helper.call(depth0, options) : helper));
  if (!helpers.GetFBUserDetails) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer + "</li>";
},"useData":true});
})();