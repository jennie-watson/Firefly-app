import React from 'react'

// cat videos watched
const AnimalSvg = props => (
  <svg {...props}>
    <g fill="#FFF">
      <text
        fontFamily="OpenSans-ExtraBold, Open Sans"
        fontSize={9}
        fontWeight={600}
        fillOpacity={0.704}
        transform="translate(18 72)"
      >
        <tspan x={15.771} y={11}>
          {'84'}
        </tspan>
        <tspan
          x={26.318}
          y={11}
          fontFamily="OpenSans-Regular, Open Sans"
          fontWeight="normal"
        />
        <tspan
          x={28.656}
          y={11}
          fontFamily="OpenSans-SemiBoldItalic, Open Sans"
          fontStyle="italic"
          fontWeight={500}
        >
          {'last 30 days'}
        </tspan>
      </text>
      <text
        fontFamily="MaterialIcons-Regular, Material Icons"
        fontSize={14}
        transform="translate(18 72)"
      >
        <tspan x={0} y={14}>
          {'arrow_downward'}
        </tspan>
      </text>
    </g>
  </svg>
)

export default AnimalSvg
