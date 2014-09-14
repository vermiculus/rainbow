include(rainbow.m4)dnl
dnl
dnl'D' not included (it stands for Do not use)
define(`M_EXPL3_ARGSPEC_OPTIONS',`nNpTFwcVvxof')dnl
dnl
M_EXTEND_RAINBOW(expl3, true,
  M_RULE(/\\[a-zA-Z]+|./g,
    tex.macro),
  M_RULE(/%.*$/,
    tex.comment),
  M_RULE_N(/((?:[a-z])+_)([a-z_]+)(:M_EXPL3_ARGSPEC_OPTIONS)/g,
    tex.function,
    tex.function.module,
    tex.function.name,
    tex.function.argspec),
  M_RULE_N)
