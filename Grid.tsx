import { TGrid } from "./grid";

/**
 * Defines the grid style.
 * @notExported
 */
function style(props: { number: number; string: string }): object {
  return {};
}

/**
 * Defines the Grid component
 */
export function Grid(props: TGrid) {
  /**
   * An inline comment. This won't be displyed in docs ....
   */
  const v = style({ number: 1, string: "xxx" });
  return v;
}
