/* global describe, run */
var language = 'plain-tex';

describe(language, function() {
    run(
        language,

        'normal text',

        'hello, world!',

        'hello, world!'
    );

    run(
        language,

        'comment',

        '% this is a comment',

        '<span class="comment"># this is a comment</span>'
    );

    run(
        language,

        'def macro parameters',

        '\\def\macro#1 to #2,#3\end{\n' +
        '  hello, #1, #2, and #3\n' +
        '}',

        '<span class="storage function">\\def</span><span class="entity name function">\\macro</span><span class="keyword operator">#1</span> to <span class="keyword operator">#2</span>,<span class="keyword operator">#3</span><span class="function call">\\end</span><span class="keyword operator">{</span>\n' +
        '  hello, <span class="keyword operator">#1</span>, <span class="keyword operator">#2</span>, and <span class="keyword operator">#3</span>\n' +
        '<span class="keyword operator">}</span>'
    );
});
