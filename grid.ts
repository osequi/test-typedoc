/**
 * Defines the object return type
 */
export type TTokenReturnTypeObject = Object;

/**
 * Defines the string return type
 */
export type TTokenReturnTypeString = String;

/**
 * Defines the return types
 */
export type TTokenReturnTypes = Object | String;

/**
 * Defines the Grid return type
 */
export type TGridReturnType = TTokenReturnTypes;

/**
 * Defines the Grid interface
 */
export interface TGrid {
  /**
   * The number of columns, unitless.
   * The columns will be calculated using `grid-template-columns: repeat(columns, 1fr)`
   * When the columns is an array a responsive grid will be set up.
   *
   * @example <Grid columns={[1,2]}> => 1 column grid on the first breakpoint, 2 column grid on the second breakpoint. Breakpoints are coming from the theme.
   */
  columns: number | number[];
  gap: number | number[];
  spacing: number | number[];
  /**
   * The return type
   */
  as: TGridReturnType;
}

/**
 * Defines the default values
 */
export const grid = {
  columns: 1,
  gap: [1, 2],
  spacing: [1, 2],
  as: String,
};
