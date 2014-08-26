/**
 * Plain TeX patterns
 *
 * @author Sean Allred <code@seanallred.com>
 * @version 1.0
 */
Rainbow.extend('plain-tex', [
    {
        'name': 'comment',
        'pattern': /%.*$/gm
    },
    {
        'name': 'storage.function',
        'pattern': /\\[A-Za-z]+\*?|./g
    },
    {
        'name': 'string',
        'pattern': /$.*?$/g
    }
], true)
[LaTeX]
# special characters
darkred		N	[$#^_{}&]

# LaTeX environments
darkgreen	N	\\(?:begin|end)\s*\{[^}]*\}

# LaTeX packages
darkblue	N	\\usepackage\s*(?:\[[^]]*\]\s*)?\{[^}]*\}

# control sequences
blue		N	\\(?:[A-Za-z@]+|.)

# comments
red			Y	%.*

