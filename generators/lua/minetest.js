Blockly.Lua['set_node'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_x = Blockly.Lua.valueToCode(block, 'X', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'Y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'Z', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'minetest.set_node({\
x = ' + value_x + ', \
y = ' + value_y + ', \
z = ' + value_z + '}, \
{name = "default:' + dropdown_name.toLowerCase() + '"})\n';
  return code;
};

Blockly.Lua['register_chatcommand'] = function(block) {
  var text_cmd = block.getFieldValue('CMD');
  var statements_content = Blockly.Lua.statementToCode(block, 'CONTENT');
  // TODO: Assemble Lua into code variable.
  var code = 'minetest.register_chatcommand("' + text_cmd + '", {\n\
func = function(name)\n\
' + statements_content + '\
return true, "Done!"\n\
end,})';
  return code;
};