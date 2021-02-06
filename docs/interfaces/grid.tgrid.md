[undefined](../README.md) / [Modules](../modules.md) / [grid](../modules/grid.md) / TGrid

# Interface: TGrid

[grid](../modules/grid.md).TGrid

Defines the Grid interface

## Hierarchy

* **TGrid**

## Table of contents

### Properties

- [as](grid.tgrid.md#as)
- [columns](grid.tgrid.md#columns)
- [gap](grid.tgrid.md#gap)
- [spacing](grid.tgrid.md#spacing)

## Properties

### as

• **as**: [*TTokenReturnTypes*](../modules/grid.md#ttokenreturntypes)

The return type

Defined in: [grid.ts:38](https://github.com/osequi/test-typedoc/blob/9023e58/grid.ts#L38)

___

### columns

• **columns**: *number* \| *number*[]

The number of columns, unitless.
The columns will be calculated using `grid-template-columns: repeat(columns, 1fr)`
When the columns is an array a responsive grid will be set up.

**`example`** <Grid columns={[1,2]}> => 1 column grid on the first breakpoint, 2 column grid on the second breakpoint. Breakpoints are coming from the theme.

Defined in: [grid.ts:32](https://github.com/osequi/test-typedoc/blob/9023e58/grid.ts#L32)

___

### gap

• **gap**: *number* \| *number*[]

Defined in: [grid.ts:33](https://github.com/osequi/test-typedoc/blob/9023e58/grid.ts#L33)

___

### spacing

• **spacing**: *number* \| *number*[]

Defined in: [grid.ts:34](https://github.com/osequi/test-typedoc/blob/9023e58/grid.ts#L34)
