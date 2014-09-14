/**
 * Plain TeX patterns
 *
 * @author Sean Allred <code@seanallred.com>
 * @version 1.0
 */
Rainbow.extend('plain-tex', [
    {
        'name': 'tex.comment',
        'pattern': /%.*$/gm
    },
    {
        'name': 'tex.macro',
        'pattern': /\\([A-Za-z@]+\*?|.)/g
    },
    {
        'name': 'tex.macro.parameter',
        'pattern': /\$.*?\$/g
    }
], true)
