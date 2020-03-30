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
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;<span style="color: #3EA055;">' +
    "// The jsdom instance is shared across test cases in a single file so reset the DOM</span></div>" +
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
    // Line 12
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;<span style="color: #F75D59;">it</span>' +
    '(<span style="color:#FFA62F;">"adds two numbers together"</span>, () <span style="color:#0000A0;"> => </span> {</div>' +
    // Line 13
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#0000A0;">const</span> <span style="color:#3BB9FF;">element</span> ' +
    '= <span style="color: #F75D59;">createElement</span>(<span style="color:#FFA62F;">' +
    '"c-addition"</span>, {</div>' +
    // Line 14
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3B9C9C">is</span>: <span style="color:#3B9C9C">Addition</span></div>' +
    // Line 15
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;});</div>' +
    // Line 16
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">document</span>.<span style="color:#3BB9FF;">body</span>.' +
    '<span style="color: #F75D59;">appendChild</span>(<span style="color:#3BB9FF;">element</span>);' +
    // Line 17
    '<div style="background-color: #F5F5F5"><br/></div>' +
    // Line 18
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #3EA055;">' +
    "// Gather all input elements</span></div>" +
    // Line 19
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#0000A0;">const</span> <span style="color:#3BB9FF;">lightningInputEls</span>' +
    '<span style="color:#3BB9FF;">element</span>.<span style="color:#3BB9FF;">shadowRoot</span>.' +
    '<span style="color: #F75D59;">querySelectorAll</span>(</div>' +
    // Line 20
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#FFA62F;">"lightning-input"</span> </div>' +
    // Line 21
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;);</div>' +
    // Line 22
    '<div style="background-color: #E8E8E8"><br/></div>' +
    // Line 23
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #3EA055;">' +
    "// Verify default set to 0</span></div>" +
    // Line 24
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">lightningInputEls</span>' +
    '<span style="color: #F75D59;">forEach</span>(' +
    '<span style="color:#3BB9FF;">el</span> <span style="color:#0000A0;"> => </span> { </div>' +
    // Line 25
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color: #F75D59;">expect</span>(' +
    '<span style="color:#3BB9FF;">el</span>.<span style="color:#3BB9FF;">value</span>).' +
    '<span style="color: #F75D59;">toBe</span>(<span style="color:#89C35C;">0</span>);</div>' +
    // Line 26
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;});</div>' +
    // Line 27
    '<div style="background-color: #E8E8E8"><br/></div>' +
    // Line 28
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #3EA055;">' +
    "// Add two numbers, dispatch onchange event</span></div>" +
    // Line 29
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">lightningInputEls</span>[' +
    '<span style="color:#89C35C;">0</span>].' +
    '<span style="color:#3BB9FF;">value</span> = <span style="color:#89C35C;">4</span>' +
    // Line 30
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">lightningInputEls</span>[' +
    '<span style="color:#89C35C;">0</span>].' +
    '<span style="color: #F75D59;">disaptchEvent</span>(<span style="color:#0000A0;">new</span> ' +
    '<span style="color:#3B9C9C">Custom Event</span>(' +
    '<span style="color:#FFA62F;">"change"</span>));</div>' +
    // Line 31
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">lightningInputEls</span>[' +
    '<span style="color:#89C35C;">1</span>].' +
    '<span style="color:#3BB9FF;">value</span> = <span style="color:#89C35C;">3</span>' +
    // Line 32
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">lightningInputEls</span>[' +
    '<span style="color:#89C35C;">1</span>].' +
    '<span style="color: #F75D59;">disaptchEvent</span>(<span style="color:#0000A0;">new</span> ' +
    '<span style="color:#3B9C9C">Custom Event</span>(' +
    '<span style="color:#FFA62F;">"change"</span>));</div>' +
    // Line 33
    '<div style="background-color: #E8E8E8"><br/></div>' +
    // Line 34
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:purple;">return</span> ' +
    '<span style="color:#3B9C9C">Promise</span>.' +
    '<span style="color: #F75D59;">resolve</span>()</div>' +
    // Line 35
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' +
    '.<span style="color: #F75D59;">then</span>' +
    '(() <span style="color:#0000A0;"> => </span> {</div>' +
    // Line 36
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color: #3EA055;">// Verify numbers added correctly</span></div>' +
    // Line 37
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color: #F75D59;">expect</span>(' +
    '<span style="color:#3BB9FF;">lightningInputEls</span>[' +
    '<span style="color:#89C35C;">2</span>].<span style="color:#3BB9FF;">value</span>).' +
    '<span style="color: #F75D59;">toBe</span>(<span style="color:#89C35C;">7</span>);</div>' +
    // Line 38
    '<div style="background-color: #F5F5F5"><br/></div>' +
    // Line 39
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color: #3EA055;">// Dispatch Clear button click event</span></div>' +
    // Line 40
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">element</span>.<span style="color:#3BB9FF;">shadowRoot</span>.' +
    '<span style="color: #F75D59;">querySelector</span>(' +
    '<span style="color:#FFA62F;">"lightning-button"</span>).' +
    '<span style="color: #F75D59;">click</span>();' +
    // Line 41
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;})</div>' +
    // Line 42
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' +
    '.<span style="color: #F75D59;">then</span>' +
    '(() <span style="color:#0000A0;"> => </span> {</div>' +
    // Line 43
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color: #3EA055;">// Verify inputs set back to 0</span></div>' +
    // Line 44
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color:#3BB9FF;">lightningInputEls</span>' +
    '<span style="color: #F75D59;">forEach</span>(' +
    '<span style="color:#3BB9FF;">el</span> <span style="color:#0000A0;"> => </span> { </div>' +
    // Line 45
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
    '<span style="color: #F75D59;">expect</span>(' +
    '<span style="color:#3BB9FF;">el</span>.<span style="color:#3BB9FF;">value</span>).' +
    '<span style="color: #F75D59;">toBe</span>(<span style="color:#89C35C;">0</span>);</div>' +
    // Line 46
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div>' +
    // Line 47
    '<div style="background-color: #E8E8E8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;});</div>' +
    // Line 48
    '<div style="background-color: #F5F5F5">&nbsp;&nbsp;});</div>' +
    // Line 49
    '<div style="background-color: #E8E8E8">});</div>' +
    "</div>";
}
