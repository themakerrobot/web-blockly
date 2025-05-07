let toolbox = (lang) => {
  return {
    "kind": "categoryToolbox",
    // "kind": "flyoutToolbox",
    "contents": [

      { // start
        "kind": "category",
        "name": translations['start'][lang],
        "contents": [
          {
            "kind": "block",
            "type": "flag_event",
          },
        ],
        "colour": color_type['start'],
        "cssConfig": {
          "icon": "customIcon fa-solid fa-circle-play"
        }
      },     
      {
        "kind": "sep",
      },
      { // Logic
        "kind": "category",
        "colour": '#B098CB',
        "name": translations['logic'][lang],
        "cssConfig": {
          "icon": "customIcon fa fa-bars-staggered"
        },
        "contents": [
          {
            "kind": "block",
            "type": "controls_if"
          },
          {
            "kind": "block",
            "type": "logic_compare"
          },
          {
            "kind": "block",
            "type": "logic_operation"
          },
          {
            "kind": "block",
            "type": "logic_negate"
          },
          {
            "kind": "block",
            "type": "logic_boolean"
          },
          {
            "kind": "block",
            "type": "logic_null"
          },
          {
            "kind": "block",
            "type": "logic_ternary"
          }
        ],
        // "categorystyle": "logic_category"
      },
      { // Loops
        "kind": "category",
        "colour": '#85B687',
        "name": translations['loops'][lang],
        "cssConfig": {
          "icon": "customIcon fa fa-arrows-spin"
        },
        "contents": [
          {
            "kind": "block",
            "type": "controls_repeat_ext",
            "inputs": {
              "TIMES": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "10"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "controls_whileUntil"
          },
          {
            "kind": "block",
            "type": "controls_for",
            "inputs": {
              "FROM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              },
              "TO": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                  "NUM": "10"
                  }
                }
              },
              "BY": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "controls_forEach"
          },
          {
            "kind": "block",
            "type": "controls_flow_statements"
          }
        ],
        // "categorystyle": "loop_category"
      },
      { // Math
        "kind": "category",
        "colour": '#2196F3',
        "name": translations['math'][lang],
        "cssConfig": {
          "icon": "customIcon fa fa-square-root-variable"
        },
        "contents": [
          {
            "kind": "block",
            "type": "math_number",
            "fields": {
              "NUM": "123"
            }
          },
          {
            "kind": "block",
            "type": "math_arithmetic",
            "inputs": {
              "A": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              },
              "B": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_single",
            "inputs": {
              "NUM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "9"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_trig",
            "inputs": {
              "NUM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "45"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_constant"
          },
          {
            "kind": "block",
            "type": "math_number_property",
            "inputs": {
              "NUMBER_TO_CHECK": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "0"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_round",
            "inputs": {
              "NUM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "3.1"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_on_list"
          },
          {
            "kind": "block",
            "type": "math_modulo",
            "inputs": {
              "DIVIDEND": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "64"
                  }
                }
              },
              "DIVISOR": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "10"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_constrain",
            "inputs": {
              "VALUE": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "50"
                  }
                }
              },
              "LOW": {
                "shadow": {
                "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              },
              "HIGH": {
                "shadow": {
                "type": "math_number",
                  "fields": {
                  "NUM": "100"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_random_int",
            "inputs": {
              "FROM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              },
              "TO": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "100"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "math_random_float"
          },
          {
            "kind": "block",
            "type": "math_atan2",
            "inputs": {
              "X": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              },
              "Y": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              }
            }
          }      
        ],
        // "categorystyle": "math_category"
      },
      { // Text
        "kind": "category",
        "colour": '#FFAA08',
        "name": translations['text'][lang],
        "cssConfig": {
          "icon": "customIcon fa fa-t"
        },
        "contents": [
          {
            "kind": "block",
            "type": "text"
          },
          {
            "kind": "block",
            "type": "text_join"
          },
          {
            "kind": "block",
            "type": "text_append",
            "inputs": {
              "TEXT": {
                "shadow": {
                  "type": "text"
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_length",
            "inputs": {
              "VALUE": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_isEmpty",
            "inputs": {
              "VALUE": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": null
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_indexOf",
            "inputs": {
              "VALUE": {
                "block": {
                  "type": "variables_get",
                  "fields": {
                    "VAR": "{textVariable}"
                  }
                }
              },
              "FIND": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_charAt",
            "inputs": {
              "VALUE": {
                "block": {
                  "type": "variables_get",
                  "fields": {
                    "VAR": "{textVariable}"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_getSubstring",
            "inputs": {
              "STRING": {
                "block": {
                  "type": "variables_get",
                  "fields": {
                    "VAR": "{textVariable}"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_changeCase",
            "inputs": {
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_trim",
            "inputs": {
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_count",
            "inputs": {
              "SUB": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["a"][lang]
                  }
                }
              },
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_replace",
            "inputs": {
              "FROM": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["b"][lang]
                  }
                }
              },
              "TO": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["c"][lang]
                  }
                }
              },
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_reverse",
            "inputs": {
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_print",
            "inputs": {
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "text_prompt_ext",
            "inputs": {
              "TEXT": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations["abc"][lang]
                  }
                }
              }
            }
          },
        ],
        // "categorystyle": "text_category"
      },
      { // Lists
        "kind": "category",
        "colour": '#4DB6AC',
        "name": translations['lists'][lang],
        "cssConfig": {
          "icon": "customIcon fa fa-list"
        },
        "contents": [
          {
            "kind": "block",
            "type": "lists_create_with",
            "extraState": {
              "itemCount": "0"
            }
          },
          {
            "kind": "block",
            "type": "lists_create_with"
          },
          {
            "kind": "block",
            "type": "lists_repeat",
            "inputs": {
              "NUM": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "5"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "lists_length"
          },
          {
            "kind": "block",
            "type": "lists_isEmpty"
          },
          {
            "kind": "block",
            "type": "lists_indexOf",
            "inputs": {
              "VALUE": {
                "block": {
                  "type": "variables_get",
                  "fields": {
                    "VAR": "{listVariable}"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "lists_getIndex",
            "inputs": {
              "VALUE": {
                "block": {
                  "type": "variables_get",
                  "fields": {
                    "VAR": "{listVariable}"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "lists_setIndex",
            "inputs": {
              "LIST": {
                "block": {
                  "type": "variables_get",
                  "fields": {
                    "VAR": "{listVariable}"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "lists_getSublist",
            "inputs": {
              "LIST": {
                "block": {
                  "type": "variables_get",
                  "fields": {
                    "VAR": "{listVariable}"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "lists_split",
            "inputs": {
              "DELIM": {
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": ","
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "lists_sort"
          },
          {
            "kind": "block",
            "type": "lists_reverse"
          },
        ],
        // "categorystyle": "list_category"
      },
      { // Colour
        "kind": "category",
        "colour": '#DFADB2',
        "name": translations['colour'][lang],
        "cssConfig": {
          "icon": "customIcon fa fa-palette"
        },
        "contents": [
          {
            "kind": "block",
            "type": "colour_picker"
          },
          {
            "kind": "block",
            "type": "colour_random"
          },
          {
            "kind": "block",
            "type": "colour_rgb",
            "inputs": {
              "RED": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "100"
                  }
                }
              },
              "GREEN": {
                "shadow": {
                  "type": "math_number",
                    "fields": {
                  "NUM": "50"
                  }
                }
              },
              "BLUE": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "0"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "colour_blend",
            "inputs": {
              "COLOUR1": {
                "shadow": {
                  "type": "colour_picker",
                  "fields": {
                    "COLOUR": "#ff0000"
                  }
                }
              },
              "COLOUR2": {
                "shadow": {
                  "type": "colour_picker",
                  "fields": {
                    "COLOUR": "#3333ff"
                  }
                }
              },
              "RATIO": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "0.5"
                  }
                }
              }
            }
          }
        ],
        // "categorystyle": "colour_category"
      },
      {
        "kind": "sep"
      },
      { // Variables
        "kind": "category",
        "colour": '#EF9A9A',
        "name": translations['variables'][lang],
        "contents": [],
        "custom": "VARIABLE",
        // "categorystyle": "variable_category",
        "cssConfig": {
          "icon": "customIcon fa fa-v"
        }
      },
      { // Functions
        "kind": "category",
        "colour": '#C7BCB8',
        "name": translations['functions'][lang],
        "contents": [],
        "custom": "PROCEDURE",
        // "categorystyle": "procedure_category",
        "cssConfig": {
          "icon": "customIcon fa fa-florin-sign"
        }
      },
      {
        "kind": "sep",
      },
      { // Utils
        "kind": "category",
        "name": translations['utils'][lang],
        "contents": [
          {
            "kind": "block",
            "type": "utils_sleep",
            "inputs":{
              "time": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "utils_time",
          },
          {
            "kind": "block",
            "type": "utils_current_time",
          },
          {
            "kind": "block",
            "type": "utils_include",
          },
          {
            "kind": "block",
            "type": "utils_dict_get",
            "inputs":{
              "dictionary":{
                "shadow":{
                  "type":"variables_get",
                }
              },
              "keyname":{
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations['keyname'][lang]
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "utils_dict_set",
            "inputs":{
              "dictionary":{
                "shadow":{
                  "type":"variables_get",
                }
              },
              "keyname":{
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations['keyname'][lang]
                  }
                }
              },
            }
          },
          {
            "kind": "block",
            "type": "utils_dict_create",
          },

          {
            "kind": "block",
            "type": "utils_array_slice_set",
            "inputs":{
              "arr":{
                "shadow":{
                  "type":"variables_get",
                }
              },
              "y1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "0"
                  }
                }
              },
              "y2": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "0"
                  }
                }
              },
              "x1": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "0"
                  }
                }
              },
              "x2": {
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "0"
                  }
                }
              },
              "value":{
                "shadow":{
                  "type":"variables_get",
                }
              },
            }
          },

          {
            "kind": "block",
            "type": "utils_check_path",
            "inputs":{
              "path":{
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": translations['path'][lang]
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "utils_typecast_string",
            "inputs":{
              "value":{
                "shadow": {
                  "type": "math_number",
                  "fields": {
                    "NUM": "1"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "utils_typecast_number",
            "inputs":{
              "value":{
                "shadow": {
                  "type": "text",
                  "fields": {
                    "TEXT": "1"
                  }
                }
              }
            }
          },
          {
            "kind": "block",
            "type": "utils_calculate_angle",
            "inputs":{
              "p1":{
                "shadow":{
                  "type":"variables_get",
                }
              },
              "p2":{
                "shadow":{
                  "type":"variables_get",
                }
              },
              "p3":{
                "shadow":{
                  "type":"variables_get",
                }
              }                            
            }
          }
        ],
        "colour": color_type["utils"],
        "cssConfig": {
          "icon": "customIcon fa-solid fa-toolbox"
        }
      },
    ]
  } 
}
const toolbox_en = toolbox('en');
const toolbox_ko = toolbox('ko');
// const toolbox_cn = toolbox('cn');

const toolbox_dict = {
  "en": toolbox_en,
  "ko": toolbox_ko,
  // "cn": toolbox_cn
}