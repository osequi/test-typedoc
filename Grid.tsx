import { TGrid } from "./grid";

/**
 * Defines the grid style.
 * @notExported
 * @category Main/Sub
 */
function style(props: { number: number; string: string }): object {
  return {};
}

/**
 * Defines the Grid component
 *
 * @example "This is a test description"
 * @category Main
 */
export function Grid(props: TGrid) {
  /**
   * An inline comment. This won't be displyed in docs ....
   */
  const v = style({ number: 1, string: "xxx" });
  return v;
}
