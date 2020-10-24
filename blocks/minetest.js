Blockly.defineBlocksWithJsonArray([  
  {
    "type": "set_node",
    "message0": "set node %1 %2 at x %3 , y %4 , z %5",
    "args0": [
    {
      "type": "field_dropdown",
      "name": "NAME",
      "options": [
      [
        "wood",
        "WOOD"
      ],
      [
        "stone",
        "STONE"
      ],
      [
        "dirt",
        "DIRT"
      ],
      [
        "cobble",
        "COBBLE"
      ],
      [
        "air",
        "AIR"
      ]
      ]
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "X",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Y",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "Z",
      "check": "Number"
    }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "colour": 0,
    "tooltip": "Set node at position",
    "helpUrl": "https://github.com/minetest/minetest/blob/master/doc/lua_api.txt"
  },
  {
    "type": "register_chatcommand",
    "message0": "register chatcommand %1 %2 %3",
    "args0": [
    {
      "type": "field_input",
      "name": "CMD",
      "text": "default"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "CONTENT"
    }
    ],
    "colour": 0,
    "tooltip": "Mintetest chat command definition",
    "helpUrl": "https://github.com/minetest/minetest/blob/master/doc/lua_api.txt"
  }
]);

