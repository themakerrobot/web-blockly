window.onload = function() {
    const command = document.getElementById('command');
    const result = document.getElementById('result');
    const run = document.getElementById('run');
    const view = document.getElementById('view');
    const stop = document.getElementById('stop');

    let editor = CodeMirror(document.getElementById("python-code"), {
        mode: "python",
        theme: "monokai",
        lineNumbers: true,
        readOnly: true
      });
    
    view.addEventListener('click', async () => {
      const code = Blockly.Python.workspaceToCode(workspace);
      console.log(code);
      editor.setValue(code);
    });

    run.addEventListener('click', async () => {
      code = Blockly.Python.workspaceToCode(workspace);
      console.log(code)
      Sk.execLimit = 60 * 1000;
      Sk.configure({
        output: function (text) {
            document.getElementById("output-content").innerText += text.replace(/^\n+/, ''); // 공백 제거
        },
        read: function (filename) {
            if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
                throw "File not found: '" + filename + "'";
            }
            return Sk.builtinFiles["files"][filename];
          }
      });
        
      document.getElementById("output-content").innerText = new Date().toString() + '\n\n';
        
      (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'turtle';
    
      Sk.misceval.asyncToPromise(function () {
        return Sk.importMainWithBody("<stdin>", false, code, true);
      }).then(function (mod) {
        document.getElementById("output-content").innerText += '\n\n종료';
      }).catch(function (err) {
        document.getElementById("output-content").innerText = err.toString();
      });
    });
    
    stop.addEventListener('click', async () => {
      Sk.execLimit = 0; 
    });

let CURRENT_DIR;
let CODE_PATH = '';
let BLOCK_PATH = '';
let saveCode = "";
let saveBlock = "{}";

function findBlocks(data) {
  if (data && typeof data === 'object') {
    if ('block' in data) {
      jdata = data['block'];
      if(jdata['type'].includes('_dynamic')) {
        updateSecondDropdown.call(workspace.getBlockById(jdata['id']), jdata['fields']['dir'], jdata['fields']['filename'])
      }
    }
    for (const key in data) {
      findBlocks(data[key]);
    }
  }
}

let update_block = () => {
  $("#codecheck").html(saveBlock==JSON.stringify(Blockly.serialization.workspaces.save(workspace)) ? "" : "<i class='fa-solid fa-circle fa-fade'></i>");
}

const workspace = Blockly.inject("blocklyDiv", {
  toolbox: lang=="en"?toolbox_en:toolbox_ko,
  collapse: true,
  comments: true,
  disable: true,
  maxBlocks: Infinity,
  trashcan: true,
  horizontalLayout: false,
  toolboxPosition: "start",
  css: true,
  // media: "./static/",
  rtl: false,
  scrollbars: true,
  sounds: false,
  oneBasedIndex: true,
  grid: {
    spacing: 20,
    length: 3,
    colour: '#ddd',
    snap: true
  },
  zoom: {
    controls: true,
    wheel: false,
    startScale: 0.7,
    maxScale: 3,
    minScale: 0.3,
    scaleSpeed: 1.05,
    pinch: true
  },
  move:{
    scrollbars: {
      horizontal: true,
      vertical: true
    },
    drag: true,
    wheel: true,
  },
  renderer:"zelos", // "zelos", "minimalist", "thrasos"
  theme: Blockly.Theme.defineTheme('modest', {
    'base': Blockly.Themes.Classic,
    startHats: true,
    fontStyle: {
      'family': null,
      'weight': null,
      'size': 16,
    },
    blockStyles: {
      logic_blocks: {
        colourPrimary: '#B098CB',
        colourSecondary: '#EDE7F6',
        colorTertiary: '#B39DDB',
      },
      loop_blocks: {
        colourPrimary: '#85B687',
        colourSecondary: '#E8F5E9',
        colorTertiary: '#66BB6A',
      },
      math_blocks: {
        colourPrimary: '#2196F3',
        colourSecondary: '#1E88E5',
        colorTertiary: '#0D47A1',
      },
      text_blocks: {
        colourPrimary: '#FFAA08',
        colourSecondary: '#555555',
        colorTertiary: '#FF8F00',
      },
      list_blocks: {
        colourPrimary: '#4DB6AC',
        colourSecondary: '#B2DFDB',
        colorTertiary: '#009688',
      },
      colour_blocks: {
        colourPrimary: '#DFADB2',
        colourSecondary: '#FFEBEE',
        colorTertiary: '#EF9A9A',
      },
      variable_blocks: {
        colourPrimary: '#EF9A9A',
        colourSecondary: '#EF9A9A',
        //colourSecondary: '#FFEBEE',
        colorTertiary: '#EF5350',
      },
      // variable_dynamic_blocks: {
      //   colourPrimary: '#EF9A9A',
      //   colourSecondary: '#FFEBEE',
      //   colorTertiary: '#EF5350',
      // },
      procedure_blocks: {
        colourPrimary: '#C7BCB8',
        colourSecondary: '#EFEBE9',
        colorTertiary: '#BCAAA4',
      },
    },
    categoryStyles: {
      // logic_category: {
      //   colour: '#D1C4E9'
      // },
      // loop_category: {
      //   colour: '#A5D6A7'
      // },
      // math_category: {
      //   colour: '#2196F3'
      // },
      // text_category: {
      //   colour: '#FFCA28'
      // },
      // list_category: {
      //   colour: '#4DB6AC'
      // },
      // colour_category: {
      //   colour: '#FFCDD2'
      // },
      // variable_category: {
      //   colour: '#EF9A9A'
      // },
      // // variable_dynamic_category: {
      // //   colour: '#EF9A9A'
      // // },
      // procedure_category: {
      //   colour: '#D7CCC8'
      // }
    },
    componentStyles: {
      'flyoutOpacity': 0.5,
      'insertionMarkerOpacity': 0.5,
      'scrollbarOpacity': 0.5,
      'selectedGlowColour': '#000000',
      'selectedGlowSize': 0.5,
      'replacementGlowColour': '#000000',
    }
  }),
});
workspace.addChangeListener ((event)=>{
  update_block();
  if (event.type == Blockly.Events.CREATE) {
    if($("#codepath").html() == '') setTimeout(()=>{alert(translations["confirm_block_file"][lang])},500);
  }

  if (event.type == Blockly.Events.BLOCK_CHANGE) {
    if (event.element == 'field' && event.name == 'dir') {
      folderValue = workspace.getBlockById(event.blockId).getFieldValue('dir');
      updateSecondDropdown.call(workspace.getBlockById(event.blockId), folderValue);
    }
  }
});

$(document).keydown((evt)=> {
  if((evt.which == '115' || evt.which == '83') && (evt.ctrlKey || evt.metaKey)) {
      evt.preventDefault();
      let filepath = $("#codepath").html();

      if (filepath == "") {
        alert(translations['nofile'][lang]);
        return;
      }
      let codetype = "";
      codeTypeBtns.forEach((el) => {
        if (el.classList.value.includes("checked")) codetype = el.name;
      });
      if (codetype == "block") {
        // if (filepath.substring(filepath.lastIndexOf(".") + 1, filepath.length) != "json") {
        //   alert("json 파일만 저장 가능합니다.");
        //   return;
        // }
        saveBlock = JSON.stringify(Blockly.serialization.workspaces.save(workspace))
        socket.emit("save", {
          codepath: "/home/pi/blockly.py",
          codetext: Blockly.Python.workspaceToCode(workspace) });
        socket.emit("save", {
          codepath: $("#codepath").html(),
          codetext: saveBlock
        });
        result.value = Blockly.Python.workspaceToCode(workspace);
        update_block();
      }
      else {
        codeTypeBtns.forEach((el) => {
          if (el.classList.value.includes("checked")) codetype = el.name;
        });
        saveCode = codeEditor.getValue();
        CodeMirror.signal(codeEditor, "change");
        socket.emit("save", { codepath: $("#codepath").html(), codetext: saveCode });
      }
      return false;
  }
  return true;
});

const setLanguage = (langCode) => {
  const elements = document.querySelectorAll('[data-key]');
  elements.forEach(element => {
      const key = element.getAttribute('data-key');
      if (translations[key] && translations[key][langCode]) {
          element.textContent = translations[key][langCode];
      }
  });

 setLanguage('ko');
}
}
