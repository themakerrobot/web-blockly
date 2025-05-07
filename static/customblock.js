const color_type={
  "start":    "#E5B900",
  "utils":    "#CC9988"
};

Blockly.defineBlocksWithJsonArray(
  [
    {
      type: "flag_event",
      message0: '%{BKY_FLAG_EVENT}',
      args0:
      [
        {
          "type": "field_image",
          "src": "svg/flag-solid.svg",
          "width": 27,
          "height": 27,
          "alt": "flag",
          "flip_rtl": true
        },
      ],
      "inputsInline": true,
      "nextStatement": null,
      colour: color_type["start"],
      tooltip: '%{BKY_FLAG_EVENT_TOOLTIP}',
      helpUrl: ""   
    },
    {
      type: 'utils_sleep',
      message0: '%{BKY_UTILS_SLEEP}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/bed-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
          {"type": "input_value", "name": "time", "check":"Number"},
        ],
      nextStatement: true,
      previousStatement: true,
      inputsInline: true,
      colour: color_type["utils"],
      tooltip: '%{BKY_UTILS_SLEEP_TOOLTIP}',
      helpUrl: ''
    },
    {
      type: 'utils_time',
      message0: '%{BKY_UTILS_TIME}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/stopwatch-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"}
        ],
      output: null,
      inputsInline: true,
      colour: color_type["utils"],
      tooltip: '%{BKY_UTILS_TIME_TOOLTIP}',
      helpUrl: ''
    },
    {
      type: 'utils_current_time',
      message0: '%{BKY_UTILS_CURRENT_TIME}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/clock-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"}
        ],
      output: null,
      inputsInline: true,
      colour: color_type["utils"],
      tooltip: '%{BKY_UTILS_CURRENT_TIME_TOOLTIP}',
      helpUrl: ''
    },
    {
      type: 'utils_include',
      message0: '%{BKY_UTILS_INCLUDE}',
      "args0": [
        {
          "type": "field_image",
          "src": "svg/list-check-solid.svg",
          "width": 27,
          "height": 27
        },
        {"type":"input_dummy"},
        {"type": "input_value", "name": "a"},
        {"type": "input_value", "name": "b"}
      ],
      output: null,
      inputsInline: true,
      colour: color_type["utils"],
      tooltip: '%{BKY_UTILS_INCLUDE_TOOLTIP}',
      helpUrl: ''
    },
    {
      type: 'utils_dict_get',
      message0: '%{BKY_UTILS_DICT_GET}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/list-check-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
          {"type": "input_value", "name": "dictionary"},
          {"type": "input_value", "name": "keyname", "check":"String"}
        ],
        output: null,
        inputsInline: true,
        colour: color_type["utils"],
        tooltip: '%{BKY_UTILS_DICT_GET_TOOLTIP}',
        helpUrl: ''
    },
    {
      type: 'utils_dict_set',
      message0: '%{BKY_UTILS_DICT_SET}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/list-check-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
          {"type": "input_value", "name": "dictionary"},
          {"type": "input_value", "name": "keyname", "check":"String"},
          {"type": "input_value", "name": "value"}
        ],
        nextStatement: true,
        previousStatement: true,
        inputsInline: true,
        colour: color_type["utils"],
        tooltip: '%{BKY_UTILS_DICT_SET_TOOLTIP}',
        helpUrl: ''
    },
    {
      type: 'utils_dict_create',
      message0: '%{BKY_UTILS_DICT_CREATE}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/database-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
        ],
        nextStatement: true,
        previousStatement: true,
        inputsInline: true,
        colour: color_type["utils"],
        tooltip: '%{BKY_UTILS_DICT_CREATE_TOOLTIP}',
        helpUrl: ''
    },
    {
      type: 'utils_array_slice_set',
      message0: '%{BKY_UTILS_ARRAY_SLICE_SET}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/list-check-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
          {"type": "input_value", "name": "arr", "check":"Array"},
          {"type": "input_value", "name": "y1", "check":"Number"},
          {"type": "input_value", "name": "y2", "check":"Number"},
          {"type": "input_value", "name": "x1", "check":"Number"},
          {"type": "input_value", "name": "x2", "check":"Number"},
          {"type": "input_value", "name": "value"},
        ],
        nextStatement: true,
        previousStatement: true,
        inputsInline: true,
        colour: color_type["utils"],
        tooltip: '%{BKY_UTILS_ARRAY_SLICE_SET_TOOLTIP}',
        helpUrl: ''
    },    
    {
      type: 'utils_check_path',
      message0: '%{BKY_UTILS_CHECK_PATH}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/square-check-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
          {"type": "field_dropdown", "name":"type",
          "options":[
            [ '%{BKY_UTILS_FILE}', 'os.path.isfile' ],
            [ '%{BKY_UTILS_DIRECTORY}', 'os.path.isdir']
          ]},
          {"type": "input_value", "name": "path", "check":"String"}
        ],
        output: null,
        inputsInline: true,
        colour: color_type["utils"],
        tooltip: '%{BKY_UTILS_CHECK_PATH_TOOLTIP}',
        helpUrl: ''
    },
    {
      type: 'utils_typecast_string',
      message0: '%{BKY_UTILS_TYPECAST_STRING}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/right-left-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
          {"type": "input_value", "name": "value", "check":"Number"}
        ],
        output: null,
        inputsInline: true,
        colour: color_type["utils"],
        tooltip: '%{BKY_UTILS_TYPECAST_STRING_TOOLTIP}',
        helpUrl: ''
    },
    {
      type: 'utils_typecast_number',
      message0: '%{BKY_UTILS_TYPECAST_NUMBER}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/right-left-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
          {"type": "field_dropdown", "name":"type",
          "options":[
            [ '%{BKY_UTILS_INT}', 'int'],
            [ '%{BKY_UTILS_FLOAT}', 'float']
          ]},
          {"type": "input_value", "name": "value", "check":"String"}
        ],
        output: null,
        inputsInline: true,
        colour: color_type["utils"],
        tooltip: '%{BKY_UTILS_TYPECAST_NUMBER_TOOLTIP}',
        helpUrl: ''
    },
    {
      type: 'utils_calculate_angle',
      message0: '%{BKY_UTILS_CALCULATE_ANGLE}',
      args0:
        [
          {
            "type": "field_image",
            "src": "svg/circle-nodes-solid.svg",
            "width": 27,
            "height": 27
          },
          {"type":"input_dummy"},
          {"type": "input_value", "name": "p1", "check":"Array"},
          {"type": "input_value", "name": "p2", "check":"Array"},
          {"type": "input_value", "name": "p3", "check":"Array"},
        ],
        output: null,
        inputsInline: true,
        colour: color_type["utils"],
        tooltip: '%{BKY_UTILS_CALCULATE_ANGLE_TOOLTIP}',
        helpUrl: ''
    }
  ]
);