/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: Jun 28 21:51
*/
KISSY.add("editor/plugin/outdent/cmd",function(g,d,b){var e=b.addCommand,f=b.checkOutdentActive;return{init:function(c){e(c,"outdent");var b=d.Utils.getQueryCmd("outdent");c.hasCommand(b)||c.addCommand(b,{exec:function(a){if((a=a.getSelection())&&!a.isInvalid)return a=a.getStartElement(),a=new d.ElementPath(a),f(a)}})}}},{requires:["editor","../dentUtils/cmd"]});