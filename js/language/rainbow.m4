define(`M_QUOTE',"$1")dnl
define(`M_EXTEND_RAINBOW',`Rainbow.extend(M_QUOTE($1),[shift(shift($*))]ifelse($2,false,,$2,true,`,true',`errprint(Argument to `$0' not ``true'' or ``false'')m4exit(1)'));')dnl
define(`M_RULE',`{"pattern":$1,
  ifelse(shift(shift($*)),,"name":"$2"}')dnl
define(`M_RULE_N_',`ifelse($2,,,`,$1:"$2"')ifelse($#,2,,`M_RULE_N_(`incr($1)',shift(shift($*)))')')dnl
define(`M_RULE_N',`{"pattern":$1,"matches":{0:"$2"M_RULE_N_(1,shift(shift($*)))}}')dnl
