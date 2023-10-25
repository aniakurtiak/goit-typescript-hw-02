/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/


let union: string | number;
union = 5;
union = 'five';

type access = "enable" | "disable";
let literal: access;
literal = "enable";
literal = 'disable';