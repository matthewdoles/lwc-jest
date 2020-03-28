import { LightningElement } from "lwc";

export default class AdditionJavascript extends LightningElement {
  code =
    '<div style="font-size: 16px; font-weight: bold;">' +
    // Line 1
    '<div style="background-color: #E8E8E8"><span style="color:purple;">import</span> { <span style="color:#3BB9FF;">LightningElement</span> } ' +
    '<span style="color:purple;">from</span> <span style="color:#FFA62F;">"lwc"</span>;</div>' +
    // Line 2
    '<div style="background-color: #F5F5F5"><br/></div>' +
    // Line 3
    '<div style="background-color: #E8E8E8"><span style="color:purple;">export default</span> ' +
    '<span style="color:#0000A0;">class</span> <span style="color:#3B9C9C">AdditionJavascript</span> ' +
    '<span style="color:#0000A0;">extends</span> <span style="color:#3B9C9C"> LightningElement</span> {</div>' +
    // Line 4
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;<span style="color:#3BB9FF;">number1</span> ' +
    '= <span style="color:#89C35C;">0</span>;</div>' +
    // Line 5
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;<span style="color:#3BB9FF;">number2</span> ' +
    '= <span style="color:#89C35C;">0</span>;</div>' +
    // Line 6
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;<span style="color:#3BB9FF;">sum</span> ' +
    '= <span style="color:#89C35C;">0</span>;</div>' +
    // Line 7
    '<div style="background-color: #E8E8E8"><br/></div>' +
    // Line 8
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;<span style="color: #F75D59;">inputChange</span>' +
    '(<span style="color:#3BB9FF;">event</span>) {</div>' +
    // Line 9
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#0000A0;">this</span>' +
    '[<span style="color:#3BB9FF;">event</span>.<span style="color:#3BB9FF;">target</span>.' +
    '<span style="color:#3BB9FF;">name</span>] = <span style="color:#3BB9FF;">event</span>.' +
    '<span style="color:#3BB9FF;">target</span>.<span style="color:#3BB9FF;">value</span>;</div>' +
    // Line 10
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#0000A0;">this</span>.' +
    '<span style="color: #F75D59;">addNumbers</span>();</div>' +
    // Line 11
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;}</div>' +
    // Line 12
    '<div style="background-color: #F5F5F5"><br/></div>' +
    // Line 13
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;<span style="color: #F75D59;">addNumbers</span>() {</div>' +
    // Line 14
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#0000A0;">this</span>.<span style="color:#3BB9FF;">sum</span> = ' + 
    '+<span style="color:#0000A0;">this</span>.<span style="color:#3BB9FF;">number1</span> + ' +
    '+<span style="color:#0000A0;">this</span>.<span style="color:#3BB9FF;">number2</span>;' +
    // Line 15
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;}</div>' +
    // Line 16
    '<div style="background-color: #F5F5F5"><br/></div>' +
    // Line 17
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;<span style="color: #F75D59;">resetNumbers</span>() {</div>' +
    // Line 18
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#0000A0;">this</span>.' +
    '<span style="color:#3BB9FF;">number1</span> = <span style="color:#89C35C;">0</span>;</div>' +
    // Line 19
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#0000A0;">this</span>.' +
    '<span style="color:#3BB9FF;">number2</span> = <span style="color:#89C35C;">0</span>;</div>' +
    // Line 20
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:#0000A0;">this</span>.' +
    '<span style="color:#3BB9FF;">sum</span> = <span style="color:#89C35C;">0</span>;</div>' +
    // Line 21
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;}</div>' +
    // Line 21
    '<div style="background-color: #">}</div>' +
    '</div>';
}
