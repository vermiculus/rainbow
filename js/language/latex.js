/**
 * LaTeX patterns
 *
 * @author Sean Allred <code@seanallred.com>
 * @version 1.0
 */
Rainbow.extend('latex', [
    {
        'name': 'tex.comment',
        'pattern': /%.*$/gm
    },
    {
        'name': 'tex.macro',
        'pattern': /\\([A-Za-z@]+\*?|.)/g
    },
    {
        'matches':
        {
            1: 'tex.macro',
            2: 'tex.environment'
        },
        'pattern': /(\\(?:begin|end|documentclass))\s*\{(.*?)\}/g
    },
    {
        'name': 'tex.math',
        'pattern': /\$.*?\$/g
    },
    {
        'matches':
        {
            1: 'tex.doc.section.tag',
            2: 'tex.doc.section'
        },
        'pattern': /(\\(?:(?:sub)?paragraph|(?:sub){0,3}section|chapter|part)\*?)\{(.*?)\}/g
    },
    {
        'name': 'tex.macro.parameter',
        'pattern': /#\d/g
    },
    {
        'matches':
        {
            1: 'tex.special.newcommand',
            2: 'tex.special.newcommand.command',
            3: 'tex.special.newcommand.parameter'
        },
        'pattern': /(\\newcommand\*?)\s*\{?(\\[A-Za-z])\}?(\[\d\])?/g
    }
], true)
