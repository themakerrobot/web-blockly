Blockly.Python.forBlock['flag_event'] = function (block) {
  return '';
};

// Utils
Blockly.Python.forBlock['utils_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';

  const t = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  return `time.sleep(${t})\n`;
}
Blockly.Python.forBlock['utils_time'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';

  return ["time.time()", Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python.forBlock['utils_current_time'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';

  return ["time.strftime('%Y-%m-%d %H:%M:%S')", Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python.forBlock['utils_include'] = function(block) {
  const a = Blockly.Python.valueToCode(block, 'a', Blockly.Python.ORDER_ATOMIC);
  const b = Blockly.Python.valueToCode(block, 'b', Blockly.Python.ORDER_ATOMIC);

  return [`${a} in ${b}`, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python.forBlock['utils_dict_get'] = function(block) {
  const dictionary = Blockly.Python.valueToCode(block, 'dictionary', Blockly.Python.ORDER_ATOMIC);
  const keyname = Blockly.Python.valueToCode(block, 'keyname', Blockly.Python.ORDER_ATOMIC);

  return [`${dictionary}[${keyname}]`, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python.forBlock['utils_dict_set'] = function(block) {
  const dictionary = Blockly.Python.valueToCode(block, 'dictionary', Blockly.Python.ORDER_ATOMIC);
  const keyname = Blockly.Python.valueToCode(block, 'keyname', Blockly.Python.ORDER_ATOMIC);
  const value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  return `${dictionary}[${keyname}] = ${value}\n`;
}
Blockly.Python.forBlock['utils_dict_create'] = function(block) {
  return [`dict()\n`, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python.forBlock['utils_array_slice_set'] = function(block) {
  const arr = Blockly.Python.valueToCode(block, 'arr', Blockly.Python.ORDER_ATOMIC);
  const y1 = Blockly.Python.valueToCode(block, 'y1', Blockly.Python.ORDER_ATOMIC);
  const y2 = Blockly.Python.valueToCode(block, 'y2', Blockly.Python.ORDER_ATOMIC);
  const x1 = Blockly.Python.valueToCode(block, 'x1', Blockly.Python.ORDER_ATOMIC);
  const x2 = Blockly.Python.valueToCode(block, 'x2', Blockly.Python.ORDER_ATOMIC);
  const value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  return `${arr}[${y1}:${y2}, ${x1}:${x2}] = ${value}\n`;
}
Blockly.Python.forBlock['utils_check_path'] = function(block) {
  Blockly.Python.definitions_['import_os'] = 'import os';
  const type = block.getFieldValue('type');
  const path = Blockly.Python.valueToCode(block, 'path', Blockly.Python.ORDER_ATOMIC);

  return [`${type}(${path})`, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python.forBlock['utils_typecast_string'] = function(block) {
  Blockly.Python.definitions_['import_os'] = 'import os';
  const value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  return [`str(${value})`, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python.forBlock['utils_typecast_number'] = function(block) {
  Blockly.Python.definitions_['import_os'] = 'import os';
  const type = block.getFieldValue('type');
  const value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  return [`${type}(${value})`, Blockly.Python.ORDER_ATOMIC];
}
Blockly.Python.forBlock['utils_calculate_angle'] = function(block) {
  Blockly.Python.definitions_['import_openpibo_utils_as_utils'] = 'import openpibo.utils as utils';
  const p1 = Blockly.Python.valueToCode(block, 'p1', Blockly.Python.ORDER_ATOMIC);
  const p2 = Blockly.Python.valueToCode(block, 'p2', Blockly.Python.ORDER_ATOMIC);
  const p3 = Blockly.Python.valueToCode(block, 'p3', Blockly.Python.ORDER_ATOMIC);

  return [`utils.calculate_angle(${p1}, ${p2}, ${p3})`, Blockly.Python.ORDER_ATOMIC];
}