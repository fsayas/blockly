Blockly.Lua['set_node'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  var value_x = Blockly.Lua.valueToCode(block, 'X', Blockly.Lua.ORDER_ATOMIC);
  var value_y = Blockly.Lua.valueToCode(block, 'Y', Blockly.Lua.ORDER_ATOMIC);
  var value_z = Blockly.Lua.valueToCode(block, 'Z', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};

Blockly.Lua['register_chatcommand'] = function(block) {
  var text_cmd = block.getFieldValue('CMD');
  var statements_content = Blockly.Lua.statementToCode(block, 'CONTENT');
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};