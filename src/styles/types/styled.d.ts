import 'styled-components'
import { Colors } from './colors'
import { FontSize } from './fontSize'
import { FontWeight } from './fontWeight'
import { Size } from './size'
import { LineHeight } from './lineHeight'
import { MaxWidth } from './maxWidth'
import { Position } from './position'
import { Flex } from './flex'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    fontWeight: FontWeight
    fontSize: FontSize
    lineHeight: LineHeight
    maxWidth: MaxWidth
    size: Size
    position: Position
    flex: Flex
  }
}
