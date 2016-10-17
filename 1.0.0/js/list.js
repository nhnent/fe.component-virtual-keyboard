tui.util.defineNamespace("fedoc.lnb",{"classes":[{"comment":"/**\n * A virtual keyboard component is capturing kyes that is typed from user.\n * @constructor VirtualKeyboard\n * @example\n * // Create VirtualKeyboard instance with array of keyboard\n * var vkeyboard = new tui.component.VirtualKeyboard({\n *      container: 'vkeyboard', // container element id\n *      keyType: 'number', // keyboard type\n *      functions: { // function key location\n *          shuffle: 0,\n *          language: 2,\n *          caps: 3,\n *          symbol: 4,\n *          remove: 5,\n *          clear: 9,\n *          space: 10,\n *          close: 11,\n *          done: 20\n *      },\n *      keys: [\"9\", \"3\", \"5\", \"1\", \"\", \"7\", \"0\", \"2\", \"4\", \"6\", \"8\", \"\"], // all keys but function keys.\n *      template: { // html templatet for key elements\n *          key: '<li class=\"subcon\"><span class=\"btn_key\"><button type=\"button\">{KEY}</button></span></li>',\n *          blank: '<li class=\"subcon\"><span class=\"btn_key\"></span></li>',\n *          shuffle: '<li class=\"subcon\"><span class=\"btn btn_reload\"><button type=\"button\" value=\"shuffle\">재배열</button></span></li>',\n *          remove: '<li class=\"subcon last\"><span class=\"btn btn_del\"><button type=\"button\" value=\"remove\"><span class=\"sp\">삭제</span></button></span></li>'\n *      },\n *      callback: { // callback for function or normal keys\n *          key: function() { //run },          // A callback that is called when user type or touch key (but function key)\n *          remove: function() { //run },\n *          getKeys: function() { //run }        // A callback that called  rearrange keys\n *      },\n *      isClickOnly: false\n * });\n */","meta":{"range":[178,1793],"filename":"VirtualKeyboard.js","lineno":7,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{},"shortpath":"file"},"description":"<p>A virtual keyboard component is capturing kyes that is typed from user.</p>","kind":"class","name":"VirtualKeyboard","examples":[{"caption":"","code":"// Create VirtualKeyboard instance with array of keyboard\nvar vkeyboard = new tui.component.VirtualKeyboard({\n     container: 'vkeyboard', // container element id\n     keyType: 'number', // keyboard type\n     functions: { // function key location\n         shuffle: 0,\n         language: 2,\n         caps: 3,\n         symbol: 4,\n         remove: 5,\n         clear: 9,\n         space: 10,\n         close: 11,\n         done: 20\n     },\n     keys: [\"9\", \"3\", \"5\", \"1\", \"\", \"7\", \"0\", \"2\", \"4\", \"6\", \"8\", \"\"], // all keys but function keys.\n     template: { // html templatet for key elements\n         key: '<li class=\"subcon\"><span class=\"btn_key\"><button type=\"button\">{KEY}</button></span></li>',\n         blank: '<li class=\"subcon\"><span class=\"btn_key\"></span></li>',\n         shuffle: '<li class=\"subcon\"><span class=\"btn btn_reload\"><button type=\"button\" value=\"shuffle\">재배열</button></span></li>',\n         remove: '<li class=\"subcon last\"><span class=\"btn btn_del\"><button type=\"button\" value=\"remove\"><span class=\"sp\">삭제</span></button></span></li>'\n     },\n     callback: { // callback for function or normal keys\n         key: function() { //run },          // A callback that is called when user type or touch key (but function key)\n         remove: function() { //run },\n         getKeys: function() { //run }        // A callback that called  rearrange keys\n     },\n     isClickOnly: false\n});"}],"longname":"VirtualKeyboard","scope":"global","___id":"T000002R000003","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"VirtualKeyboard","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":[],"methods":[{"comment":"/**\n     * Change upper/lower case.\n     * @api\n     * @example\n     *  virtualKeyboard.caps();\n     */","meta":{"range":[15523,15656],"filename":"VirtualKeyboard.js","lineno":559,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001283","name":"caps","type":"FunctionExpression"},"vars":{"this._isCapsLock":"VirtualKeyboard#caps#_isCapsLock"},"shortpath":"file"},"description":"<p>Change upper/lower case.</p>","tags":[{"originalTitle":"api","title":"api","text":""}],"examples":[{"caption":"","code":"virtualKeyboard.caps();"}],"name":"caps","longname":"VirtualKeyboard#caps","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000113","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"caps","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Reset all typed keys.\n     */","meta":{"range":[16114,16139],"filename":"VirtualKeyboard.js","lineno":587,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001342","name":"clear","type":"FunctionExpression"},"shortpath":"file"},"description":"<p>Reset all typed keys.</p>","name":"clear","longname":"VirtualKeyboard#clear","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000119","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"clear","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Close virtual keyboard\n     * @api\n     * @example\n     *  virtualKeyboard.close();\n     */","meta":{"range":[16514,16594],"filename":"VirtualKeyboard.js","lineno":613,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001363","name":"close","type":"FunctionExpression"},"shortpath":"file"},"description":"<p>Close virtual keyboard</p>","tags":[{"originalTitle":"api","title":"api","text":""}],"examples":[{"caption":"","code":"virtualKeyboard.close();"}],"name":"close","longname":"VirtualKeyboard#close","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000122","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"close","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Close viertual keyboard with complate button.\n     */","meta":{"range":[16670,16716],"filename":"VirtualKeyboard.js","lineno":621,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001378","name":"done","type":"FunctionExpression"},"shortpath":"file"},"description":"<p>Close viertual keyboard with complate button.</p>","name":"done","longname":"VirtualKeyboard#done","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000123","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"done","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Initalize \n\t * @param {object} [options] Options to initialize component\n     */","meta":{"range":[3560,3798],"filename":"VirtualKeyboard.js","lineno":134,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100000039","name":"init","type":"FunctionExpression"},"shortpath":"file"},"description":"<p>Initalize</p>","params":[{"type":{"names":["object"]},"optional":true,"description":"<p>Options to initialize component</p>","name":"options"}],"name":"init","longname":"VirtualKeyboard#init","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000018","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"init","signature":"<span class=\"signature\">(options<span class=\"signature-attributes\">opt</span>)</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Toggle Eng/Kor.\n     * @api\n     * @example\n     *  virtualKeyboard.language();\n     */","meta":{"range":[15206,15408],"filename":"VirtualKeyboard.js","lineno":546,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001250","name":"language","type":"FunctionExpression"},"vars":{"this._isEnglish":"VirtualKeyboard#language#_isEnglish","this._currentKeyType":"VirtualKeyboard#language#_currentKeyType"},"shortpath":"file"},"description":"<p>Toggle Eng/Kor.</p>","tags":[{"originalTitle":"api","title":"api","text":""}],"examples":[{"caption":"","code":"virtualKeyboard.language();"}],"name":"language","longname":"VirtualKeyboard#language","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000110","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"language","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Open virtual keyboard\n     * @api\n     * @example\n     *  virtualKeyboard.open();\n     */","meta":{"range":[16319,16400],"filename":"VirtualKeyboard.js","lineno":602,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001348","name":"open","type":"FunctionExpression"},"shortpath":"file"},"description":"<p>Open virtual keyboard</p>","tags":[{"originalTitle":"api","title":"api","text":""}],"examples":[{"caption":"","code":"virtualKeyboard.open();"}],"name":"open","longname":"VirtualKeyboard#open","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000121","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"open","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Remove the last typed/touched value\n     */","meta":{"range":[16036,16062],"filename":"VirtualKeyboard.js","lineno":581,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001339","name":"remove","type":"FunctionExpression"},"shortpath":"file"},"description":"<p>Remove the last typed/touched value</p>","name":"remove","longname":"VirtualKeyboard#remove","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000118","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"remove","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Shuffle keys.\n     * @api\n     * @example\n     *  virtualKeyboard.shuffle();\n     */","meta":{"range":[14941,15096],"filename":"VirtualKeyboard.js","lineno":533,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001229","name":"shuffle","type":"FunctionExpression"},"vars":{"this._keySequences.length":"VirtualKeyboard#shuffle#_keySequences.length"},"shortpath":"file"},"description":"<p>Shuffle keys.</p>","tags":[{"originalTitle":"api","title":"api","text":""}],"examples":[{"caption":"","code":"virtualKeyboard.shuffle();"}],"name":"shuffle","longname":"VirtualKeyboard#shuffle","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000108","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"shuffle","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Insert blank\n     */","meta":{"range":[16182,16207],"filename":"VirtualKeyboard.js","lineno":593,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001345","name":"space","type":"FunctionExpression"},"shortpath":"file"},"description":"<p>Insert blank</p>","name":"space","longname":"VirtualKeyboard#space","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000120","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"space","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]},{"comment":"/**\n     * Change symbol/number keys\n     * @api\n     * @example\n     *  virtualKeyboard.symbol();\n     */","meta":{"range":[15774,15970],"filename":"VirtualKeyboard.js","lineno":571,"path":"/Users/nhnent/Desktop/work/component-virtual-keyboard/src/js","code":{"id":"astnode100001306","name":"symbol","type":"FunctionExpression"},"vars":{"this._isSymbol":"VirtualKeyboard#symbol#_isSymbol","this._currentKeyType":"VirtualKeyboard#symbol#_currentKeyType"},"shortpath":"file"},"description":"<p>Change symbol/number keys</p>","tags":[{"originalTitle":"api","title":"api","text":""}],"examples":[{"caption":"","code":"virtualKeyboard.symbol();"}],"name":"symbol","longname":"VirtualKeyboard#symbol","kind":"function","memberof":"VirtualKeyboard","scope":"instance","___id":"T000002R000115","___s":true,"attribs":"<span class=\"type-signature\"></span>","id":"symbol","signature":"<span class=\"signature\">()</span><span class=\"type-signature\"></span>","ancestors":["<a href=\"VirtualKeyboard.html\">VirtualKeyboard</a>#"]}]}],"externals":[],"events":[],"globals":[],"mixins":[],"modules":[],"namespaces":[],"interfaces":[],"tutorials":[{"name":"desktop","longname":"desktop","title":"Default Example","exp":"Default Example"},{"name":"mobile","longname":"mobile","title":"Numeric Example","exp":"Numeric Example"}]})