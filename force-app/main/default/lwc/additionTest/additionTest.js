import { LightningElement } from "lwc";

export default class AdditionTest extends LightningElement {
  code =
    '<div style="font-size: 16px; font-weight: bold;">' +
    // Line 1
    '<div style="background-color: #E8E8E8"><span style="color:purple;">import</span> { ' +
    '<span style="color:#3BB9FF;">createElement</span> } ' +
    '<span style="color:purple;">from</span> <span style="color:#FFA62F;">"lwc"</span>;</div>' +
    // Line 2
    '<div style="background-color: #F5F5F5"><span style="color:purple;">import</span> ' +
    '<span style="color:#3BB9FF;">Addition</span> ' +
    '<span style="color:purple;">from</span> <span style="color:#FFA62F;">"c/addition"</span>;</div>' +
    // Line 3
    '<div style="background-color: #E8E8E8"><br/></div>' +
    // Line 4
    '<div style="background-color: #F5F5F5"><span style="color: #F75D59;">describe</span>' +
    '(<span style="color:#FFA62F;">"c-addition"</span>, () <span style="color:#0000A0;"> => </span> {</div>' +
    // Line 5
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;<span style="color: #F75D59;">afterEach</span>' +
    '(() <span style="color:#0000A0;"> => </span> {</div>' +
    // Line 6
    '<div style="background-color: #F5F5F5"><br/></div>' +
    // Line 7
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color:purple;">while</span>(' +
    '<span style="color:#3BB9FF;">document</span>.<span style="color:#3BB9FF;">body</span>.' +
    '<span style="color:#3BB9FF;">firstChild</span>) {</div>' +
    // Line 8
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">document</span>.<span style="color:#3BB9FF;">body</span>.' +
    '<span style="color: #F75D59;">removeChild</span>(<span style="color:#3BB9FF;">document</span>.' +
    '<span style="color:#3BB9FF;">body</span>.<span style="color:#3BB9FF;">firstChild</span>);' +
    // Line 9
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;}' +
    // Line 10
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;});' +
    // Line 11
    '<div style="background-color: #E8E8E8"><br/></div>' +
    // Line 14
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;<span style="color: #F75D59;">describe</span>' +
    '(<span style="color:#FFA62F;">"adds two numbers together"</span>, () <span style="color:#0000A0;"> => </span> {</div>' +
    "</div>";
}
