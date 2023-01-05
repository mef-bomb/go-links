import { SvgIcon } from '@mui/material'
import { FC } from 'react'

export const Chrome: FC = () => {
  return (
    <SvgIcon
      sx={{
        width: '24px',
        height: '24px',

        '@media (min-width: 840px)': {
          width: '28px',
          height: '28px',
        },

        '@media (min-width: 1440px)': {
          width: '32px',
          height: '32px',
        },
      }}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='32' height='32' fill='url(#pattern1)' />
      <defs>
        <pattern id='pattern1' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use href='#image0_464_7173' transform='scale(0.0104167)' />
        </pattern>
        <image
          id='image0_464_7173'
          width='96'
          height='96'
          href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM2MCwgMjAyMC8wMi8xMy0wMTowNzoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4RjhGQTUxRDUxMzAxMUU1QjVCMEQ0RTBBNDRBRDdENSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFODBCNzMwMzc5QTUxMUVEQTMxQ0NGN0EwNjQzMzVCMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFODBCNzMwMjc5QTUxMUVEQTMxQ0NGN0EwNjQzMzVCMyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNBNDNFRTFFNzlBNDExRUQ5MUJERTM3OTM3NjY1NUVFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNBNDNFRTFGNzlBNDExRUQ5MUJERTM3OTM3NjY1NUVFIi8+IDwvcmRmOkRl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'
        />
      </defs>
    </SvgIcon>
  )
}
