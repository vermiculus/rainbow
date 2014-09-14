/**
 * expl3 patterns
 *
 * @author Sean Allred <code@seanallred.com>
 * @version 1.0
 */
Rainbow.extend('expl3', [
    {
        'name': 'tex.space',
        'pattern': /~/g
    },
    {
        'name': 'tex.comment',
        'pattern': /%.*$/gm
    },
    {
        'name': 'tex.macro.parameter',
        'pattern': /#\d/g
    },
    {
        'name': 'tex.macro',
        'pattern': /\\[A-Za-z]+/g
    },
    {
        'matches':
        {
            0: 'tex.function',
            1: 'tex.function.module',
            2: 'tex.function.argspec'
        },
        'pattern': /(\\(?:__)?[a-z]+_)[a-z_]+(:[nNpTFwcVvxof]*)/g
        // argspec `D' intentionally ignored; _D_o not use
    },
    {
        'matches':
        {
            0: 'tex.variable',
            1: 'tex.variable.scope',
            2: 'tex.variable.type'
        },
        'pattern': /(\\[cgl]__?)[a-z][a-z_]+(_[A-Za-z]+)/g
    },
    {
        'matches':
        {
            1: 'tex.keyval.key',
            2: 'tex.function.module',
            3: 'tex.function',
            4: 'tex.function.argspec'
        },
        'pattern': /([a-z\-]+)\s+(\.[a-z]+_)([a-z_]+)(:[nNpTFwcVvxof]*)\s*=/g
    }
], true);
